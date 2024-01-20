const p = document.querySelectorAll("p");

const onlyLetters = /^[a-zA-Z]+$/;
const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const weakPwd = /^(?:[a-z]+|\d+|[a-z\d]+)$/;
const strongPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const strongPwd2 = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;


const adressValid = /^[A-Z][a-zA-Z]*\s+\d+[a-zA-Z]?(?:\/\d+[a-zA-Z]?)?$/;
const zipValid = /^\d{2}-\d{3}$/;



document.querySelector("#check").addEventListener('click', ()=>{
    let userName = document.querySelector("#userName").value;
    let userSurname = document.querySelector("#userSurname").value;
    let userAge = document.querySelector("#userAge").value;
    let userEmail = document.querySelector("#userEmail").value;
    let userPwd = document.querySelector("#userPwd").value;
    let userAdress = document.querySelector("#userAdress").value;
    let userZip = document.querySelector("#userZipCode").value;

    function color(id, color){
        p[id].style.color = color;
    }
    //clear warnings before new
    p.forEach(e => {
        e.textContent = "";
    });

    //name--------------------------------------------------------------------------------------------------------------------------
    if(userName  === ""){
        color(0, "red");
        p[0].textContent = "Please insert the name";
        
    }else if(onlyLetters.test(userName )){
        color(0, "lime");
        p[0].textContent = "OK!";
    }else{
        color(0, "red");
        p[0].textContent = "Your name should only contain letters";
    }

    //surname--------------------------------------------------------------------------------------------------------------------------
    if(userSurname  === ""){
        color(1, "red");
        p[1].textContent = "Please insert the surname";
        
    }else if(onlyLetters.test(userSurname )){
        color(1, "lime");
        p[1].textContent = "OK!";
    }else{
        color(1, "red");
        p[1].textContent = "Your surname should only contain letters";
    }

    //age--------------------------------------------------------------------------------------------------------------------------
    if(userAge  === ""){
        color(2, "red");
        p[2].textContent = "Please insert the age";
        
    }else if(userAge  < 15){
        color(2, "red");
        p[2].textContent = "You must be 15 year old..";
    }else if(userAge  > 125){
        color(2, "red");
        p[2].textContent = "Write your real age..";
    }else{
        color(2, "lime");
        p[2].textContent = "OK!";
    }

    //email--------------------------------------------------------------------------------------------------------------------------
    if(userEmail  === ""){
        color(3, "red");
        p[3].textContent = "Please insert the email";
        
    }else if(emailValid.test(userEmail )){
        color(3, "lime");
        p[3].textContent = "OK!";
    }else{
        color(3, "red");
        p[3].textContent = "Your email should contain: letters, numbers or special characters";
    }

    //password--------------------------------------------------------------------------------------------------------------------------
    if (userPwd === "") {
        color(4, "red");
        p[4].textContent = "Please insert the password";
    } else if (userPwd.length < 8) {
        color(4, "red");
        p[4].textContent = "Your password must contain at least 8 characters";
    } else if (weakPwd.test(userPwd)) {
        color(4, "red");
        p[4].textContent = "Your password is weak";
    } else if (strongPwd.test(userPwd) || strongPwd2.test(userPwd)) {
        color(4, "lime");
        p[4].textContent = "Your password is strong";
    } else {
        color(4, "yellow");
        p[4].textContent = "Your password is medium";
    }

    //adress--------------------------------------------------------------------------------------------------------------------------
    if(userAdress  === ""){
        color(5, "red");
        p[5].textContent = "Please insert the adress";
        
    }else if(adressValid.test(userAdress)){
        color(5, "lime");
        p[5].textContent = "OK!";
    }else{
        color(5, "red");
        p[5].textContent = "Your adress isn't correct, example: Crescent 12/3";
    }

    //zip code--------------------------------------------------------------------------------------------------------------------------
    if(userZip  === ""){
        color(6, "red");
        p[6].textContent = "Please insert the zip code";
        
    }else if(zipValid.test(userZip)){
        color(6, "lime");
        p[6].textContent = "OK!";
    }else{
        color(6, "red");
        p[6].textContent = "Your zip code isn't correct, example: 12-345";
    }
});

document.querySelector("#reset").addEventListener('click', ()=>{

    p.forEach(e => {
        e.textContent = "";
    });
});
