/*Should be able to click on Menu as a button and hide the display.*/

/*Selectquery (onclick) menu*/

/*document.getElementById("picture").src = "new-image.jpg";*/




const menuButton = document.getElementById("menu-button");
const menuItems = document.getElementById("menu-items");



menuButton.addEventListener("click", () => {
    menuItems.classList.toggle('hide');
});


function handleResize() {
    const menuItems = document.getElementById("menu-items"); //This may be the issue. I don't know if I have a .menu
    if (window.innerWidth > 1000) {
        menuItems.classList.remove("hide");
    } else {
        menuItems.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);


function viewerTemplate(pic, alt) {
    return `<div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${pic}" alt="${alt}">
            </div>`;
}


function viewHandler(event) {
    if (event.target.tagName.toLowerCase() === "img") { // Make sure it's an image
        const src = event.target.getAttribute("src");
        const srcArray = src.split("-"); // Assuming the image names have a hyphen
        const newSrc = srcArray[0] + "-full.jpeg"; // Create the full size image URL

        // Insert the viewer template at the top of the body
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, event.target.alt));

        // Add an event listener to the close button to close the viewer
        const closeBtn = document.querySelector(".close-viewer");
        closeBtn.addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) viewer.remove();
}


const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

