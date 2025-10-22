document.addEventListener("DOMContentLoaded", () => {

    // Get all the input elements
    const inputsToTrack = document.querySelectorAll("#firstName, #lastName, #email");


    // This function will run when the user clicks IN
    function handleFocus(event) {
        event.target.style.backgroundColor = "#efa2ff"; // Light yellow
    }

    // This function will run when the user clicks OUT
    function handleBlur(event) {
        event.target.style.backgroundColor = "";
    }

    // Loop through the inputs and attach the listeners
    inputsToTrack.forEach(input => {
        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);
    });

});