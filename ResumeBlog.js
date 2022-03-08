let isAcademicButton = false;
let isSkillButton = false;
let isExperienceButton = false;
const academicButton = () => {
    document.getElementById("academic").classList.toggle("show");
}

const skillButton = () => {
    document.getElementById("skills").classList.toggle("show");
}

const experienceButton = () => {
    document.getElementById("previousCompanies").classList.toggle("show");
}

window.onclick = function (event) {
    const dropDownContent = document.getElementsByClassName("dropContent");
    if (!event.target.matches(".dropButton")) {
        for (let i = 0; i < dropDownContent.length; i++) {
            let dropDowns = dropDownContent[i];
            if (dropDowns.classList.contains("show")) {
                dropDowns.classList.remove("show");
            }
            else if (dropDowns.previousElementSibling == event.target) {
                console.log("some")
                dropDowns.classList.remove("show");
            }
        }
    }
}
