//Start Wiki-card Javascript
var wikipediaCardEl = document.querySelector("#wikipedia-card");

//Button click event
var button = document.querySelector(".button");
button.addEventListener("click", function(){
    wikipediaCardEl.innerHTML = ""
    //Create object for user input
    var inputValue = document.querySelector("#user-input");
    //Create a new object to interact with the server
    var xhr = new XMLHttpRequest();

    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=" + inputValue.value + "&top&songs";

    //Dynamically create elements
    


    // Provide 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);

    // Once request has loaded...
    xhr.onload = function() {
        // Parse the request into JSON
        var data = JSON.parse(this.response);

        // Log the data object
        console.log(data);

        // Log the page objects
        console.log(data.query.pages)

        // Loop through the data object
        // Pulling out the titles of each page
        for (var i in data.query.pages) {
            console.log(data.query.pages[i].title);
            var songTitles = data.query.pages[i].title;
            //create container for page
             var pageEl = document.createElement("div");
             pageEl.classList = "list-item flex-row justify-space-between align-center"
             //create a span element to hold title
             var textEl = document.createElement("span");
             textEl.textContent = songTitles;
             //append to container
            pageEl.appendChild(textEl);
             //append container to DOM
             wikipediaCardEl.appendChild(pageEl);
        }
    }
    // Send request to the server asynchronously
    xhr.send();
})

//End Wiki-card Javascript


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
var amazonCard = document.querySelector("#amazon-card")

// Amazon Generator Function to create Amazon Product Cards
var amazonGenerator = function() {
    var userInput = localStorage.getItem("userInput")

    var apiRainforestUrl = "https://api.rainforestapi.com/request?api_key=ED9EACA8D98946728DDE745B738AC6DA"
    + "&type=search&amazon_domain=amazon.com&output=json&language=en_US"
    + "&search_term=" + userInput;

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
            $(".amazon").html("")

            

            // Header for Amazon Section
            // var amazonHeader = document.createElement('h2')
            // amazonHeader.innerHTML = "Here are Amazon items related to your Search Term. Click on a picture to purchase the item on Amazon.com!"
            // amazonCard.appendChild(amazonHeader);



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
var displayInfo = function(event){
    event.preventDefault();
    resultHeaderEl.textContent = ""

    var searchItem = document.createElement("h3")
    searchItem.classList = "title-3"
    searchItem.textContent = userInputEl.value;

    resultHeaderEl.appendChild(searchItem);
    
}


searchBtnEl.addEventListener("click", displayInfo)
