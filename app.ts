// Get refrence to the form and display area//
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayelement =document.getElementById('resume-display') as HTMLDivElement;


// handle form submission//
form.addEventListener("submit", (event:Event)=>{
    event.preventDefault();//prevent page reload

    //collect input values//
    const name =(document.getElementById('Name') as HTMLInputElement).value;
    const fathername =(document.getElementById('fathername') as HTMLInputElement).value
    const phno =(document.getElementById('phno') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const Address  =(document.getElementById('Address') as HTMLInputElement).value
    const Education = (document.getElementById('Education') as HTMLInputElement).value
    const Skills = (document.getElementById('Skills') as HTMLInputElement).value
    const WorkExperience = (document.getElementById(' WorkExperience ') as HTMLInputElement).value


//Generate the resume content dynamicaly//
const resumeHTML= `
<h2><b>Resume</b></h2>
<h3>Personal Informaion</h3>
<p><b>Name:</b>${name}</p>
<p><b>fathername:</b>${fathername}</p>
<p><b>Phone number:</b>${phno}</p>
<p><b>Email:</b>${email}</p>
<p><b>Address:</b>${Address}</p>

<h3>Education</h3>
<p>${Education}</p>

<h3>Skills</h3>
<p>${Skills}</p>

<h3>Work Experience</h3>
<p>${WorkExperience}</p>
`;
if(resumeDisplayelement){
    resumeDisplayelement.innerHTML = resumeHTML;
}else{
    console.error('The Resume Display Element is Missing!');
}
  
})
