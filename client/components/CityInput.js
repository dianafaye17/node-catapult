var m = require('mithril');
var Location = require('../models/location');


var CityInput = module.exports;

CityInput.controller = function (options) {
  var ctrl = this;
  this.inputDirty = false;

  this.printCityGreeting = function(e) {
    ctrl.city = e.target['value'];
    ctrl.inputDirty = true;
    if (ctrl.inputDirty) {
      ctrl.cityGreeting = 'You live in '+ (ctrl.city || 'a magical land far, far away') + '!'
    }
  }

  this.getWeatherAttributes = function(weatherReport) {
    console.log('name:', weatherReport.name)
  }

  this.printWeather = function() {
    console.log('City sent:', ctrl.city);
    Location.sendCity(ctrl.city)
      .then(function (res) {
        ctrl.report = res;
        ctrl.weather = res["weather"][0]["main"];
        ctrl.temp = res["main"]["temp"];
      })
  }
};

CityInput.view = function (ctrl, options) {
  return m('.city-input-wrapper', [
    m('label', 'What City Do You Live In? ', [
      m('input[type=text].city-input', {
        placeholder: 'Example:  Austin',
        oninput: ctrl.printCityGreeting
      }),
    ]),
    m('button', {
      onclick: ctrl.printWeather
    }, 'GO!'),
    m('p', ctrl.cityGreeting),
    m('p', JSON.stringify(ctrl.weather)),
    m('p', JSON.stringify(ctrl.temp))
  ]);
};

