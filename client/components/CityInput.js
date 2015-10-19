var m = require('mithril');
var Location = require('../models/location');


var CityInput = module.exports;

CityInput.controller = function (options) {
  var ctrl = this;
  Location.sendCity();
  this.city;
  this.inputDirty = false;
};

CityInput.view = function (ctrl, options) {
  return m('.city-input-wrapper', [
    m('label', 'What City Do You Live In? ', [
      m('input[type=text].city-input', {
        placeholder: 'Example:  Austin',
        oninput: function(e) { 
          ctrl.city = e.target['value'];
          ctrl.inputDirty = true;
          if (ctrl.inputDirty) {
            ctrl.cityGreeting = 'You live in '+ ctrl.city + '!'
          }
        }
      }),
    ]),
    m('button', {
      onclick: function(e) {
        console.log('clicked');
      }
    }, 'GO!'),
    m('p', ctrl.cityGreeting)
  ]);
};
