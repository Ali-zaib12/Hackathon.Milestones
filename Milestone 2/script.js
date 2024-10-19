var _a;
// Listing items
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // generate the resume content dynamically
        var resumeoutput = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name :</b>".concat(name_1, "</p>\n    <p><b>Email :</b>").concat(email, "</p>\n    <p><b>Phone :</b>").concat(phone, "</p>\n\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById("resumeoutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeoutput;
        }
        else {
            "The resume output element is missing";
        }
    }
    else {
        console.error("One or more elements are missing");
    }
});
