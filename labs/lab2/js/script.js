function search(event){

    event.preventDefault(); // ⛔ Stops the page from reloading

    const input = document.getElementById('searchInput').value;

    const regex = /^\s*\S.*$/;

    if (!regex.test(input)) {
        alert("Input cannot be blank!");
    } else {
        console.log("You Searched For: "+query);
    }
}


