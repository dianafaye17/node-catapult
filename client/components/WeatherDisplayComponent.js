var m = require('mithril');
var Weather = require('../models/weather');
var WeatherConditionComponent = require('./WeatherConditionComponent');
var TemperatureComponent = require('./TemperatureComponent');


var WeatherTextDisplayComponent = module.exports;

WeatherTextDisplayComponent.controller = function (options) {
  var ctrl = this;
};

WeatherTextDisplayComponent.view = function (ctrl, options) {
  if (Weather.report) {
    return m('.weather-text-component', [
      WeatherConditionComponent,
      TemperatureComponent
    ]);
  }
  else {
    return m('div', '');
  }
};
