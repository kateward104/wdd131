
const themeSelector = document.querySelector("select") // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
    function changeTheme() {
        const selectedTheme = themeSelector.value;
        
        if (selectedTheme == "dark") {
            document.body.classList.add("dark");
            document.querySelector("img").src = "byui-logo_white.png";
        }
        else {
            document.body.classList.remove("dark");
            document.querySelector("img").src = "byui-logo_blue.webp";
        }
    }
    themeSelector.addEventListener('change', changeTheme);

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
