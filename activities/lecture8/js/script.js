// Get the current time and hour
// HINT: you will have to first get the full date and then get the time and hour of the day
// You may explore the use of JS built-in functions


const now = new Date();
const time = now.toLocaleString();
const hour = now.getHours();


// Create a variable to store your greeting message 

let greeting = "";


if (hour < 12) { // for now, we want to say 'Good Morning' if it is earlier than 12PM

    greeting = "Good Morning";

} else if (hour < 15) {// otherwise we want to check if it is earlier than 3PM and let the visitor know

    greeting = "Hey! I think we are in class!"

} else {
    // For any other time (i.e., later than 3PM, we just want to say 'Welcome'

    greeting = "Welcome"

}

// Then, we use the DOM, and calling the 'getElementById( )' method and its innerHTML property to add some HTML for us onto our webpage
// we basically want to show the return result in <h2 id="greeting"></h2>

document.getElementById("greeting").innerHTML = greeting;

document.addEventListener("DOMContentLoaded", function() {})





// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values

let var1 = 0;
let var2 = 0;

// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )

    // Store the values from the form into the variables we declared above
 
function getNumbers(){
    var1 = document.getElementById("number1").value;
    var2 = document.getElementById("number2").value;


    if (isNaN(var1) || isNaN(var2)) {
        alert("Please enter valid numbers in both fields.");
        return null; // Return null to signal an error
    }

    var1 = parseInt(var1, 10);
    var2 = parseInt(var2, 10);

    alert("Number 1 is: "+var1+"    Number 2 is: "+var2);
}



	// Call the getNumbers() function to import the values the user enteres into the form into 
	// this function
	
	// We perform our addition on the two values
	

	// Display the result of the calculation


function addition(event){
    event.preventDefault();

    getNumbers();

    let theAddition = var1 + var2;

    document.getElementById("result-container").innerHTML = `<p>Result of Addition: ${theAddition.toLocaleString()}</p>`;

}

function subtract(event){
    event.preventDefault();

    getNumbers();

    let theSubtraction = var1 - var2;

    document.getElementById("result-container").innerHTML = `<p>Result of Subtraction: ${theSubtraction.toLocaleString()}</p>`;


}

function multiply(event){
    event.preventDefault();

    getNumbers();

    let theMultiplication = var1 * var2;

    document.getElementById("result-container").innerHTML = `<p>Result of Multiplaction: ${theMultiplication.toLocaleString()}</p>`;


}

function divide(event){
    event.preventDefault();

    getNumbers();

    let theDivision = var1 / var2;

    document.getElementById("result-container").innerHTML = `<p>Result of Division: ${theDivision.toLocaleString()}</p>`;


}