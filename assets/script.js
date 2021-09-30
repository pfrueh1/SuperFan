function setup() {
    noCanvas();
    userInput = select('#userinput');
    userInput.changed(goWiki);

    function goWiki() {
        let term = userInput.value();
        console.log(term);
    }
}
