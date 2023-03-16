let person = {
    namePerson : "Alejandro",
    age : 22, 
    city : "Armenia",
    profession : "Student"
};

let nameLlave = Object.keys(person);
position = 0;
for (let llave in person) {
    if (person.hasOwnProperty(llave)) {
      console.log(nameLlave[position] + " : " + person[llave]);
      position++;
    }
}

function presentation(personFunction){
    return console.log("\n" + personFunction.namePerson + "\n" + personFunction.age + "\n" + personFunction.city);
}

mensaje = presentation(person);
console.log(mensaje);

let llave = "hobbies";
person[llave] = ["Trotar", "Ver peliculas", "Senderismo", "Campismo", "Viajar"];
console.log("\nNombre llave: " + llave + "\n");

person.hobbies.forEach(hobbies => {
    console.log(hobbies)
});