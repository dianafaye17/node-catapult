var m = require('mithril');

var Weather = module.exports;

Weather.latitude = 5; // default

Weather.fetch = function(city) {
  m.request({ 
    method: 'POST', 
    url: '/location', 
    data: {city: city}
  })
    .then(function (res) {
      Weather.report = res;
      Weather.latitude = Weather.report.coord.lat;
      Weather.getSeason();
      return Weather.report;
    })
};

Weather.getSeason = function() {

    var date = new Date();
    var month = date.getMonth();

    if (month === 11 || month < 2) { // 11, 0, 1
      if (Weather.latitude > 0) {
        return 'winter'; 
      }
      else {
        return 'summer';
      }
    }
    else if (month > 1 && month < 5) {  // 2, 3, 4
      if (Weather.latitude > 0) {
       return 'spring';
      }
      else {
        return 'fall';
      }
    }
    else if (month > 4 && month < 8) { // 5, 6, 7
      if (Weather.latitude > 0) {
        return 'summer';
      }
      else {
        return 'winter';
      }
    }
    else { // 8, 9, 10
      if (Weather.latitude > 0) {
        return 'fall';  
      }
      else {
        return 'spring';
      }
    }
}

Weather.wetWeatherConditions = {
      200: 'thunderstorm with light rain',
      201: 'thunderstorm with rain',
      202: 'thunderstorm with heavy rain',
      210: 'light thunderstorm',
      211: 'thunderstorm',
      212: 'heavy thunderstorm',
      221: 'ragged thunderstorm',
      230: 'thunderstorm with light drizzle',
      231: 'thunderstorm with drizzle',
      232: 'thunderstorm with heavy drizzle',
      300: 'light intensity drizzle',
      301: 'drizzle',
      301: 'heavy intense drizzle',
      310: 'light intensity drizzle',
      311: 'drizzle rain',
      312: 'heavy intensity drizzle rain',
      313: 'shower rain and drizzle',
      314: 'heavy shower rain and drizzle',
      321: 'shower drizzle',
      500: 'light rain',
      501: 'moderate rain',
      502: 'heavy intensity rain',
      503: 'very heavy rain',
      504: 'extreme rain',
      511: 'freezing rain',
      520: 'light intensity rain shower',
      521: 'shower rain',
      522: 'heavy intensity shower rain',
      531: 'ragged shower rain',
      611: 'sleet',
      612: 'shower sleet',
      615: 'light rain and snow',
      616: 'rain and snow',
      620: 'light shower snow',
      621: 'shower snow',
      622: 'heavy shower snow',
      781: 'tornado',
      900: 'tornado',
      901: 'tropical storm',
      902: 'hurricane',
      960: 'storm',
      961: 'violent storm',
      962: 'hurricane'
    };


    Weather.cloudyWeatherConditions = {
      701: 'mist',
      721: 'haze',
      741: 'fog',
      801: 'few clouds',
      802: 'scattered clouds',
      803: 'broken clouds',
      804: 'overcast clouds',
    };
