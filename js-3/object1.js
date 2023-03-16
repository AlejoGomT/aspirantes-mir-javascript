let pedro = {
    name : "Pedro Perez",
    age : 30,
    active : true,
    hobbies : ["programar", "squas", "piano"],

};

console.log("Edad: " + pedro.age + "\n\n");

let llave = "height";
pedro[llave] = 1.8;

delete pedro.active;

let nameLlave = Object.keys(pedro);
position = 0;
for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(nameLlave[position] + " : " + pedro[llave]);
      position++;
    }
}
