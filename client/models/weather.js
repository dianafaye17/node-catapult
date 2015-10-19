var m = require('mithril');

var Weather = module.exports;

Weather.fetch = function() {
  return m.request({ 
    method: 'POST', url: '/whoo', data: {greeting: 'hello'}
  });
};
