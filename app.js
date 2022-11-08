const express=require("express");
const app=express();
const cors=require("cors");

app.use(cors());
app.use(express.json());

const fs = require('fs');
var clienti;

fs.readFile('./numeClienti.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    clienti=JSON.parse(jsonString).clienti;
})

app.set('view engine', 'ejs');

app.use("/post",express.urlencoded({extended:true}));
app.use("/get",express.urlencoded({extended:true}));
app.use("/put",express.urlencoded({extended:true}));
app.use("/delete",express.urlencoded({extended:true}));


app.get("/get",(req,res)=>{
    var tagline = "Clienti:";

    res.render('pages/index', {
        clienti: clienti,
        tagline: tagline
    });
});

app.post("/post",(req,res)=>{

    const email=req.body.email;
    for(let i=0;i<clienti.length;++i){
        if(clienti[i].email===email){
            let tagline = "Datele personale:";
            res.render('pages/index1', {
                clienti: clienti[i],
                tagline: tagline
            });
            break;
        }
    }
});

app.put("/put",(req,res)=>{
    clienti.push({email:req.body.email,nume:req.body.nume});
    fs.writeFile('./numeClienti.json', JSON.stringify({clienti:clienti}), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.end();
})

app.delete("/delete",(req,res)=>{
    const emailD=req.body.email;
    const checkEmail = (email) =>{
        return email.email!==emailD;
    }
    clienti=clienti.filter(checkEmail);
    fs.writeFile('./numeClienti.json', JSON.stringify({clienti:clienti}), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.end();
})

app.listen(3000,()=>{
    console.log("Serverul a pornit");
});