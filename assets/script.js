function setup() {
    noCanvas();
    userInput = select('#userinput');
    userInput.changed(goWiki);

    function goWiki() {
        let term = userInput.value();
        console.log(term);
    }
}
const api = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword=lizzo&apikey=yBLp8jR0zVL83KhDCYm0hsP4ydR9aG2w';

fetch(api).then(function(response) {
    if (response.ok) {
        response.json().then(function(data) {

            console.log(data);

        })
    }
});





// Amazon Card Section
var product1Card = document.querySelector("#product-1");
var product2Card = document.querySelector("#product-2");
var product3Card = document.querySelector("#product-3");

// Amazon Generator Function to create Amazon Product Cards
var amazonGenerator = function() {
    var apiRainforestUrl = "https://api.rainforestapi.com/request?api_key=ED9EACA8D98946728DDE745B738AC6DA&type=search&amazon_domain=amazon.com&output=json&language=en_US&search_term=the+beatles";

    fetch(apiRainforestUrl)
      // Convert the response to JSON
      .then(function(response) {
        return response.json();
      })
        .then(function(data) {
            //console log to test getting correct data
            console.log(data)
            console.log(data.search_results[0].title)
            console.log(data.search_results[0].image)
            
            // Product 1 Card
            var product1Title = document.createElement('p')
            product1Title.innerHTML = data.search_results[0].title;
            product1Card.appendChild(product1Title);

            var product1Image = document.createElement('img')
            product1Image.src = data.search_results[0].image
            product1Card.appendChild(product1Image);

            // Product 2 Card
            var product2Title = document.createElement('p')
            product2Title.innerHTML = data.search_results[1].title;
            product2Card.appendChild(product2Title);

            var product2Image = document.createElement('img')
            product2Image.src = data.search_results[1].image
            product2Card.appendChild(product2Image);

            // Product 3 Card
            var product3Title = document.createElement('p')
            product3Title.innerHTML = data.search_results[2].title;
            product3Card.appendChild(product3Title);

            var product3Image = document.createElement('img')
            product3Image.src = data.search_results[2].image
            product3Card.appendChild(product3Image);
        })

}
amazonGenerator()