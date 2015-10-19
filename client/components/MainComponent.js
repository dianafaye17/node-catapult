var m = require('mithril');
var Weather = require('../models/weather');


var MainComponent = module.exports;

MainComponent.controller = function (options) {
  var ctrl = this;
  Weather.fetch()
};

MainComponent.view = function (ctrl, options) {
  return m('.main-component', [
    m('h2', options.title),
    m('section.main-section', [
      m('p.main-text', 'hi.')])
  ]);
};
