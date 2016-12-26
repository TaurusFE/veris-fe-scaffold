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
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
var SRC = path.resolve(__dirname, '../src')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)

// copy static files
ls(SRC).forEach(function (file) {
  console.log(file);
  cp('-R', SRC + '/' + file, config.build.assetsRoot)
  if(file!=='i18n' &&  file!=='assets' ){
    rm('-rf',config.build.assetsRoot + '/' + file +'/common')
  }
})




webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})


