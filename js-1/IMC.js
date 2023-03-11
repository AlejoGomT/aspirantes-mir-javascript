var peso, altura;

function ingresoDatos(){
    this.peso = prompt("Ingrese su peso: ");
    this.altura = prompt("Ingrese su altura: ");
}

function bim(peso, altura){
    return IMC = peso / (altura^2);
}

ingresoDatos;
console.log(bim(61, 1.73));