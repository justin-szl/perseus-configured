window.jQuery = require('jquery');
require('./mathquill.min.js');

// NOTE: We don't import the CSS here. Instead, applications can do it separately:
//       import "mathquill-webpack/mathquill.css";

module.exports = window.MathQuill;
