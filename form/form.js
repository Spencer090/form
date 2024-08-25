const signup = document.querySelector("#firstform");
const signin =   document.querySelector("#secondform");
const signupbtn =   document.querySelector("#upbtn");
const signinbtn =   document.querySelector("#inbtn");

// darkmode

const body =   document.querySelector(".bdy");
const fset =   document.querySelector(".x");
const mbtn =   document.querySelector(".mbtn");
const wbtn =   document.querySelector(".wbtn");

// console.log(signinbtn);


function darkmode(){
    body.style.background = "black";
    // fset.style.background = "white";
    body.style.color = "white";
  
}
function lightmode(){
    body.style.background = "white";
    // fset.style.background = "white";
    body.style.color = "black";
  
}




function showform() {
    signup.style.display = 'block';
    signup.style.background = 'black';
    signup.style.color = 'white';

    signin.style.display = 'none';
}

function hideform () {
    signup.style.display = 'none';
    signin.style.display = 'block';
    signin.style.background = 'white';
    signin.style.color = 'black';
   
}



signupbtn.onclick = showform;
signinbtn.onclick = hideform;
mbtn.onclick = darkmode ;
wbtn.onclick = lightmode ;