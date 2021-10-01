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
