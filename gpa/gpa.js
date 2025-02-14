



function getGrades(inputSelector) {
    const gradesInput = document.querySelector(inputSelector).value; // get grades from the input box
    const gradesArray = gradesInput.split(','); // split them into an array (String.split(','))
    const gradesMap = gradesArray.map((grade) => grade.trim().toUpperCase());
    return gradesMap; //return gradesArray;
    
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grade
}

function lookupGrade(grade) {
    [A, B, D ]

    let gradevalue = 0;
    if (grades = "A") {
        gradevalue = 4.0;
    }
    else if (grades = "B") {
        gradevalue = 3.0;
    }
    else if (grades = "C") {
        gradevalue = 2.0;
    }
    else if (grades = "D") {
        gradevalue = 1.0;
    }
    else {
        gradevalue = 0;
    }

    return gradevalue;
    // converts the letter grade to it's GPA point value and returns it
}

function calculateGpa(grades) {
    
    let pointarray = lookupGrade(grades);
    

    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
}

function outputGpa(gpa, selector) {
    console.log (gpa); // takes a gpa value and displays it in the HTML in the element identified by the selector
}

function clickHandler() {
    const grades = getElementById("#grades"); //get the grades entered into the input
    const separatedgrades = getGrades(grades); 
     // calculate the gpa from the grades entered
    const gpa = calculateGpa(separatedgrades);
    outputGpa(gpa, "#output") // display the gpa    
}

submitButton.addeventListener(click, clickHandler); // when the button in our html is clicked: