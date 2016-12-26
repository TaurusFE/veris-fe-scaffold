// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Copy taurus assets from aii-taurus.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
var SRC = path.resolve(__dirname, '../src')
var T_DIST = path.resolve(__dirname, '../node_modules/aii-taurus/dist')
rm('-rf', SRC + '/assets')

// copy static files
cp('-R', T_DIST + '/assets', SRC + '/assets')

spinner.stop()
