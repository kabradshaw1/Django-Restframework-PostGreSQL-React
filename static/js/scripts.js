// var getWeather = function(city) {
//   // format the github api url

//   var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=11988be7e9227615c1560b01dd5dbd6a";

//   // make a get request to url
//   fetch(apiUrl)
//     .then(function(response) {
//       // request was successful
//       if (response.ok) {
//         response.json().then(function(data) {
          
//           displayWeather(data, city);
//         });
//       } else {
//         alert('Error: City Not Found');
//       }
//     })
//     .catch(function(error) {
//       alert("Unable to get weather.");
//   });
// };
