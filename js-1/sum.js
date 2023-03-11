function suma(number){
    var inicial = 1;
    var total=0;
    while(inicial<=number){
        total += inicial;
        inicial++;
    }
    return "El total de la suma hasta " + number + " es: " + total;
}

console.log(suma(4));
console.log(suma(10));
console.log(suma(15));


