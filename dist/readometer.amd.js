define(["event-emitter-object","visibility-state-listener","basekits"],(function(t,e,i){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var s={default:180,ar:138,ch:158,nl:202,en:228,fi:161,fr:195,de:179,iw:187,it:188,jp:193,pl:166,pt:181,ru:184,sl:180,sp:218,sv:199,tr:166};function n(){t.call(this,{}),this.isWindowVisible=!0,this.visibilityStateListener=e(),this.visibilityStateListener.start(),this.visibilityStateListener.emitter.on("update",function(){this.isWindowVisible="visible"==this.visibilityStateListener.getState()}.bind(this))}return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.clearMemory=function(t){this.element=t,this.progress=0,this.reading=!1,this.readingTime=0,this.targetReadingTime=0,this.milestones=[],this.absMilestones=[],this.distance=this.getElementDistanceFromTop(this.element),this.hasScroll=null,this.viewport=i.domkit.getViewportDimensions(),this.lastTimestamp=0,this.timeInterval=null},n.prototype.start=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";if(i.typekit.isDOMElement(t)){this.clearMemory(t);var o=i.objectkit.getProp(s,n,"default"),h=this.element.innerText.split(" ").filter((function(t){return t.length>1}));this.targetReadingTime=Math.floor(h.length/o*60);var l=this.element.scrollHeight,r=this.element.clientHeight;this.hasScroll=l!==r;for(var a=this.viewport.height<r?this.viewport.height:r,c=this.hasScroll?0:this.distance,p=1;p<=Math.floor(l/a);p++)this.milestones.push(c+a*p);return(this.hasScroll||r>this.viewport.height)&&this.milestones.push(c+l),this.absMilestones=[].concat(this.milestones),this.onScroll(),this.hasScroll?this.element.onscroll=i.functionkit.debounce(this.onScroll.bind(this),300):window.onscroll=i.functionkit.debounce(this.onScroll.bind(this),300),this.timeInterval=setInterval((function(){return e.checkReadingTime()}),1e3),this}},n.prototype.onScroll=function(){if(this.checkReadingTime()&&0!==this.milestones.length){var t=document.documentElement.scrollTop||document.body.scrollTop||0,e=this.viewport.height<this.element.clientHeight?this.viewport.height:this.element.clientHeight;(this.hasScroll?this.element.scrollTop+e:t+this.viewport.height)>=this.milestones[0]&&(this.milestones.shift(),this.checkProgress())}},n.prototype.checkReadingTime=function(){var t=document.documentElement.scrollTop||document.body.scrollTop||0,e=this.distance-t,i=this.viewport.height-e>0,s=this.distance+this.element.clientHeight-t>0,n=!0===i&&!0===s&&!0===this.isWindowVisible,o=this.getTimestamp();return n?!1===this.reading?(this.lastTimestamp=o,this.reading=!0):!0===this.reading&&(this.readingTime+=o-this.lastTimestamp,this.lastTimestamp=o):!0===this.reading&&(this.readingTime+=o-this.lastTimestamp,this.reading=!1),this.checkProgress(),n},n.prototype.checkProgress=function(){var t=Number.parseFloat((this.absMilestones.length-this.milestones.length)/this.absMilestones.length*100),e=this.targetReadingTime,i=Math.ceil(this.readingTime/e*100),s=0;s=i>=t?t:t>=75&&i>=75||t>=50&&i>=50?i:0,this.progress!==s&&s>this.progress&&(this.progress=s,this.emit("progress",Math.ceil(this.progress)),100===Math.ceil(this.progress)&&(clearInterval(this.timeInterval),this.timeInterval=null,this.hasScroll?this.element.onscroll=null:window.onscroll=null))},n.prototype.getTimestamp=function(){return Math.ceil(Date.now()/1e3)},n.prototype.getElementDistanceFromTop=function(t){for(var e=t.offsetTop,s=t.parentElement;i.validationkit.isNotEmpty(s);)e+=s.offsetTop,s=s.parentElement;return e},n}));
