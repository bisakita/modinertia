const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')

// .js('resources/js/bootstrap.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');
mix.js('resources/js/app.js', 'public/js')
    // .js('resources/js/bootstrap.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.runtime.esm.js',
                '@': path.resolve('resources/js'),
                '~': path.resolve('Modules'),
            },
        },
    });
// mix.styles([
//     'resource/js/assets/css/demo.css',
//     'resources/js/assets/css/nucleo-icons.css'
// ], 'public/css/app.css');
