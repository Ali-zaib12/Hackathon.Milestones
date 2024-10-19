// Listing items
document.getElementById(`resumeForm`)?.addEventListener(`submit`, function(event){

    event.preventDefault();

    // type assertion
    const nameElement = document.getElementById(`name`)as HTMLInputElement;
    const emailElement = document.getElementById(`email`)as HTMLInputElement;
    const phoneElement = document.getElementById(`phone`)as HTMLInputElement;
    const educationElement = document.getElementById(`education`)as HTMLInputElement;
    const experienceElement = document.getElementById(`experience`)as HTMLInputElement;
    const skillsElement = document.getElementById(`skills`)as HTMLInputElement;



    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

        const name = nameElement.value;
        const email= emailElement.value;
        const phone= phoneElement.value;
        const education= educationElement.value;
        const experience= experienceElement.value;
        const skills= skillsElement.value;

     // generate the resume content dynamically
    const resumeoutput = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name :</b>${name}</p>
    <p><b>Email :</b>${email}</p>
    <p><b>Phone :</b>${phone}</p>


    <h3>Education</h3>
    <p>${education}</p>

    <h3>Education</h3>
    <p>${experience}</p>

    <h3>Education</h3>
    <p>${skills}</p>`;


    const resumeOutputElement = document.getElementById(`resumeoutput`)

        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeoutput
        }else{`The resume output element is missing`}
    }else{console.error(`One or more elements are missing`)}


   
})