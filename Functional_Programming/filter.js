var weather = [1,2,4,6,7,3,23,135,36];
var goOutside = [];
for (var i = 0; i< weather.length; i++) {
    goOutside.push(weather[i]);
}
console.log(goOutside)

var niceWeather = function(temp) {
    return temp > 70;
}

var goOutside = weather.filter(niceWeather);
console.log(goOutside);

var goOutside = weather.filter(function(temp) {
    return temp > 70
})
console.log(goOutside)

var forecast = [
    {day: 'Monday', sun: true}, 
    {day: 'Tuesday', sun: false}, 
    {day: 'Wednesday', sun: false}, 
    {day: 'Thursday', sun: true}, 
    {day: 'Friday', sun: false}, 
    {day: 'Saturday', sun: true}, 
    {day: 'Sunday', sun: false}, 
    
];
var sunnyDays = [];
for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun) {
        sunnyDays.push(forecast[i]);
    }
}
console.log(sunnyDays)

var sunnyDays = forecast.filter(function(temp) {
    return temp.sun === true
})
console.log(sunnyDays)