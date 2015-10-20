var m = require('mithril');
var Weather = require('../models/weather');
var WeatherDisplayComponent = require('./WeatherDisplayComponent');


var CityInputComponent = module.exports;

CityInputComponent.controller = function (options) {
  var ctrl = this;

  ctrl.inputDirty = false;

  ctrl.updateCity = function(e) {
    ctrl.city = e.target['value'];
    ctrl.inputDirty = true;

    if (ctrl.inputDirty) {
      ctrl.cityGreeting = 'You live in '+ (ctrl.city || 'a magical land far, far away') + '!' // default value
    }
  }

  ctrl.fetchWeather = function() {
    Weather.fetch(ctrl.city);
  }
};

CityInputComponent.view = function (ctrl, options) {
  return m('.city-input-wrapper', [
    m('label', 'What City Do You Live In? ', [
      m('input[type=text].city-input', {
        placeholder: 'Example:  Austin',
        oninput: ctrl.updateCity}
      ),
    ]),
    m('button', {
      onclick: ctrl.fetchWeather
    }, 'GO!'),
    m('p', ctrl.cityGreeting)
  ]);
};
