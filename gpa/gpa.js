



function getGrades(inputSelector) {
    // get grades from the input box
    const gradesInput = document.getElementById('grades').value;
    // split them into an array (String.split(','))
    const gradesArray = gradesInput.split(',');
    gradesArray.toUpperCase();
    return gradesArray;
    //return gradesArray;
// clean up any extra spaces, and make the grades all uppercase. (Array.map())
// return grade
}