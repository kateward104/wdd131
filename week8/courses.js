// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' },
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);

        if (sectionIndex > 0) {
            this.sections[sectionIndex].enrolled++;
        }
        renderSections(this.sections);
    },

    dropStudent: function (sectionNum) { // Do the same thing for drop student
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum = sectionNum);

        if (sectionIndex > 0) {
            this.sections[sectionIndex].enrolled--;
        }
        renderSections(this.sections);
    }
};

function SetCourseInfo(course) {
    //Function information here.
}

function renderCourseDetails(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}


function sectionTemplate(section) {
    return <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
    </tr>
}


function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("")
    // tr and td?
}

renderCourseDetails(aCourse);

renderSections(aCourse.sections);