var m = require('mithril');
var MainComponent = require('./components/MainComponent');
var CityInputComponent = require('./components/CityInputComponent');
var WeatherDisplayComponent = require('./components/WeatherDisplayComponent');
var Weather = require('./models/weather');


window.App = {};

App.controller = function () {
  ctrl = this;
  ctrl.season = Weather.getSeason();
  console.log(ctrl.season)
};

App.view = function (ctrl) {
  return [
    m('div', {class: ctrl.season}, [
      m('h1', 'The Weather House'),
      m('h4', '(← I change every season!)')
    ]),
    m.component(MainComponent, { title: 'Welcome to The Weather House!'}),
    m.component(CityInputComponent),
    m.component(WeatherDisplayComponent)
  ];
};

m.mount(document.getElementById('app'), App);
