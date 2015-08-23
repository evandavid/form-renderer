'use strict';

jQuery.alpaca.Fields.CustomLabel = jQuery.alpaca.Fields.TextField.extend({
    getFieldType: function() {
        return 'label';
    }
});

jQuery.alpaca.Fields.CustomButton = jQuery.alpaca.Fields.TextField.extend({
    getFieldType: function() {
        return 'button';
    }
});

Alpaca.registerFieldClass('label',    Alpaca.Fields.CustomLabel);
Alpaca.registerFieldClass('button',   Alpaca.Fields.CustomButton);

// Alpaca.registerView({
//   'id': 'custom-display',
//   'parent': 'bootstrap-display',
//   'templates': {
//     'control':               './views/alpaca/custom-display/control.html',
//     'control-url':           './views/alpaca/custom-display/control-url.html',
//     'control-text':          './views/alpaca/custom-display/control-text.html',
//     'control-date':          './views/alpaca/custom-display/control-date.html',
//     'control-file':          './views/alpaca/custom-display/control-upload.html',
//     'control-radio':         './views/alpaca/custom-display/control-radio.html',
//     'control-email':         './views/alpaca/custom-display/control-email.html',
//     'control-files':         './views/alpaca/custom-display/control-upload.html',
//     'control-select':        './views/alpaca/custom-display/control-select.html',
//     'control-boolean':       './views/alpaca/custom-display/control-boolean.html',
//     'control-checkbox':      './views/alpaca/custom-display/control-checkbox.html',
//     'control-textarea':      './views/alpaca/custom-display/control-textarea.html',
//     'control-reference':     './views/alpaca/custom-display/control-upload.html',
//     'control-references':    './views/alpaca/custom-display/control-upload.html',
//     'control-custom-editor': './views/alpaca/custom-display/control-editor.html'
//   }
// });

Alpaca.registerView({
  'id': 'custom-edit',
  'parent': 'web-edit',
  'templates': {
    'control-label':           './views/alpaca/custom-edit/control-label.html',
    'control-button':          './views/alpaca/custom-edit/control-button.html',
    // 'control-date':          './views/alpaca/custom-edit/control-date.html',
    // 'control-file':          './views/alpaca/custom-edit/control-upload.html',
    // 'control-radio':         './views/alpaca/custom-edit/control-radio.html',
    // 'control-email':         './views/alpaca/custom-edit/control-email.html',
    // 'control-files':         './views/alpaca/custom-edit/control-upload.html',
    // 'control-select':        './views/alpaca/custom-edit/control-select.html',
    // 'control-boolean':       './views/alpaca/custom-edit/control-boolean.html',
    // 'control-checkbox':      './views/alpaca/custom-edit/control-checkbox.html',
    // 'control-textarea':      './views/alpaca/custom-edit/control-textarea.html',
    // 'control-reference':     './views/alpaca/custom-edit/control-reference.html',
    // 'control-references':    './views/alpaca/custom-edit/control-reference.html',
    // 'control-custom-editor': './views/alpaca/custom-edit/control-editor.html'
  }
});


// Handlebars.registerHelper('isName', function(context, options) {
//   if(context.indexOf('_name') >= 0) {
//     return options.fn(this);
//   }
//   return options.inverse(this);
// });

// Handlebars.registerHelper('json', function(obj) {
//   return JSON.stringify(obj);
// });

// /*jslint eqeq: true*/
// Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
//   switch (operator) {
//     case '==':
//       return (v1 == v2) ? options.fn(this) : options.inverse(this);
//     case '!=':
//       return (v1 != v2) ? options.fn(this) : options.inverse(this);
//     case '===':
//       return (v1 === v2) ? options.fn(this) : options.inverse(this);
//     case '<':
//       return (v1 < v2) ? options.fn(this) : options.inverse(this);
//     case '<=':
//       return (v1 <= v2) ? options.fn(this) : options.inverse(this);
//     case '>':
//       return (v1 > v2) ? options.fn(this) : options.inverse(this);
//     case '>=':
//       return (v1 >= v2) ? options.fn(this) : options.inverse(this);
//     case '&&':
//       return (v1 && v2) ? options.fn(this) : options.inverse(this);
//     case '||':
//       return (v1 || v2) ? options.fn(this) : options.inverse(this);
//     default:
//       return options.inverse(this);
//   }
// });
