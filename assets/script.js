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
                    ticketMasterCard.textContent = "No upcoming shows for selected artist"
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




    











// Amazon Card Section
var product1Card = document.querySelector("#product-1");
var product2Card = document.querySelector("#product-2");
var product3Card = document.querySelector("#product-3");
var amazonCard = document.querySelector("#amazon-card")

// Amazon Generator Function to create Amazon Product Cards
var amazonGenerator = function() {

    let userInput = document.querySelector("#user-input").value.trim();

    var apiRainforestUrl = "https://api.rainforestapi.com/request?api_key=416C99C5B4A74955BEB47FF0374F50CA"
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

            if (data.hasOwnProperty("search_results[0].price.raw")) {
                var product1Price = document.createElement('p');
                product1Price.innerHTML = data.search_results[0].price.raw;
                product1Price.setAttribute("class", "card-content");
                product1Card.appendChild(product1Price);
            } 
            // else {
            //     var product1NoPrice = document.createElement('p');
            //     product1NoPrice.textContent = "Price Not Available"
            //     product1NoPrice.setAttribute("class", "card-content");
            //     product1Card.appendChild(product1NoPrice);
            // }

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
            
            if (data.hasOwnProperty("search_results[1].price.raw")) {
                var product2Price = document.createElement('p');
                product2Price.innerHTML = data.search_results[1].price.raw;
                product2Price.setAttribute("class", "card-content");
                product2Card.appendChild(product2Price);
            } 
            // else {
            //     var product2NoPrice = document.createElement('p');
            //     product2NoPrice.textContent = "Price Not Available"
            //     product2NoPrice.setAttribute("class", "card-content");
            //     product2Card.appendChild(product2NoPrice);
            // }

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
            
            if (data.hasOwnProperty("search_results[2].price.raw")) {
                var product3Price = document.createElement('p');
                product3Price.innerHTML = data.search_results[2].price.raw;
                product3Price.setAttribute("class", "card-content");
                product3Card.appendChild(product3Price);
            } 
            // else {
            //     var product3NoPrice = document.createElement('p');
            //     product3NoPrice.textContent = "Price Not Available"
            //     product3NoPrice.setAttribute("class", "card-content");
            //     product3Card.appendChild(product3NoPrice);
            // }
        })
};

var displayInfo = function(event){
    // event.preventDefault();
    resultHeaderEl.textContent = ""

    var searchItem = document.createElement("h3")
    searchItem.classList = "title-3"
    searchItem.textContent = userInputEl.value;
    resultHeaderEl.appendChild(searchItem);
    
}

// commented out amazonGenerator until Thursday before Presentation 
searchBtn.addEventListener('click', function(){
    displayInfo();
    getTicketMaster();
    // amazonGenerator();
})
