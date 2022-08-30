/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

console.log('test js!!!');

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
import './styles/scss/style.scss';

// start the Stimulus application
import './bootstrap';
// compile new javascript file
import './javascript/test_1';
import './javascript/test_2';

// const $ = require('jquery');

// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover();
// });
