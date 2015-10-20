var m = require('mithril');
var Weather = require('../models/weather');
var WeatherConditionComponent = require('./WeatherConditionComponent');
var TemperatureComponent = require('./TemperatureComponent');


var WeatherDisplayComponent = module.exports;

WeatherDisplayComponent.controller = function (options) {
  var ctrl = this;
};

WeatherDisplayComponent.view = function (ctrl, options) {
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
