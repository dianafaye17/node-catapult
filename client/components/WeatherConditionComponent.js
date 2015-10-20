var m = require('mithril');
var Weather = require('../models/weather');

var WeatherConditionComponent = module.exports;


WeatherConditionComponent.controller = function (options) {
  var ctrl = this;
};

WeatherConditionComponent.view = function (ctrl, options) {
  if (Weather.report) {
    
    if (Weather.wetWeatherConditions.hasOwnProperty(Weather.report["weather"][0]["id"])) {
      return m('.weather-condition-component', [
        m('img.friend-image', {src: "images/kasapanda.svg"}),
        m('p', JSON.stringify(Weather.report["weather"][0]["main"]))
      ]);
    }
    else if (Weather.cloudyWeatherConditions.hasOwnProperty(Weather.report["weather"][0]["id"])) {
      return m('.weather-condition-component', [
        m('img.friend-image', {src: "images/cloud.svg"}),
        m('p', JSON.stringify(Weather.report["weather"][0]["main"]))
      ]);
    }
    else return m('.weather-condition-component', [
      m('img.friend-image', {src: "images/sakurausagi.svg"}),
      m('p', JSON.stringify(Weather.report["weather"][0]["main"]))
    ]);
  }

  else {
    return m('div', '');
  }
};
