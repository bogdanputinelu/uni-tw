const cos = (i) =>{
    let apas=document.getElementsByClassName('cumparaturi')[i];
    document.getElementsByClassName('cumparaturi')[1-i].style.display='none';
    if(apas.style.display==='block') {
        apas.style.animation='apasB 0.3s linear';
        setTimeout(function (){
            apas.style.display="none";
        },300);

    }
    else {
        apas.style.display = 'block';
        apas.style.animation='apasA 0.3s linear';
    }
}
let icon = document.querySelector(".meniu");

icon.addEventListener("click", () => {
    let meniuMediu=document.getElementsByClassName("meniumediu")[0];
    if (meniuMediu.style.display==="block") {
        meniuMediu.style.animation='apasB 0.3s linear';
        setTimeout(function (){
            meniuMediu.style.display="none";
        },300);
    }
    else{
        meniuMediu.style.display = "block";
        meniuMediu.style.animation="apasA 0.2s linear";
    }
    icon.classList.toggle("clicked");
});

const redirectSite = (i) =>{
    if(i===0)
        window.location.href="./men.html";
    else
        window.location.href="./women.html";
}

const getRandomColor = () =>{
    const letters="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        const cont=document.getElementById("container");
        const color=getRandomColor();
        cont.style.backgroundColor=color;
        document.getElementsByClassName("usericon")[0].style.backgroundColor=color;
        document.getElementsByClassName("cos")[0].style.backgroundColor=color;
        document.getElementById("butonuuu").style.backgroundColor=color;
    }
})


const butonSignUp = () =>{
    document.getElementsByClassName("signinup")[0].style.display='none';
    document.getElementsByClassName("contform")[0].style.display='flex';
}

const butonSignIn = () =>{
    document.getElementsByClassName("signinup")[0].style.display='none';
    document.getElementsByClassName("contform2")[0].style.display='flex';
}

const butonReintoarcere = () =>{
    document.getElementById("sterge").remove();
    document.getElementsByClassName("inputgresit")[0].style.display='none';
    document.getElementsByClassName("signinup")[0].style.display='flex';
}

const butonReintoarcereSucces = () =>{
    document.getElementsByClassName("inputbun")[0].style.display='none';
    document.getElementsByClassName("signinup")[0].style.display='flex';
}

const butonDelogare = () =>{
    document.getElementById("sterge").remove();
    document.getElementsByClassName("logat")[0].style.display='none';
    document.getElementsByClassName("signinup")[0].style.display='flex';
}

let emailLogat,numeLogat;

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const inputs = document.getElementsByTagName("input");

document.getElementsByTagName("form")[1].addEventListener("submit",(e)=>{
    const emailCont = inputs[2].value;
    const passwordCont = inputs[3].value;
    if(emailRegex.test(emailCont) && passRegex.test(passwordCont)) {
        localStorage.setItem(emailCont,JSON.stringify({pass:passwordCont,nume:inputs[1].value}));
        document.getElementsByClassName("contform")[0].style.display='none';
        document.getElementsByClassName("inputbun")[0].style.display='flex';
        metodaPut(inputs[1].value,emailCont);
    }
    else{
        document.getElementsByClassName("contform")[0].style.display='none';
        const div=document.getElementsByClassName("inputgresit")[0];
        const button=document.getElementById("aici");
        const newP=document.createElement("p");
        newP.innerHTML="E-mail sau parola gresita!";
        newP.id="sterge";
        div.style.display='flex';
        div.insertBefore(newP,button);
    }
    for (let i=1;i<=4;i++)
        inputs[i].value='';
    inputs[5].checked=false;
    inputs[6].checked=false;
})

document.getElementsByTagName("form")[2].addEventListener("submit",()=>{
    const emailCont = inputs[8].value;
    const passwordCont = inputs[9].value;
    if(emailCont in localStorage && JSON.parse(localStorage.getItem(emailCont)).pass===passwordCont) {
        document.getElementsByClassName("contform2")[0].style.display='none';
        document.getElementsByClassName("logat")[0].style.display='flex';

        const div=document.getElementsByClassName("logat")[0];
        const button=document.getElementById("aici2");
        const newP=document.createElement("p");
        newP.innerHTML="Bun venit, "+JSON.parse(localStorage.getItem(emailCont)).nume+"!";
        newP.id="sterge";
        div.style.display='flex';
        div.insertBefore(newP,button);
        document.getElementsByTagName("input")[11].value=emailCont;
        emailLogat=emailCont;
        numeLogat=JSON.parse(localStorage.getItem(emailCont)).nume;
        document.getElementsByTagName("input")[11].style.display='none';
    }
    else{
        document.getElementsByClassName("contform2")[0].style.display='none';
        const div=document.getElementsByClassName("inputgresit")[0];
        const button=document.getElementById("aici");
        const newP=document.createElement("p");
        newP.innerHTML="E-mail sau parola gresita!";
        newP.id="sterge";
        div.style.display='flex';
        div.insertBefore(newP,button);
    }
    inputs[8].value='';
    inputs[9].value='';
})


const metodaPut = (nume,email) => {
    const obiect = {email: email, nume: nume};

    fetch("http://localhost:3000/put", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obiect)
    });
}

const metodaDelete = (nume,email) =>{

    localStorage.removeItem(email);

    const obiect = {email: email, nume: nume};

    fetch("http://localhost:3000/delete", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obiect)
    });
}

const stergeCont = () =>{
    metodaDelete(numeLogat,emailLogat);
    document.getElementsByClassName("logat")[0].style.display='none';
    document.getElementsByClassName("signinup")[0].style.display='flex';
}