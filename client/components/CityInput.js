var m = require('mithril');
var Location = require('../models/location');

var CityInput = module.exports;

CityInput.controller = function (options) {
  var ctrl = this;
  Location.sendCity();
};

CityInput.view = function (ctrl, options) {
  return m('.city-input-wrapper', [
    m('label', 'What City Do You Live In? ', [
      m('input[type=text].city-input', { 
        oninput: function(e) { 
          ctrl.city = e.target['value'];
        }
      }, 'Blargl')
    ])
  ]);
};
