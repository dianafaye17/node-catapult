var m = require('mithril');
var Weather = require('../models/weather');
var WeatherTextDisplayComponent = require('./WeatherTextDisplayComponent');


var CityInputComponent = module.exports;

CityInputComponent.controller = function (options) {
  var ctrl = this;

  ctrl.inputDirty = false;

  ctrl.updateCity = function(e) {
    ctrl.city = e.target['value'];
    ctrl.inputDirty = true;

    if (ctrl.inputDirty) {
      ctrl.cityGreeting = 'You live in '+ (ctrl.city || 'a magical land far, far away') + '!'
    }
  }

  ctrl.fetchWeather = function() {
    console.log('blah ran');
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

