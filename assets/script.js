// get value of searchText to use for multiple APIs
// get value of userinput and create var of searchText

// $("#searchBtn").addEventListener(click, () =>  {
//     var searchText = $("#searchText").val().trim();

//     // set the key/value pair in localStorage
//     localStorage.setItem('searchText', searchText);
    
//     // get value of searchText from localStorage and use for multiple APIs
//     var textSearched = localStorage.getItem('searchText')
    
//     amazonGenerator(textSearched);

// });














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
    var apiRainforestUrl = "https://api.rainforestapi.com/request?api_key=ED9EACA8D98946728DDE745B738AC6DA"
    + "&type=search&amazon_domain=amazon.com&output=json&language=en_US"
    + "&search_term=" + "pokemon";

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
            
            // clears out html from all "amazon" classes - divs with each card
            // $(".amazon").html("")

            

            // Header for Amazon Section
            var amazonHeader = document.createElement('h2')
            amazonHeader.innerHTML = "Here are Amazon items related to your Search Term. Click on a picture to purchase the item on Amazon.com!"
            product1Card.appendChild(amazonHeader);



            // Product 1 Card
            var product1Title = document.createElement('p');
            product1Title.innerHTML = data.search_results[0].title;
            product1Title.setAttribute("class", "card-header");
            product1Card.appendChild(product1Title);

            var product1Image = document.createElement('img');
            product1Image.setAttribute("id", "product1Image");
            product1Image.setAttribute("class", "card-image");
            product1Image.src = data.search_results[0].image;
            product1Image.onclick = function() {
                window.open(data.search_results[0].link, "_blank" );
            };
            product1Card.appendChild(product1Image);

            var product1Price = document.createElement('p');
            product1Price.innerHTML = data.search_results[0].price.raw;
            product1Price.setAttribute("class", "card-content");
            product1Card.appendChild(product1Price);



            // Product 2 Card
            var product2Title = document.createElement('p');
            product2Title.setAttribute("class", "card-header");
            product2Title.innerHTML = data.search_results[1].title;
            product2Card.appendChild(product2Title);

            var product2Image = document.createElement('img');
            product2Image.setAttribute("id", "product2Image");
            product2Image.setAttribute("class", "card-image");
            product2Image.src = data.search_results[1].image;
            product2Image.onclick = function() {
                window.open(data.search_results[1].link, "_blank" );
            };
            product2Card.appendChild(product2Image);
            
            var product2Price = document.createElement('p');
            product2Price.innerHTML = data.search_results[1].price.raw;
            product2Price.setAttribute("class", "card-content");
            product2Card.appendChild(product2Price);



            // Product 3 Card
            var product3Title = document.createElement('p');
            product3Title.setAttribute("class", "card-header");
            product3Title.innerHTML = data.search_results[2].title;
            product3Card.appendChild(product3Title);

            var product3Image = document.createElement('img');
            product3Image.setAttribute("id", "product3Image");
            product3Image.setAttribute("class", "card-image");
            product3Image.src = data.search_results[2].image;
            product3Image.onclick = function() {
                window.open(data.search_results[2].link, "_blank" );
            };
            product3Card.appendChild(product3Image);

            var product3Price = document.createElement('p');
            product3Price.innerHTML = data.search_results[2].price.raw;
            product3Price.setAttribute("class", "card-content");
            product3Card.appendChild(product3Price);
        })

};

amazonGenerator();