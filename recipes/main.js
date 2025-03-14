import recipes from "./recipes.mjs";


function getRandomIndex(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

function getRandomListEntry(list) {
    // Find length of the list
    let list_length = list.length;
    // Call the get random number
    let index = getRandomIndex(list_length);
    // return item in the list with the index of the random number
    return list[index];
}


// alert(getRandomIndex(recipes.length));

function recipeTemplate(recipe) {
    return `<figure class="recipe">
	<img src=${recipe.image} alt=${recipe.name}/>
	<figcaption>
		<ul class="recipe__tags">
            ${tagsTemplate(recipe.tags)}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
            ${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">
			${recipe.description}
		</p>
</figcaption>
</figure>`;
}



function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML
    let html = "";
    tags.forEach(tag => {
        html += `<li>${tag}</li>`
    });
    return html;
}


function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i < 6; i++) {
        if (i <= rating) {   // check to see if the current index of the loop is less than our rating, if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star-empty">⭐</span>`
        }
        else {   // else output an empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }

    // after the loop, add the closing tag to our string
    html += `</span>`
    // return the html string
    return html
}


function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    let output = document.querySelector("holder");
    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let html = recipeList.map(i => recipeTemplate(i)).join("");
    // Set the HTML strings as the innerHTML of our output element.
    output.innerHTML = html;
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}
init();


function filterRecipes(searchInput) {
    const filtered = recipes.filter(recipe => { // In that function use Array.filter to filter our recipes.You should check to see if the search term(query) shows up in the name, or the descriptions, or the tag list, or the ingredients list.
        const name = recipe.name.toLowerCase();
        const description = recipe.name.toLowerCase();
        const tags = recipe.tags.map(tag => tag.toLowerCase());
        const ingredients = recipe.recipeIngredient.map(ingredient => ingredient.toLowerCase());

        return name.includes(searchInput) || description.includes(searchInput) || tags.includes(searchInput) || ingredients.includes(searchInput);
    })
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name)); // Sort the list of recipes by name alphabetically.
        return sorted  // Render the filtered list of recipes to the page.    
}


function searchHandler(e) {
    e.preventDefault();
    let searchInput = document.querySelector(".search").value;  // Get whatever was typed into the search input and convert it all to lowercase. (Javascript comparing is case sensitive)
    searchInput = searchInput.toLowerCase();
    let specificRecipes = filterRecipes(searchInput); // Pass the query string into a filterRecipes(query) function.
    renderRecipes(specificRecipes);
}



document.querySelector("#searchbutton").addEventListener("click", searchHandler);