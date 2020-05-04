const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  external: [
    'basekits', 'event-emitter-object', 'visibility-state-listener'
  ],
  input: 'src/index.js',
  output: [
    {
      format: 'amd',
      file: 'dist/readometer.amd' + suffix + '.js'
    },
    {
      format: 'cjs',
      file: 'dist/readometer.cjs' + suffix + '.js'
    },
    {
      format: 'es',
      file: 'dist/readometer.es' + suffix + '.js'
    },
    {
      format: 'iife',
      file: 'dist/readometer.iife' + suffix + '.js',
      name: 'Readometer',
      globals: {
        'basekits': 'Basekits',
        'event-emitter-object': 'EventEmitterObject',
        'visibility-state-listener': 'VisibilityStateListener'
      }
    },
    {
      format: 'umd',
      file: 'dist/readometer.umd' + suffix + '.js',
      name: 'Readometer',
      globals: {
        'basekits': 'Basekits',
        'event-emitter-object': 'EventEmitterObject',
        'visibility-state-listener': 'VisibilityStateListener'
      }
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    terser({sourcemap: false})
  ]
}
