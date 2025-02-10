//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>/${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
//    document.querySelector("#myList").innerHTML = steps.Html.join("")/// set the innerHTML

const grades = ['A', 'B', 'A'];

function convertGradeToNumber(grade) {
    let point = 0
    if (grade == 'A') {
        point = 4
    } else if (grade == 'B') {
        point = 3;
    } else if (grade == 'C') {
        point = 2;
    } else {
        point = 1;
    }
    return point;
}

const gpaPoints = grades.map(convertGradeToNumber);

console.log("gap points: " + gpaPoints);


const gpa = gpaPoints.reduce((total, item) => {
    return total + item;
    //This is the shorthand nottation for a function.
}, 0);
