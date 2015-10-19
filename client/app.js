var m = require('mithril');
var MainComponent = require('./components/MainComponent');
var CityInput = require('./components/CityInput');


window.App = {};

App.controller = function () {
};

App.view = function (ctrl) {
  return [
    m('h1', 'The Weather House'),
    m.component(MainComponent, { title: 'Welcome to The Weather House!' }),
    m.component(CityInput)
  ];
};

m.mount(document.getElementById('app'), App);
