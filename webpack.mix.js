let mix = require("webpack-mix").mix;
let minifier = require('minifier');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js("src/assets/js/app.js", "dist/assets/js/app.js")
  .sass("src/assets/scss/app.scss", "dist/assets/css", {outputStyle: 'nested'})
  .copy("src/assets/images/**/*.*", "dist/assets/images")
  .copy("src/assets/fonts/**/*.*", "dist/assets/fonts")
  .copy("src/index.html", "dist")
  .setPublicPath("dist");

if(process.env.NODE_ENV.trim() === 'production'){
  mix.then(() => {
    //minifier.minify('dist/assets/css/app.css');
  });
}