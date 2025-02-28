import {participantTemplate, successTemplate} from "./template.js"
//////////////////// Submit form button code

let participant_count = 1;

document.querySelector("#add").addEventListener("click", function() { //Adds extra participant
    participant_count++;
    const participant_container = document.querySelector("#add")
    participant_container.insertAdjacentHTML("beforebegin", participantTemplate(participant_count))
})

document.querySelector("form").addEventListener("submit", submitForm); //Add function to go with this // Add an event listener to the form. We are listening for a submit event.

function submitForm(event) { // On submit we need to keep the form from doing what it normally would...which is to reload the page.
    event.preventDefault();
    const total = totalFees();
    const adult_name = document.getElementById("adult_name").value;

    //// Use this to hide the class ////// element.style.display = "none";
    document.querySelector("form").style.display = "none";

    const info = {
        adult_name: adult_name,
        number_participants: participant_count,
        fee_total: total,
    };

    const summary = document.querySelector("#summary"); 
    summary.innerHTML = successTemplate(info);
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    return feeElements.reduce((total, feeElement) => {
        return total + (parseFloat(feeElement.value) || 0);
    }, 0);
}
