/* Custom JS goes here */

// IIFE - Immedately Invoked Function Expression
// annoymos self executing function
(function(){

    function Start() {
        var title = document.title;

        console.log("App Started!");
        console.log("Title: " + title);
    }

    window.onload = Start;

})();