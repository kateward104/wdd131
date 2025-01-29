/*Should be able to click on Menu as a button and hide the display.*/

/*Selectquery (onclick) menu*/

/*document.getElementById("picture").src = "new-image.jpg";*/




const menuButton = document.getElementbyId("menu-button");
const menuItems = document.getElementbyId("menu-items");

menuButton.addEventListener("click", () => {
    menuItems.classList.add('hide');
});

    