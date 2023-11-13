function setup() {
  createCanvas(windowWidth, windowHeight);
}let estrellas = []; // Almacena las estrellas

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  // Dibuja todas las estrellas existentes
  for (let i = 0; i < estrellas.length; i++) {
    estrellas[i].mostrar();
  }
}

function mouseClicked() {
  // Crea una nueva estrella de 5 puntas en la posición del clic y agrégala a la lista de estrellas
  let x = mouseX;
  let y = mouseY;
  let tamano = random(10, 30); // Tamaño aleatorio para las estrellas
  let estrellaNueva = new Estrella(x, y, tamano);
  estrellas.push(estrellaNueva);
}

class Estrella {
  constructor(x, y, tamano) {
    this.x = x;
    this.y = y;
    this.tamano = tamano;
    this.opacidad = 255; // Opacidad inicial
  }

  mostrar() {
    noStroke();
    fill(255, this.opacidad); // Establece el color y la opacidad de la estrella
    this.dibujarEstrella(this.x, this.y, this.tamano); // Dibuja la estrella
  }

  dibujarEstrella(x, y, tamano) {
    let angle = TWO_PI / 5;
    let halfSize = tamano / 2;
    beginShape();
    for (let i = 0; i < 5; i++) {
      let xVertex = x + cos(angle * i) * halfSize;
      let yVertex = y + sin(angle * i) * halfSize;
      vertex(xVertex, yVertex);
      xVertex = x + cos(angle * i + HALF_PI) * (halfSize / 2);
      yVertex = y + sin(angle * i + HALF_PI) * (halfSize / 2);
      vertex(xVertex, yVertex);
    }
    endShape(CLOSE);
  }
}
