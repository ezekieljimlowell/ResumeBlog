
function academicButton() {
    document.getElementById("academic").classList.toggle("show");
    document.getElementById("skills").classList.remove("show");
    document.getElementById("previousCompanies").classList.remove("show");
}

function skillButton() {
    document.getElementById("academic").classList.remove("show");
    document.getElementById("skills").classList.toggle("show");
    document.getElementById("previousCompanies").classList.remove("show");
}

function experienceButton() {
    document.getElementById("academic").classList.remove("show");
    document.getElementById("skills").classList.remove("show");
    document.getElementById("previousCompanies").classList.toggle("show");
}

window.onclick = function (event) {
    const dropDownContent = document.getElementsByClassName("dropContent");
    for (let i = 0; i < dropDownContent.length; i++) {
        let dropDowns = dropDownContent[i];
        if (!event.target.matches(".dropButton")) {
            if (dropDowns.classList.contains("show")) {
                dropDowns.classList.remove("show");
            }
        }
    }
}




