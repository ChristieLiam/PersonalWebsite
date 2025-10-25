// This acts as a simple in-memory "database" for the example. Wont save accross pages as we aren't going to maintain a session
const users = [
    {
        user: 'MasterLiam',
        pass: 'ValidPass123!',
        email: 'master@example.com'
    },
    {
        user: 'AdminUser',
        pass: 'AdminPass456@',
        email: 'admin@example.com'
    }
];

// Use a Set for fast username lookups
const usernames = new Set(users.map(u => u.user));

/**
 * Handles the registration form submission.
 */
const register = (event) => {
    event.preventDefault(); // Stop page reload
    console.log("Register function triggered!");

    const { username, email, pass, verifyPass } = event.target.elements;

    const userError = document.querySelector('#username-error');
    const emailError = document.querySelector('#email-error');
    const passError = document.querySelector('#pass-error');
    const verifyError = document.querySelector('#verifyPass-error');
    const statusMessage = document.querySelector('#form-status-message');

    let isValid = true;

    // Reset all errors and styles
    userError.textContent = '';
    username.style.borderColor = '#ced4da';
    emailError.textContent = '';
    email.style.borderColor = '#ced4da';
    passError.textContent = '';
    pass.style.borderColor = '#ced4da';
    verifyError.textContent = '';
    verifyPass.style.borderColor = '#ced4da';
    statusMessage.textContent = '';
    statusMessage.className = 'mt-3';


    // Validate Username
    if (!isValidUsername(username.value)) {
        isValid = false;
        userError.textContent = "Username must start with a letter and can only contain letters and numbers.";
        username.style.borderColor = 'red';
    }
    else if (usernames.has(username.value)) {
        isValid = false;
        userError.textContent = "Username is already taken.";
        username.style.borderColor = 'red';
    }
    else {
        username.style.borderColor = 'green';
    }

    // Validate Email
    if (!isValidEmail(email.value)) {
        isValid = false;
        emailError.textContent = "Enter a valid email address (e.g., name@example.com).";
        email.style.borderColor = 'red';
    } else {
        email.style.borderColor = 'green';
    }

    // Validate Password Strength
    if (!isValidPass(pass.value)) {
        isValid = false;
        passError.textContent = "Password: 12+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char.";
        pass.style.borderColor = 'red';
    } else {
        pass.style.borderColor = 'green';
    }

    // Validate Password Match
    if (isValidPass(pass.value) && !passMatch(pass.value, verifyPass.value)) {
        isValid = false;
        verifyError.textContent = "Passwords must match.";
        verifyPass.style.borderColor = 'red';
    } else if (isValidPass(pass.value)) {
        verifyPass.style.borderColor = 'green';
    }


    // Process Form
    if (isValid){
        const newUser = {
            user: username.value.trim(),
            pass: pass.value.trim(),
            email: email.value.trim(),
        };

        users.push(newUser);
        usernames.add(username.value.trim());

        console.log("Registration Successful!");
        console.log("Updated Users Object:", users);

        statusMessage.textContent = 'Registration successful! You can now log in.';
        statusMessage.className = 'mt-3 alert alert-success';

        event.target.reset();
        username.style.borderColor = '#ced4da';
        email.style.borderColor = '#ced4da';
        pass.style.borderColor = '#ced4da';
        verifyPass.style.borderColor = '#ced4da';

    } else {
        console.log("Registration  failed.");
        statusMessage.textContent = 'Please fix the errors above.';
        statusMessage.className = 'mt-3 alert alert-danger';
    }
};

/**
 * Handles the login form submission.
 */
const login = (event) => {
    event.preventDefault(); // Stop page reload
    console.log("Login function triggered!");

    const { username, pass } = event.target.elements;
    const statusMessage = document.querySelector('#form-status-message');

    let isValid = false;

    for (const user of users) {
        if (user.user === username.value.trim()) {
            if (user.pass === pass.value.trim()) {
                isValid = true;
            }
            break;
        }
    }

    if (isValid) {
        console.log("Login successful!");
        statusMessage.textContent = 'Login successful! Welcome.';
        statusMessage.className = 'mt-3 alert alert-success';
    } else {
        console.log("Login failed.");
        statusMessage.textContent = 'Invalid username or password.';
        statusMessage.className = 'mt-3 alert alert-danger';
    }
};

/**
 * Attaches event listeners once the page content is loaded.
 */
document.addEventListener('DOMContentLoaded', () => {

    const regForm = document.querySelector('#registration-form');
    const loginForm = document.querySelector('#login-form');

    if (regForm) {
        regForm.addEventListener('submit', register);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }
});


/**
 * This function makes sure that the users email matches email criteria
 * @param email users email from form
 * @returns {boolean}
 */
function isValidEmail (email){
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
    return emailRegex.test(email);
}

/**
 * This function makes sure that the users username of choice matches username criteria  *
 * @param username users username from form
 * @returns {boolean}
 */
function isValidUsername (username){
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    return usernameRegex.test(username);
}


/**
 * This function makes sure that the users password of choice matches password criteria
 *
 * @param password users password from form
 * @returns {boolean}
 */
function isValidPass (password){

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12,}$/;
    return passwordRegex.test(password);
}

/**
 *
 * This function checks that both passwords from the register form match
 *
 * @param pass password from form
 * @param otherPass re-entered password from form
 * @returns {boolean}
 */
function passMatch (pass,otherPass){

    if (pass === otherPass){
        return true;

    } else {
        return false;
    }
}


