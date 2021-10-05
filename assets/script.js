userInputEl = document.querySelector("#user-input")
searchBtnEl = document.querySelector("#search-button")
resultHeaderEl = document.querySelector("#result-header")

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

var displayInfo = function(event){
    event.preventDefault();
    resultHeaderEl.textContent = ""

    var searchItem = document.createElement("h3")
    searchItem.classList = "title-3"
    searchItem.textContent = userInputEl.value;

    resultHeaderEl.appendChild(searchItem);
    
}


searchBtnEl.addEventListener("click", displayInfo)