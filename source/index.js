const EventEmitter = require('event-emitter-object')
const kit = require('@basekits/core')
const kitType = require('@basekits/kit-type')
const kitObject = require('@basekits/kit-object')
const kitError = require('@basekits/kit-error')
const kitValidator = require('@basekits/kit-validator')
const kitDOM = require('@basekits/kit-dom')
const kitFn = require('@basekits/kit-function')
kit.addKit(kitType)
kit.addKit(kitObject)
kit.addKit(kitError)
kit.addKit(kitValidator)
kit.addKit(kitDOM)
kit.addKit(kitFn)

const avgReadingSpeeds = require('./readingSpeedsByLanguage')
const createVisibilityStateListener = require('./createVisibilityStateListener')

function Readometer() {
  EventEmitter.call(this, {})

  this.isWindowVisible = true
  this.visibilityStateListener = createVisibilityStateListener()
  this.visibilityStateListener.start()
  this.visibilityStateListener.emitter.on('update', function() {
    this.isWindowVisible = this.visibilityStateListener.getState() == 'visible'
  }.bind(this))
}

Readometer.prototype = Object.create(EventEmitter.prototype)
Readometer.prototype.constructor = Readometer

Readometer.prototype.clearMemory = function clearMemory(element) {
  this.element = element
  this.progress = 0
  this.reading = false
  this.readingTime = 0
  this.targetReadingTime = 0
  this.milestones = []
  this.absMilestones = []
  this.distance = this.getElementDistanceFromTop(this.element)
  this.hasScroll = null
  this.viewport = kit.getViewportDimensions()
  this.lastTimestamp = 0
  this.timeInterval = null
}

Readometer.prototype.start = function start(element, language = 'default') {
  if (!kit.isDOMElement(element)) return undefined

  // back to initial state
  this.clearMemory(element)

  // user should satisfy the target reading time based on average reading speed.
  const avgSpeed = kit.getProp(avgReadingSpeeds, language, 'default')
  const countWords = this.element.innerText.split(' ').filter(w => w.length > 1)
  this.targetReadingTime = Math.floor((countWords.length / avgSpeed) * 60) // in seconds

  // user should pass certain scroll points across text inside element
  const totalHeight = this.element.scrollHeight
  const visibleHeight = this.element.clientHeight
  this.hasScroll = totalHeight !== visibleHeight
  const maxVisibleHeight = this.viewport.height < visibleHeight 
    ? this.viewport.height 
    : visibleHeight
  const relDistance = this.hasScroll ? 0 : this.distance
  for (let i = 1; i <= Math.floor(totalHeight / maxVisibleHeight); i++) {
    this.milestones.push( relDistance + (maxVisibleHeight * i) )
  }
  if (this.hasScroll || visibleHeight > this.viewport.height) {
    this.milestones.push( relDistance + totalHeight )
  }
  this.absMilestones = [].concat(this.milestones)

  // execute onScroll once manually to resolve element already visible issue
  this.onScroll()

  // measure the time which element stays inside the visible area
  if (this.hasScroll) this.element.onscroll = kit.debounce(this.onScroll.bind(this), 300)
  else window.onscroll = kit.debounce(this.onScroll.bind(this), 300)
  this.timeInterval = setInterval(() => this.checkReadingTime(), 1000)

  return this
}

Readometer.prototype.onScroll = function onScroll() {
  const isVisible = this.checkReadingTime()
  if (!isVisible || this.milestones.length === 0) return undefined

  // check the next reading milestone
  const pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
  const maxVisibleHeight = this.viewport.height < this.element.clientHeight 
    ? this.viewport.height 
    : this.element.clientHeight
  const refScrollTop = this.hasScroll 
    ? (this.element.scrollTop + maxVisibleHeight) 
    : (pageScrollTop + this.viewport.height)
  if (refScrollTop >= this.milestones[0]) {
    // milestone achieved
    this.milestones.shift()
    this.checkProgress()
  }
}

Readometer.prototype.checkReadingTime = function checkReadingTime() {
  const pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
  const relScrollTop = this.distance - pageScrollTop
  const visibleFromTop = this.viewport.height - relScrollTop > 0
  const visibleFromBottom = this.distance + this.element.clientHeight - pageScrollTop > 0
  const isVisible = visibleFromTop === true && visibleFromBottom === true && this.isWindowVisible === true
  const timestamp = this.getTimestamp()

  if (isVisible) {
    if (this.reading === false) {
      this.lastTimestamp = timestamp
      this.reading = true
    }
    else if (this.reading === true) {
      this.readingTime += timestamp - this.lastTimestamp
      this.lastTimestamp = timestamp
    }
  }
  else {
    if (this.reading === true) {
      this.readingTime += timestamp - this.lastTimestamp
      this.reading = false
    }
  }

  this.checkProgress()

  return isVisible
}

Readometer.prototype.checkProgress = function checkProgress() {
  const scrollingProgress = Number.parseFloat(((this.absMilestones.length - this.milestones.length) / this.absMilestones.length) * 100)
  const targetProgress = 100
  const targetTimeSpent = this.targetReadingTime
  const readingTimeProgress = Math.ceil((this.readingTime / targetTimeSpent) * 100)
  // check if scrolling progress and reading time satisfies each other
  let progress = 0
  if (readingTimeProgress >= scrollingProgress) progress = scrollingProgress
  else if (scrollingProgress >= 75 && readingTimeProgress >= 75) progress = readingTimeProgress
  else if (scrollingProgress >= 50 && readingTimeProgress >= 50) progress = readingTimeProgress
  else progress = 0

  if (this.progress !== progress && progress > this.progress) {
    this.progress = progress
    this.emit('progress', Math.ceil(this.progress))
    if (Math.ceil(this.progress) === 100) {
      clearInterval(this.timeInterval)
      this.timeInterval = null
      if (this.hasScroll) this.element.onscroll = null
      else window.onscroll = null
    }
  }
}

Readometer.prototype.getTimestamp = function getTimestamp() {
  return Math.ceil(Date.now() / 1000)
}

Readometer.prototype.getElementDistanceFromTop = function getElementDistanceFromTop(element) {
  let distance = element.offsetTop
  let parent = element.parentElement
  while ( kit.isNotEmpty(parent) ) {
    distance += parent.offsetTop
    parent = parent.parentElement
  }
  return distance
}

module.exports = Readometer