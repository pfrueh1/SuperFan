//Start Wiki-card Javascript
var wikipediaCardEl = document.querySelector("#wiki-card");

//Button click event

// var button = document.querySelector(".button");
var wiki = function(){
    wikipediaCardEl.innerHTML = "";
    //Create object for user input
    var inputValue = document.querySelector("#user-input");
    //Create a new object to interact with the server
    var xhr = new XMLHttpRequest();

    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=" + inputValue.value + "&top&hits";

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
}

//End Wiki-card Javascript
  
let searchBtn = document.querySelector('#search-button');
let ticketMasterCard = document.querySelector('#ticketmaster-card');

// search button element section
userInputEl = document.querySelector("#user-input")
resultHeaderEl = document.querySelector("#result-header")


// function for populating the concerts box
function getTicketMaster() {
    let userInput = document.querySelector("#user-input").value.trim();
    const api = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword=' + userInput +'&apikey=yBLp8jR0zVL83KhDCYm0hsP4ydR9aG2w';



    fetch(api).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                //clear previous search results
                ticketMasterCard.innerHTML = "";

                //function for creating event cards
                function makeCard(i) {
                        let concertInfoEl = document.createElement("div");
                        ticketMasterCard.appendChild(concertInfoEl);
                        let concertTitleEl = document.createElement("h3");
                        concertTitleEl.textContent = data._embedded.events[i].name;
                        concertInfoEl.appendChild(concertTitleEl);
                        let concertDateEl = document.createElement("p");
                        concertDateEl.textContent = data._embedded.events[i].dates.start.localDate;
                        concertInfoEl.appendChild(concertDateEl);
                        let venueEl = document.createElement("p");
                        venueEl.textContent = data._embedded.events[i]._embedded.venues[0].name;
                        concertInfoEl.appendChild(venueEl);
                        let cityEl = document.createElement("p");
                        cityEl.textContent = data._embedded.events[i]._embedded.venues[0].city.name;
                        concertInfoEl.appendChild(cityEl);
                        // let ticketEl = document.createElement()
                };
                 console.log('data', data);
                // check if there are more than 5 events
                if (!data.hasOwnProperty("_embedded")) {
                    // if no upcoming events, inform user
                    ticketMasterCard.textContent = "No upcomming shows for selected artist"
                }else if (data._embedded.events.length <= 5) {
                    //if less than 5 events, generate a card for each event
                    for (let i = 0; i < data._embedded.events.length; i++){
                        makeCard(i);
                    }
                }else {
                    //if more than 5 events, generate cards for the 1st 5
                    for (let i = 0; i < 5; i++){
                        makeCard(i);                        
                    }
                }
                console.log("input", userInput)
               
            })
        }
    });
};




    










//
//// Amazon Card Section
//var product1Card = document.querySelector("#product-1");
//var product2Card = document.querySelector("#product-2");
//var product3Card = document.querySelector("#product-3");
//var amazonCard = document.querySelector("#amazon-card")
//
//// Amazon Generator Function to create Amazon Product Cards
//var amazonGenerator = function() {
//
//    let userInput = document.querySelector("#user-input").value.trim();
//
//    var apiRainforestUrl = "https://api.rainforestapi.com/request?api_key=416C99C5B4A74955BEB47FF0374F50CA"
//    + "&type=search&amazon_domain=amazon.com&output=json&language=en_US"
//    + "&search_term=" + userInput;
//
//    fetch(apiRainforestUrl)
//      // Convert the response to JSON
//      .then(function(response) {
//        return response.json();
//      })
//        .then(function(data) {
//            //console log to test getting correct data
//            console.log(data)
//            console.log(data.search_results[0].title)
//            console.log(data.search_results[0].image)
//            
//            // clears out html from all "amazon" classes - divs with each card
//            $(".amazon").html("")
//
//            
//
//            // Header for Amazon Section
//            // var amazonHeader = document.createElement('h2')
//            // amazonHeader.innerHTML = "Here are Amazon items related to your Search Term. Click on a picture to purchase the item on Amazon.com!"
//            // amazonCard.appendChild(amazonHeader);
//
//
//
//            // Product 1 Card
//            var product1Title = document.createElement('div');
//            product1Title.innerHTML = data.search_results[0].title;
//            product1Title.setAttribute("class", "card-header");
//            product1Card.appendChild(product1Title);
//
//            var product1Image = document.createElement('img');
//            product1Image.setAttribute("id", "product1Image");
//            product1Image.setAttribute("class", "card-image");
//            product1Image.src = data.search_results[0].image;
//            product1Image.onclick = function() {
//                window.open(data.search_results[0].link, "_blank" );
//            };
//            product1Card.appendChild(product1Image);
//
//            if (data.hasOwnProperty("price.raw")) {
//                var product1Price = document.createElement('div');
//                product1Price.innerHTML = data.search_results[0].price.raw;
//                product1Price.setAttribute("class", "card-content");
//                product1Card.appendChild(product1Price);
//            }
//            
//
//
//
//            // Product 2 Card
//            var product2Title = document.createElement('p');
//            product2Title.setAttribute("class", "card-header");
//            product2Title.innerHTML = data.search_results[1].title;
//            product2Card.appendChild(product2Title);
//
//            var product2Image = document.createElement('img');
//            product2Image.setAttribute("id", "product2Image");
//            product2Image.setAttribute("class", "card-image");
//            product2Image.src = data.search_results[1].image;
//            product2Image.onclick = function() {
//                window.open(data.search_results[1].link, "_blank" );
//            };
//            product2Card.appendChild(product2Image);
//            
//            if (data.hasOwnProperty("price.raw")) {
//                var product2Price = document.createElement('div');
//                product2Price.innerHTML = data.search_results[1].price.raw;
//                product2Price.setAttribute("class", "card-content");
//                product2Card.appendChild(product2Price);
//            }
//
//
//
//            // Product 3 Card
//            var product3Title = document.createElement('p');
//            product3Title.setAttribute("class", "card-header");
//            product3Title.innerHTML = data.search_results[2].title;
//            product3Card.appendChild(product3Title);
//
//            var product3Image = document.createElement('img');
//            product3Image.setAttribute("id", "product3Image");
//            product3Image.setAttribute("class", "card-image");
//            product3Image.src = data.search_results[2].image;
//            product3Image.onclick = function() {
//                window.open(data.search_results[2].link, "_blank" );
//            };
//            product3Card.appendChild(product3Image);
//            
//            if (data.hasOwnProperty("price.raw")) {
//                var product3Price = document.createElement('div');
//                product3Price.innerHTML = data.search_results[2].price.raw;
//                product3Price.setAttribute("class", "card-content");
//                product3Card.appendChild(product3Price);
//            }
//
//        })
//
//};
//
// End of Amazon card java

//display header with user input

var displayHeader = function(event){
    resultHeaderEl.textContent = ""

    var searchItem = document.createElement("h3")
    searchItem.classList = "title-3"
    searchItem.textContent = userInputEl.value;

    resultHeaderEl.appendChild(searchItem);
    
}

//save favorites to local storage and to drop down
var favoritesArray = []                                                           
var favoritesEl = document.querySelector("#favorites")
var favoriteBtn = document.querySelector("#favorite-button") 

var saveSearch = function() {
    localStorage.setItem("favoritesArray", JSON.stringify(favoritesArray))
};

var favoriteAdd = function(favoriteAdd){

    var favoriteLine = document.createElement("div")
    var favoriteLineBtn = document.createElement("button");
    favoriteLineBtn.textContent = userInputEl.value;
    favoriteLineBtn.classList = "button is-medium is-fullwidth";
    favoriteLineBtn.setAttribute("favorite-item", userInputEl.value); 
    favoriteLineBtn.setAttribute("type", "submit");

    favoriteLine.appendChild(favoriteLineBtn)
    favoritesEl.prepend(favoriteLine);
    }

searchBtn.addEventListener('click', function(){
    displayHeader();
    getTicketMaster();
//    amazonGenerator();
    wiki();
})


// add items to favorites list
favoriteBtn.addEventListener('click', function(){
    saveSearch();
    favoriteAdd();
    userInputEl.value = "";
})

// search for item on favorites list
var favoriteSearchHandler = function(event) {
    var favoriteSearchItem = event.target.getAttribute("favorite-item")
    userInputEl.value = favoriteSearchItem
    displayHeader();
    getTicketMaster();
//  amazonGenerator(favoriteSearchItem);
    wiki();    
    userInputEl.value = "";
}


favoritesEl.addEventListener("click", favoriteSearchHandler);
