// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:

let beasts = [];


document.getElementById('addCreatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    newCreature();
});


function newCreature() {

    // 1. Grab the input a user enters into our form
    const beastName = document.getElementById('creatureName').value;
    const beastType = document.getElementById('creatureType').value;
    const beastHabitat = document.getElementById('creatureHabitat').value;
    const beastNote = document.getElementById('creatureNote').value;


    // Display creature images (using image URLs).

    const fileInput = document.getElementById('creatureImage');
    let beastImage;

    if (fileInput.files.length > 0) {
        beastImage = URL.createObjectURL(fileInput.files[0]);
    } else {
        beastImage = 'img/default.png';
    }


    // 2. Represent this input in a meaningful way, let's say an Object
    const newBeast = {
        beast_name: beastName,
        beast_type: beastType,
        beast_habitat: beastHabitat,
        beast_note: beastNote,
        beast_image: beastImage
    };

    // 3. Push the contents of that Object into an Array
    beasts.push(newBeast);


    // 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
    document.getElementById('addCreatureForm').reset();

    // 5. Display the new creature in our Array back to the user on our page
    displayCreatures();
}


function displayCreatures() {

    console.log(beasts);

    document.getElementById('creatureSanctuary').innerHTML = ``;

    beasts.forEach((beast) => {

        document.getElementById('creatureSanctuary').innerHTML += `
             <div class="beast-card">
                <img class="beast-image" src="${beast.beast_image}" alt="Image of ${beast.beast_name}">
                
                <h4 class="beast-name">${beast.beast_name}</h4>
                <p class="beast-label">Beast Name</p>
                
                <p class="beast-value">${beast.beast_type}</p>
                <p class="beast-label">Beast Type</p>
                
                <p class="beast-value">${beast.beast_habitat}</p>
                <p class="beast-label">Beast Habitat</p>
            
                <p class="beast-note-label">Beast Note</p>
                <p class="beast-note">${beast.beast_note}</p>

                <button class="beast-remove-button btn btn-danger" onclick="removeCreature('${beast.beast_name}')">
                    Remove
                </button>
            </div>
        `;
    })

}
// Add a "Remove Creature" feature.

function removeCreature(beastName) {

    beasts = beasts.filter(beast => beast.beast_name !== beastName);

    console.log(beasts)

    displayCreatures();

    alert("Removed Beast: "+beastName);

}


// Add a search functionality to find creatures by name or type.




//Test Function

function addTestBeasts() {
    beasts.push({
        beast_name: "Super Mushroom",
        beast_type: "Magic Mushroom",
        beast_habitat: "Mario's Galaxy",
        beast_note: "Makes you bigger...",
        beast_image: "img/test1.png"
    });
    beasts.push({
        beast_name: "Mini Mushroom",
        beast_type: "Magic Mushroom",
        beast_habitat: "Mario's Galaxy",
        beast_note: "Makes you mini!",
        beast_image: "img/test2.png"
    });
    beasts.push({
        beast_name: "1-UP Mushroom",
        beast_type: "Magic Mushroom",
        beast_habitat: "Mario's Galaxy",
        beast_note: "Gives you more life!",
        beast_image: "img/test3.png"
    });

    displayCreatures();
}