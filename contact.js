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

const apareRed = (i,j) =>{
    if(i===0){
        let hartaIconRed=document.getElementsByClassName("mapiconred")[j];
        let hartaIcon=document.getElementsByClassName("mapicon")[j];
        hartaIconRed.style.display="block";
        hartaIconRed.style.animation="aparitiered 0.3s linear";
        hartaIcon.style.animation="apasB 0.3s linear";
        setTimeout(function (){
                hartaIcon.style.display="none";
            },300);
    }
    if(i===1){
        let hartaIconRed=document.getElementsByClassName("mapiconred")[j];
        let hartaIcon=document.getElementsByClassName("mapicon")[j];
        hartaIcon.style.display="block";
        hartaIcon.style.animation="aparitiered 0.3s linear";
        hartaIconRed.style.animation="apasB 0.3s linear";
        setTimeout(function (){
            hartaIconRed.style.display="none";
        },300);
    }
}