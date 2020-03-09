$("#searchBtn").on("click", function() {



  // get the value of the input from user

  cityName = $("#searchCity").val();
  
  $("#searchCity").val("");

  stateName = $("#searchState").val();
  
  $("#searchState").val("");





  const queryUrl = "https://api.openbrewerydb.org/breweries?by_state=" + stateName + "&by_city=" + cityName + "&per_page=50";
                    
  $.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function (response){
      // $("#currentCity").text(JSON.stringify(response));

    console.log(response);

    //name
    console.log(response[1]);
    // type
  //   console.log(response[2]);
    //street
  //   console.log(response[3]);
    //city
  //   console.log(response[4]);
    //state
  //   console.log(response[5]);
    //postal code
  //   console.log(response[6]);
    //phone
  //   console.log(response[10]);
    //website
  //   console.log(response[11]);

    for (var i = 0; i < response.length; i++){
      console.log(response[i])
      getBrew(response[i]);

    }
  //   console.log(array[i])
})
});


function getBrew(response){
console.log(response.name)
const card = $("<div>").addClass("card");
const cardBody = $("<div>").addClass("card-body");
const name = $("<h3>").addClass("card-title").text(response.name);
const type = $("<p>").addClass("card-text type").text("Type of Brewery: " + response.brewery_type);
const street = $("<p>").addClass("card-text street").text(response.street);
const city = $("<p>").addClass("card-text city").text(response.city);
const state = $("<p>").addClass("card-text state").text(response.state);
const postal = $("<p>").addClass("card-text postal").text(response.postal_code);
const phone = $("<p>").addClass("card-text phone").text("Phone: " + response.phone);
const website = $("<p>").addClass("card-text website").text("Website: ");
const websiteTag = $("<a>").attr("href", response.website_url).text(response.website_url);
website.append(websiteTag)



const address = $("<p>").addClass("card-text address").text("Address: " + response.street + ", " + response.city + ", " + response.state + " " + response.postal_code)





// add to page
cardBody.append(name, type, address, phone, website);
card.append(cardBody);
$("#currentCity").append(card)


}




// -----------------------------------------------------------------
$("#searchBtnW").on("click", function() {


  const apiKey = "&appid=afaa8eea1769b4359fd8e07b2efcefbd";

  // get the value of the input from user
  cityNameW = $("#searchCityW").val();
  
  $("#searchCityW").val("");

  const queryUrlW = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameW + apiKey;
                    
  $.ajax({
    url: queryUrlW,
    method: "GET"
  })
  .then(function (response){
      // $("#currentCityW").text(JSON.stringify(response));

    console.log(response);
    console.log(response.name);

    getWeather(response);
    // for (var i = 0; i < response.weather.length; i++){
    //   console.log(response[i])
    //   weatherArray(response[i]);

    // }

  })

});


function k2f(K) {
  return Math.floor((K - 273.15) *1.8 +32);
} 


function getWeather(response){
  console.log(response.name)
 
  let weatherPic = (response.weather[0].icon);
  const weatherPicSrc = $("<img>").attr("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");

  const cardW = $("<div>").addClass("card");
  const cardBodyW = $("<div>").addClass("card-body");
  const weatherCond = $("<h3>").addClass("card-title").text("Current Weather Conditions in: ");
  const nameW = $("<h2>").addClass("card-title").text(response.name);
  const weatherW = $("<p>").addClass("card-text type").text("Weather: " + response.weather[0].description);
  const TempF = $("<p>").addClass("card-text type").text("Temperature: " + k2f(response.main.temp));
  const humid = $("<p>").addClass("card-text type").text("Humidty: " + response.main.humidity);
  const windSpd = $("<p>").addClass("card-text type").text("Wind Speed: " + response.wind.speed + " MPH");
  

console.log(response.weather);

  cardBodyW.append(weatherCond, nameW, weatherPicSrc, weatherW, TempF, humid, windSpd);
  cardW.append(cardBodyW);
  $("#currentCityW").append(cardW)
}

// function weatherArray(response){
//   console.log(response)
//   const cardW = $("<div>").addClass("card");
//   const cardBodyW = $("<div>").addClass("card-body");
//   const weatherW = $("<p>").addClass("card-text type").text(response.weather);

//   cardBodyW.append(weatherW);
//   cardW.append(cardBodyW);
//   $("#currentCityW").append(cardW)
// }


