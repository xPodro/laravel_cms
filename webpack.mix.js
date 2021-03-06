/**
 * Created by edwin on 3/26/17.
 */
const { mix } = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
    'resources/assets/css/libs/blog-post.css',
    'resources/assets/css/libs/bootstrap.css',
    /* 'resources/assets/css/libs/bootstrap.min.css', */
    'resources/assets/css/libs/font-awesome.css',
    /* 'resources/assets/css/libs/metisMenu.css', */
    /* 'resources/assets/css/libs/sb-admin-2.css', */

    /* 'resources/assets/css/libs/morris.css', */

    'resources/assets/css/libs/dataTables.bootstrap4.css',
    'resources/assets/css/libs/sb-admin.css',

    'resources/assets/css/libs/styles.css'

], 'public/css/libs.css');

mix.scripts([
    'resources/assets/js/libs/jquery.js',
    /* 'resources/assets/js/libs/bootstrap.js', */
    /* 'resources/assets/js/libs/bootstrap.min.js', */
    'resources/assets/js/libs/bootstrap.bundle.js',
    /* 'resources/assets/js/libs/metisMenu.js', */
    
    /* 'resources/assets/js/libs/morris.js', */
    /* 'resources/assets/js/libs/raphael.js', */
    /* 'resources/assets/js/libs/morris-data.js', */

    /* 'resources/assets/js/libs/sb-admin-2.js', */

    'resources/assets/js/libs/jquery.easing.js',
    'resources/assets/js/libs/Chart.js',
    'resources/assets/js/libs/jquery.dataTables.js',
    'resources/assets/js/libs/dataTables.bootstrap4.js',
    'resources/assets/js/libs/sb-admin',
    'resources/assets/js/libs/sb-admin-charts.js',
    'resources/assets/js/libs/sb-admin-datatables.js',

    'resources/assets/js/libs/scripts.js'

], 'public/js/libs.js');