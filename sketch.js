let t = [];
let cantidad = 16;
//let ubRandom;
let nombre;


let estado;
let estadoFinal = 5;

/*let maxCirculos = 25;
let minCirculos = 10;*/
let cuantosCirculos = 23;

let ubicaciones = [];
let xyi = [];

let unGrosor;
let gros;
let grosores = [];


/*
  Si unColor = 1, es un solo color
  Si unColor = 0, puede ser monoCromo o variado
    Si monoCromo = 1, es monocromatico
    Si monoCromo = 0, es variado 
*/
let unColor;
let monoCromo;
let cuantosColores;
let paletaAutor;
let paleta = [30,150,336];

let col;
let sat;
let bri;
let setColores = [];
let colores = [];

let interruptor;
let tiempo;

function setup() {
  createCanvas(600, 600, WEBGL);
  background(220);

  //TONO, SATURACION, BRILLO
  colorMode(HSB,255,255,255);
  
  //Estados iniciales
  estado = 1;
  unColor = 1;
  monoCromo = 1;
  paletaAutor = 1;

  unGrosor = 0;

  interruptor = true;
  tiempo = 0;
  
  //Definimos ubicaciones
  setearUbicaciones();  
  setearColores();  
  setearGrosores();
  
  llamarConstructor();

}

function draw() {

  
  //CONTROL DE TIEMPO
  if (interruptor == false){
      tiempo++;
      if (tiempo > 150){
        interruptor = true;
      }
  }

  console.log(interruptor);
 
   
}

function keyPressed(){

  
    //PASAJE DE ESTADOS  
    if(keyCode == ENTER){
      estado++;

      if(estado == estadoFinal){
          estado = 1;
      }

      console.log(estado);
    }

  if(interruptor == true){
    //CONTROL ESTADO 2
    if(estado == 4){
      if(key == 'a'){
        unColor = 1;
        setearColores();
      } else if (key == 'b'){
        unColor = 0;
        monoCromo = 1;
        setearColores();
      } else if (key == 'c'){
        unColor = 0;
        monoCromo = 0;
        setearColores();
      }
      
      llamarConstructor();

    } else if(estado == 3){
      if(key == 'a'){
        paletaAutor = 1;
        setearColores();
        estado++;
      } else if (key == 'b'){
        paletaAutor = 0;
        setearColores();
        estado++;
      }

      console.log(estado);

      llamarConstructor();
    } else if (estado == 1){
      if(key == 'a'){
        unGrosor = 1;
        setearGrosores();
      } else if (key == 'b'){
        unGrosor = 0;
        setearGrosores();
      }

      llamarConstructor();

    }

    tiempo = 0;  
    interruptor = false;
  } 
}

function mousePressed(){

  if (interruptor == true){
    if (estado == 2){
      if(mouseButton == LEFT){
  
        setearUbicaciones();
        llamarConstructor();

        tiempo = 0;  
       interruptor = false; 
      }       
    }    
  }
}


function setearColores(){

  if(unColor == 1){   
    if(paletaAutor == 1){
      col = random(paleta);
    } else{
      col = random(255);
    }
    sat = random(150,220);
    bri = random(150,220);
      
    setColores[0] = color(col, sat, bri); 

    for(i=0;i<cuantosCirculos;i++){
      colores[i] = setColores[0];
    }

  } else {
    if(monoCromo == 1){
      cuantosColores = int(random(3,5));
      if(paletaAutor == 1){
        col = random(paleta);
      } else {
        col = random(255);
      }      
      if(cuantosColores == 3){
        setColores.pop();
      }
      for(i=0;i<cuantosColores;i++){
        bri = random(30,220);
        setColores[i] = color(col,sat,bri);
      }

      for(i=0;i<cuantosCirculos;i++){
        colores[i] = random(setColores);
      }

    } else {
      cuantosColores = int(random(3,5));
      if(cuantosColores == 3){
        setColores.pop();
      }
      if (paletaAutor == 1){
        setColores[0] = color(150,12,190); //gris
        for(i=1;i<cuantosColores;i++){
          sat = random(150,220);
          bri = random(150,220);         
          col = random(paleta); 
          setColores[i] = color(col,sat,bri);
        }
      } else {
        for(i=0;i<cuantosColores;i++){
          sat = random(150,220);
          bri = random(150,220);         
          col = random(255); 
          setColores[i] = color(col,sat,bri);
        }
      }   
      

      for(i=0;i<cuantosCirculos;i++){
        colores[i] = random(setColores);
      }

    }
  }
}

function setearGrosores(){
  if(unGrosor == 1){
    gros = random(7,20);
    for(i=0;i<cuantosCirculos;i++){
      grosores[i] = gros;
    }

  } else if(unGrosor == 0){
    for(i=0;i<cuantosCirculos;i++){
      grosores[i] = random(7,20);
    }
  }
}

function setearUbicaciones(){
  for(i=0;i<(cantidad*cuantosCirculos);i++){
    ubicaciones[i] = random(70,100);
    xyi[i] = random(10,100);
  }
}


function llamarConstructor(){
  for(i=0;i<cantidad;i++){
    nombre = "img"+i;
    t.push (new Triangulo(estado,nombre,cantidad,colores,cuantosCirculos,ubicaciones,xyi,grosores));    
  }
}