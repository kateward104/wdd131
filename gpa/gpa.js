



function getGrades(inputSelector) {
    const gradesInput = document.querySelector(inputSelector).value; // get grades from the input box
    const gradesArray = gradesInput.split(','); // split them into an array (String.split(','))
    const gradesMap = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(gradesMap);
    return gradesMap; //return gradesArray;
    
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grade
}

function lookupGrade(grade) { // converts the letter grade to it's GPA point value and returns it

    let points = 0;

    if (grade == "A") {
        points = 4.0;
    }
    else if (grade == "B") {
        points = 3.0;
    }
    else if (grade == "C") {
        points = 2.0;
    }
    else if (grade == "D") {
        points = 1.0;
    }
    else {
        points = 0;
    }

    return points;
}

function calculateGpa(grades) {
    // gets a list of grades passed in 
    const pointarray = grades.map((grade) => lookupGrade(grade)); // convert the letter grades to gpa points
    console.log(pointarray)
    const gpa = pointarray.reduce((total, num) => total + num) / pointarray.length;
    console.log(gpa)
    return gpa.toFixed(2); // calculates the GPA // return the GPA
}

function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector)
    outputElement.innerText = gpa; // takes a gpa value and displays it in the HTML in the element identified by the selector
}

function clickHandler() {
    //get the grades entered into the input
    const separatedgrades = getGrades("#grades"); 
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(separatedgrades);
    outputGpa(gpa, "#output") // display the gpa    
}

document.querySelector("#submitButton").addEventListener("click", clickHandler); // when the button in our html is clicked: