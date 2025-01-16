
const themeSelector = document.querySelector("select") // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
    function changeTheme() {
        if themeSelector == "dark":
            document.body.classList.add("dark");

    }

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);
