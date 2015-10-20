var m = require('mithril');
var CityInputComponent = require('./CityInputComponent');

var MainComponent = module.exports;

MainComponent.controller = function (options) {
  var ctrl = this;
};

MainComponent.view = function (ctrl, options) {
  return m('.main-component', [
    m('h2', options.title),
    m('span.main', [
      m('p.main-text', 'Hi! We are having a wonderful day here at The Weather House. We hope that you have a great day, too.'
    )])
  ]);
};
