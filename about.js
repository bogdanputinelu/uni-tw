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

