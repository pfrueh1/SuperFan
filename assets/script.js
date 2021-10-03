let searchBtn = document.querySelector('#saveButton');
let ticketMasterCard = document.querySelector('#ticketmasterCard');
// function setup() {
//     noCanvas();
//     userInput = select('#userinput');
//     userInput.changed(goWiki);

//     function goWiki() {
//         let term = userInput.value();
//         console.log(term);
//     }
// }

// function for populating the concerts box
function getTicketMaster() {
    let userInput = document.querySelector("#userInput").value.trim();
    const api = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword=' + userInput +'&apikey=yBLp8jR0zVL83KhDCYm0hsP4ydR9aG2w';



    fetch(api).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                //clear previous search
                ticketMasterCard.innerHTML = "";

                    //function for creating event cards
                function makeCard(i) {
                        let concertInfoEl = document.createElement("div");
                        ticketMasterCard.appendChild(concertInfoEl);
                        let concertTitleEl = document.createElement("h3");
                        concertTitleEl.textContent = data._embedded.events[i].name;
                        concertInfoEl.appendChild(concertTitleEl);
                };
                // check if there are more than 5 events
                if (data._embedded.events.length === 0) {
                    ticketMasterCard.textContent = "No upcomming shows for selected artist"
                }else if (data._embedded.events.length <= 5) {
                    //if less than 5 events, generate a card for each event
                    for (let i = 0; i < data._embedded.events.length; i++){
                        makeCard(i);
                    }
                }else {
                    for (let i = 0; i < 5; i++){
                        makeCard(i);                        
                    }
                }
                
                // ticketMasterCard.textContent = data._embedded.events[0]._embedded.attractions[0].name
                console.log("input", userInput)
                console.log('data', data);

            })
        }
    });
}
searchBtn.addEventListener('click', function(){
    getTicketMaster();
})
