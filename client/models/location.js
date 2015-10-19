var m = require('mithril');

var Location = module.exports;

Location.sendCity = function(cityData) {
  return m.request({ 
    method: 'POST', url: '/location', data: {city: 'Austin'}
  });
};
