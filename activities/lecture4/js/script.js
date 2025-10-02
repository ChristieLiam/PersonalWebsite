// Variables for fictional person
const name = "Liam Christie";
let age = 21;
let enrolledStudent = false; // use boolean instead of string

// Function to check student status
function checkStudentStatus(isStudent) {
  if (isStudent) {
    return "is a student";
  } else {
    return "is not a student";
  }
}

function calculateFutureAge(currentAge) {
  return currentAge + 8;
}

let futureAge = calculateFutureAge(age);

let message = `${name} ${checkStudentStatus(enrolledStudent)} and will be ${futureAge} years old in 8 years.`;

// Write message to HTML
document.getElementById("info").textContent = message;