// Referanser til HTML-elementer
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let cookie = document.querySelector("#cookie");
let t = 0;
let img = 0;
let j = 100;
let k = 0;


//Klassedefinisjoner
class Figur{
    constructor(x, y, r, b, h){
        this.x = x;
        this.y = y; 
        this.r = r;
        this.b = b; 
        this.h = h;
    }
    beveg(){
        this.x = this.x + Math.random()*10-5;
        this.y = this.y + Math.random()*10-5;
    }
    
}
class Bubble extends Figur{
    constructor(x, y, r){
        super(x, y, r);
    }
    tegn(){
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.stroke();
    }
};
class Firkant extends Figur{
    constructor(x, y, r, b, h){
        super(x, y, r, b, h);
    }
    tegner() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.b, this.h);
        ctx.stroke();
    }
};
/*
class NoeSpennende{
    constructor(x,y,image){
        this.x = x;
        this.y = y;
        this.image = image; 
    }
    beveg() {
        this.x = this.x + Math.random()*10-5;
        this.y = this.y + Math.random()*10-5;
    }
    tegn() {
        ctx.drawImage(img, this.x, this.y, 100, 100);
    }
}; */


// Globale variabler
let boble1 = new Bubble(200,300,50);
let bobleArray = [];
let firkantArray = [];
function merBobler() {
    for (let g = 0; g < j; g++) {
        let w = Math.random()*canvas.width;
        let f = Math.random()*canvas.height;
        t = new Bubble(w, f, 50);
        bobleArray.push(t);
    };
};
function merFirkanter() {
    for (let q = 0; q < j; q++){
        let e = Math.random()*canvas.width;
        let i = Math.random()*canvas.height;
        t = new Firkant(e, i, 0, 25, 25);
        firkantArray.push(t);
        
    };
};
function bevegeligFigurer(k) {
    for (let u = 0; u < j; u++) {        
        k[u].beveg();
        k[u].tegn();
    };
};
function bevegeligFirk(k) {
    for (let u = 0; u < j; u++) {        
        k[u].beveg();
        k[u].tegner();
    };
};

//let cookieShake = new NoeSpennende(100, 100, cookie);


// Oppstart
merBobler();
merFirkanter();
gameloop();


//Funksjonsdefinisjoner
function gameloop(){
  tegnBakgrunn();
  bevegeligFigurer(bobleArray);
  bevegeligFirk(firkantArray);
  requestAnimationFrame(gameloop);
}

function tegnBakgrunn(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height); // Tegner bakgrunnsfarge på canvaset
}

function tegnBubble(){
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(bubble.x, bubble.y, 50, 0, 2 * Math.PI);
  ctx.stroke()
}

function bevegBubble(){
  bubble.x = bubble.x + Math.random()*10 - 5;
  bubble.y = bubble.y + Math.random()*10 - 5;
}
