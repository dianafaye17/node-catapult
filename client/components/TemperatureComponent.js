var m = require('mithril');
var Weather = require('../models/weather');


var TemperatureComponent = module.exports;

TemperatureComponent.controller = function (options) {
  var ctrl = this;
};

TemperatureComponent.view = function (ctrl, options) {
  if (Weather.report) {

    var tempInFarenheit = Math.round(Number(JSON.stringify(Weather.report["main"]["temp"])));
    var tempFeeling = 'Happy'; // default
    var tempGreeting = 'Have a great day!' // default

    if (tempInFarenheit < 50) {
      tempFeeling = 'Cold';
      tempGreeting = 'Bring a sweater today!'
    }
    else if (tempInFarenheit > 80) {
      tempFeeling = 'Hot';
      tempGreeting = 'Drink water so you can feel healthy!'
    }
    else {
      tempFeeling = 'Nice';
    }

    return m('.temperature-component', [
      m('p','Today, it feels '+ tempFeeling + ' outside.'),
      m('p', 'Temperature: ' + tempInFarenheit + '°F'),
      m('p', tempGreeting)
    ]);
  }
  else {
    return m('div', '');
  }

};