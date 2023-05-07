let corrX = 600/2;
let corrY = 600/2;

let ubRandom;
let j = 0;

class Triangulo{

    constructor(estado,nombre, cantidad,colores, cuantosCirculos,ubicaciones,xyi,grosores){
        
        this.nombreTextura = nombre;

        nombre = createGraphics(600, 600);
        nombre.background(220);    
     
               
        for(let i = 0 ; i<cuantosCirculos ; i++){
                        
            if(estado == 1 && estado == 2){
                nombre.stroke(colores[i]);  
            } else {
                nombre.stroke(random(colores));
            }
            nombre.stroke(random(colores));                                   
            nombre.strokeWeight(grosores[i]);
            nombre.noFill();
            nombre.ellipse(300, 300, xyi[j]+1*i*ubicaciones[j], xyi[j]+1*i*ubicaciones[j]);

            j++;

            if(j == cuantosCirculos*cantidad){
                j = 0;
            }
        }

        texture(nombre);
        this.texturizar(this.nombreTextura);

            
    }

        
        texturizar(){

        textureMode(NORMAL);
    

        if(this.nombreTextura === "img1"){
           
            beginShape();
            vertex(-corrX, 300-corrY, 0, 0.5);
            vertex(150-corrX, 150-corrY, 0.25, 0.25); 
            vertex(300-corrX, 300-corrY, 0.5, 0.5);             
            endShape();

           
        } else if(this.nombreTextura === "img2"){
            
            beginShape();
            vertex(150-corrX, 150-corrY, 0.25, 0.25); 
            vertex(300-corrX, -corrY, 0.5, 0);
            vertex(300-corrX, 300-corrY, 0.5, 0.5);            
            endShape();           

        } else if(this.nombreTextura === "img3"){
             
            beginShape();
            vertex(-corrX, -corrY, 0, 0);
            vertex(300-corrX, -corrY, 0.5, 0);
            vertex(150-corrX, 150-corrY, 0.25, 0.25);           
            endShape();

        } else if(this.nombreTextura === "img4"){
             
            beginShape();
            vertex(-corrX, -corrY, 0, 0);
            vertex(150-corrX, 150-corrY, 0.25, 0.25);
            vertex(-corrX, 300-corrY, 0, 0.5);             
            endShape();
          

        } else if(this.nombreTextura === "img5") {
              
            beginShape();
            vertex(150-corrX, 450-corrY, 0.25, 0.75);
            vertex(300-corrX, 300-corrY, 0.5, 0.5); 
            vertex(300-corrX, 600-corrY, 0.5, 1);  
            endShape();

        } else if(this.nombreTextura === "img6") {

            beginShape();
            vertex(-corrX, 600-corrY, 0, 1);
            vertex(150-corrX, 450-corrY, 0.25, 0.75); 
            vertex(300-corrX, 600-corrY, 0.5, 1); 
            endShape();

        } else if(this.nombreTextura === "img7") {

            beginShape();
            vertex(-corrX, 300-corrY, 0, 0.5);
            vertex(150-corrX, 450-corrY, 0.25, 0.75);   
            vertex(-corrX, 600-corrY, 0, 1);
            endShape();

        } else if(this.nombreTextura === "img8") {

            beginShape();
            vertex(-corrX, 300-corrY, 0, 0.5);
            vertex(150-corrX, 450-corrY, 0.25, 0.75);   
            vertex(300-corrX, 300-corrY, 0.5, 0.5);
            endShape();

        } else if(this.nombreTextura === "img9") {

            beginShape();
            vertex(300-corrX, 0-corrY, 0.5, 0);
            vertex(450-corrX, 150-corrY, 0.75, 0.25);  
            vertex(300-corrX, 300-corrY, 0.5, 0.5);
            endShape();

        } else if(this.nombreTextura === "img10") {

            beginShape();
            vertex(300-corrX, 300-corrY, 0.5, 0.5);
            vertex(450-corrX, 150-corrY, 0.75, 0.25); 
            vertex(600-corrX, 300-corrY, 1, 0.5);
            endShape(); 

        } else if(this.nombreTextura === "img11") {

            beginShape();
            vertex(600-corrX, 300-corrY, 1, 0.5);
            vertex(600-corrX, -corrY, 1, 0);
            vertex(450-corrX, 150-corrY, 0.75, 0.25);
            endShape();

        } else if(this.nombreTextura === "img12") {

            beginShape();
            vertex(600-corrX, -corrY, 1, 0);
            vertex(300-corrX, -corrY, 0.5, 0);
            vertex(450-corrX, 150-corrY, 0.75, 0.25);
            endShape();

        } else if(this.nombreTextura === "img13") {

            beginShape();
            vertex(300-corrX, 300-corrY, 0.5, 0.5);
            vertex(600-corrX, 300-corrY, 1, 0.5);  
            vertex(450-corrX, 450-corrY, 0.75, 0.75);
            endShape();

        } else if(this.nombreTextura === "img14") {

            beginShape();
            vertex(450-corrX, 450-corrY, 0.75, 0.75);
            vertex(600-corrX, 300-corrY, 1, 0.5);  
            vertex(600-corrX, 600-corrY, 1, 1);
            endShape();
            
        } else if(this.nombreTextura === "img15") {

            beginShape();
            vertex(450-corrX, 450-corrY, 0.75, 0.75);
            vertex(600-corrX, 600-corrY, 1, 1);
            vertex(300-corrX, 600-corrY, 0.5, 1);  
            endShape();

        } else if(this.nombreTextura === "img0") {
            beginShape();
            vertex(300-corrX, 300-corrY, 0.5, 0.5);
            vertex(450-corrX, 450-corrY, 0.75, 0.75);
            vertex(300-corrX, 600-corrY, 0.5, 1); 
            endShape();

        }


         
        
    }

     

}

   

 

    
