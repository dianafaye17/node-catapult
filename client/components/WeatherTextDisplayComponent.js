var m = require('mithril');
var Weather = require('../models/weather');
var CityInput = require('./CityInputComponent');


var WeatherTextDisplayCompenent = module.exports;

WeatherTextDisplayCompenent.controller = function (options) {
  var ctrl = this;
};

WeatherTextDisplayCompenent.view = function (ctrl, options) {
  return m('.weather-text-component', [
    m('p', JSON.stringify(Weather.report)),
    m('p', JSON.stringify(Weather.report)),
    m('p', 'cheese')
  ]);
};