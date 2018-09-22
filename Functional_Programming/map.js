var forecast = [
    {day: 'Monday', sun: true}, 
    {day: 'Tuesday', sun: false}, 
    {day: 'Wednesday', sun: false}, 
    {day: 'Thursday', sun: true}, 
    {day: 'Friday', sun: false}, 
    {day: 'Saturday', sun: true}, 
    {day: 'Sunday', sun: false}, 
    
];

var newDay = [];
for(let i = 0; i< forecast.length; i++) {
    newDay.push(forecast[i].day)
}
console.log(newDay)
var newDay = forecast.map(function(temp) {
    return temp.day
})
console.log(newDay)

//challenge

// transform number
var numbers = [2, 4, 6, 8, 10, 12];

var double = numbers.map(function(mult) {
    return mult * 2;
}).map(function(mult) {
    return mult + 1
})
console.log(double)

// change an array of greetings to all upper case words
// save the first word in the array to a variable

var name = ['niaw', 'junior', 'pasupol', 'bunsaen'];
var upperName = name.map(function(name) {
    return name.toUpperCase()
})
console.log(upperName.shift())

// using promise
var upperName = name.map(async function(name) {
    return name.toUpperCase()
})

Promise.all(upperName).then(function(data) {
    console.log(data.shift())
})