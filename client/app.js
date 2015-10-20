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
      m('img.friend-image.house-image', {src: "images/house.svg"}),
      m('h4', '(← I change every season!)')
    ]),
    m.component(MainComponent, { title: 'Welcome to The Weather House!'}),
    m.component(CityInputComponent),
    m.component(WeatherDisplayComponent),
    m('div.friends',[
      m('img.friend-image', {src: "images/critter1.svg"}),
      m('img.friend-image', {src: "images/girl.svg"}),
      m('img.friend-image', {src: "images/boy.svg"}),
      m('img.friend-image', {src: "images/critter3.svg"}),
      m('img.friend-image', {src: "images/critter2.svg"}),
    ])
  ];
};

m.mount(document.getElementById('app'), App);
