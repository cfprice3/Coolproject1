$("#searchBtn").on("click", function() {



  // get the value of the input from user
  cityName = $("#searchCity").val();
  
  $("#searchCity").val("");

  const queryUrl = "https://api.openbrewerydb.org/breweries?by_city=" + cityName;
                    
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
const name = $("<h2>").addClass("card-title").text(response.name);
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
