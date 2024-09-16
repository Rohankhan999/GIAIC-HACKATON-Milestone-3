// Get refrence to the form and display area//
var from = document.getElementById('resume-form');
var resumeDisplayelement = document.getElementById('resume-display');
// handle form submission//
from.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values//
    var name = document.getElementById('Name').value;
    var fathername = document.getElementById('fathername').value;
    var phno = document.getElementById('phno').value;
    var email = document.getElementById('email').value;
    var Address = document.getElementById('Address').value;
    var Education = document.getElementById('Education').value;
    var Skills = document.getElementById('Skills').value;
    var WorkExperience = document.getElementById(' WorkExperience ').value;
    //Generate the resume content dynamicaly//
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Informaion</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>fathername:</b>").concat(fathername, "</p>\n<p><b>Phone number:</b>").concat(phno, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Address:</b>").concat(Address, "</p>\n\n<h3>Education</h3>\n<p>").concat(Education, "</p>\n\n<h3>Skills</h3>\n<p>").concat(Skills, "</p>\n\n<h3>Work Experience</h3>\n<p>").concat(WorkExperience, "</p>\n");
    if (resumeDisplayelement) {
        resumeDisplayelement.innerHTML=resumeHTML;
    }
    else {
        console.error('The Resume Display Element is Missing!');
    }
});
