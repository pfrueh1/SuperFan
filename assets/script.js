//Start Wiki-card Javascript

//Button click event
var button = document.querySelector(".button");
button.addEventListener("click", function(){
    //Create object for user input
    var inputValue = document.querySelector(".inputValue");
    //Create a new object to interact with the server
    var xhr = new XMLHttpRequest();

    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=" + inputValue.value + "&top&songs";

    //Dynamically create elements
    var wikipediaCardEl = document.querySelector("#wikipediaCard");

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
