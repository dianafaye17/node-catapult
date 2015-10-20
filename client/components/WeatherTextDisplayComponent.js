var m = require('mithril');
var Weather = require('../models/weather');
var CityInput = require('./CityInputComponent');


var WeatherTextDisplayCompenent = module.exports;

WeatherTextDisplayCompenent.controller = function (options) {
  var ctrl = this;
};

WeatherTextDisplayCompenent.view = function (ctrl, options) {
  if (Weather.report) {
    return m('.weather-text-component', [
      m('p', JSON.stringify(Weather.report["weather"][0]["main"])),
      m('p', JSON.stringify(Weather.report["main"]["temp"])),
      m('p', 'cheese')
    ]);
  }
  else {
    return m('div', '');
  }

};