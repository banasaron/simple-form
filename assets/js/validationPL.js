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
        p[0].textContent = "Proszę wpisac imię";
        
    }else if(onlyLetters.test(userName )){
        color(0, "lime");
        p[0].textContent = "OK!";
    }else{
        color(0, "red");
        p[0].textContent = "Twoje imię powinno zawierać tylko litery";
    }

    //surname--------------------------------------------------------------------------------------------------------------------------
    if(userSurname  === ""){
        color(1, "red");
        p[1].textContent = "Proszę wpisac nazwisko";
        
    }else if(onlyLetters.test(userSurname )){
        color(1, "lime");
        p[1].textContent = "OK!";
    }else{
        color(1, "red");
        p[1].textContent = "Twoje nazwisko powinno zawierać tylko litery";
    }

    //age--------------------------------------------------------------------------------------------------------------------------
    if(userAge  === ""){
        color(2, "red");
        p[2].textContent = "Proszę wpisac wiek";
        
    }else if(userAge  < 15){
        color(2, "red");
        p[2].textContent = "Musić mieć 15 lat..";
    }else if(userAge  > 125){
        color(2, "red");
        p[2].textContent = "Wpisz swój prawdziwy wiek..";
    }else{
        color(2, "lime");
        p[2].textContent = "OK!";
    }

    //email--------------------------------------------------------------------------------------------------------------------------
    if(userEmail  === ""){
        color(3, "red");
        p[3].textContent = "Proszę wpisac email";
        
    }else if(emailValid.test(userEmail )){
        color(3, "lime");
        p[3].textContent = "OK!";
    }else{
        color(3, "red");
        p[3].textContent = "Twój email powinien zawierać: litery, liczby lub znaki spacjalne";
    }

    //password--------------------------------------------------------------------------------------------------------------------------
    if (userPwd === "") {
        color(4, "red");
        p[4].textContent = "Proszę wpisac hasło";
    } else if (userPwd.length < 8) {
        color(4, "red");
        p[4].textContent = "Twoje hasło musi zawierać co najmniej 8 znaków";
    } else if (weakPwd.test(userPwd)) {
        color(4, "red");
        p[4].textContent = "Twoje hasło jest słabe";
    } else if (strongPwd.test(userPwd) || strongPwd2.test(userPwd)) {
        color(4, "lime");
        p[4].textContent = "YTwoje hasło jest średnie";
    } else {
        color(4, "yellow");
        p[4].textContent = "Twoje hasło jest silne";
    }

    //adress--------------------------------------------------------------------------------------------------------------------------
    if(userAdress  === ""){
        color(5, "red");
        p[5].textContent = "Proszę wpisac adres";
        
    }else if(adressValid.test(userAdress)){
        color(5, "lime");
        p[5].textContent = "OK!";
    }else{
        color(5, "red");
        p[5].textContent = "Twój adres nie jest poprawny, oto przykład: Zielona 12/3";
    }

    //zip code--------------------------------------------------------------------------------------------------------------------------
    if(userZip  === ""){
        color(6, "red");
        p[6].textContent = "Proszę wpisac kod pocztowy";
        
    }else if(zipValid.test(userZip)){
        color(6, "lime");
        p[6].textContent = "OK!";
    }else{
        color(6, "red");
        p[6].textContent = "Twój kod pocztowy nie jest poprawny, oto przykład: 123-45";
    }
});

document.querySelector("#reset").addEventListener('click', ()=>{

    p.forEach(e => {
        e.textContent = "";
    });
});