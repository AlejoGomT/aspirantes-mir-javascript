let receta = {
    //isEmpy
};

receta["name"] = "Sanwdwich";
receta["ingredients"];

receta["ingredients"] ={
    nombre : ["Pan", "Queso"],
    cant : [1, 2],
};

console.log("Ingrediente 1: " + receta["ingredients"].nombre[0]);

function total(){
    totalCant = 0;
    receta["ingredients"].cant.forEach(cantTotal => {
        totalCant += cantTotal;
    });
    return totalCant;
}

console.log("La cantidad total de los ingredientes es: " + total());