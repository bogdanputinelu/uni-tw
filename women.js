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
const iesiredetalii = () =>{
    let div=document.getElementsByClassName("aldreak")[0];
    div.style.animation='apasB 0.3s linear';
    setTimeout(function (){
        div.style.display="none";
    },300);
    let div1=document.getElementsByClassName("aldreak1")[0];
    div1.style.display="none";
}

const selectarePoza = (index) =>{
    document.getElementsByClassName("picmainpoza")[0].src=document.getElementsByClassName("picsecpoza")[index].src;
}

const selectarePozaLaDreapta = () =>{
    const img=document.getElementsByClassName("picmainpoza")[0];
    const imagini=document.getElementsByClassName("picsecpoza");
    let ok=0;
    for(let i = 1;i<5;i++){
        if(img.src===imagini[i].src){
            img.src=imagini[i-1].src;
            ok=1;
        }
    }
    if(ok===0){
        img.src=imagini[4].src;
    }
}

const selectarePozaLaStanga = () =>{
    const img=document.getElementsByClassName("picmainpoza")[0];
    const imagini=document.getElementsByClassName("picsecpoza");
    let ok=0;
    for(let i = 3;i>=0;i--){
        if(img.src===imagini[i].src){
            img.src=imagini[i+1].src;
            ok=1;
        }
    }
    if(ok===0){
        img.src=imagini[0].src;
    }
}

const detalii = (imgSource) =>{
    let dropdowns=document.getElementsByClassName("cumparaturi");
    for(let i=0;i<=1;i++){
        dropdowns[i].style.display="none";
    }

    let mainpic=document.getElementsByClassName("picmainpoza")[0];
    mainpic.src=imgSource;
    let secpic=document.getElementsByClassName("picsecpoza");
    const litera="abcde";
    for(let i=0;i<5;i++){
        if(imgSource[0]==='p')
            secpic[i].src="pantof"+imgSource[6]+litera[i]+".jpg";
        else{
            secpic[i].src="fpantof"+imgSource[7]+litera[i]+".jpg.png";
        }
    }
    let div=document.getElementsByClassName("aldreak")[0];
    div.style.display="block";
    div.style.animation='apasA 0.3s linear';

    let div1=document.getElementsByClassName("aldreak1")[0];
    div1.style.display="block";
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
