var m = require('mithril');
var Location = require('../models/location');


var MainComponent = module.exports;

MainComponent.controller = function (options) {
  var ctrl = this;
};

MainComponent.view = function (ctrl, options) {
  return m('.main-component', [
    m('h2', options.title),
    m('section.main-section', [
      m('p.main-text', 'hi.')])
  ]);
};
