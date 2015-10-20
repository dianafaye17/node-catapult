var m = require('mithril');
var MainComponent = require('./components/MainComponent');
var CityInputComponent = require('./components/CityInputComponent');
var WeatherDisplayComponent = require('./components/WeatherDisplayComponent');


window.App = {};

App.controller = function () {
};

App.view = function (ctrl) {
  return [
    m('h1', 'The Weather House'),
    m.component(MainComponent, { title: 'Welcome to The Weather House!' }),
    m.component(CityInputComponent),
    m.component(WeatherDisplayComponent)
  ];
};

m.mount(document.getElementById('app'), App);
