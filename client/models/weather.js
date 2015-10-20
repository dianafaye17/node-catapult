var m = require('mithril');

var Weather = module.exports;

Weather.fetch = function(city) {
  console.log('fetch called');
  m.request({ 
    method: 'POST', 
    url: '/location', 
    data: {city: city}
  })
    .then(function (res) {
      Weather.report = res;
      return Weather.report;
    })
};
