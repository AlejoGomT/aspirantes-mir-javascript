//Function sum
console.log("Function sum numbers of a array:");

function sum(numbers){
    var sumNumber=0;
    for(i=0; i<numbers.length; i++){
        sumNumber += numbers[i];
    }
    return "[" + numbers + "] Array sum: " + sumNumber;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

//Function Max number
console.log("\nFunction max numbers of a array:");

function max(numbers){
    var comparable = 0;

    if(numbers.length == 0){
        comparable = undefined;
    }else{
        for(i=0; i<numbers.length; i++){
            if (comparable < numbers[i]) {
                comparable = numbers[i];
            }
        }
    }
    
    return "[" + numbers + "]  Largest number in matrix: " + comparable;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined

//Function Max number
console.log("\nFunction max numbers of a array:");

function maxIndex(numbers){
    var indexOfarray = undefined;
    var comparable = 0;

    if(numbers.length == 0){
        indexOfarray = numbers.length-1;
    }else{
        for(i=0; i<numbers.length; i++){
            if (comparable < numbers[i]) {
                comparable = numbers[i];
                indexOfarray = i;
            }
        }
    }
    
    return "[" + numbers + "]  Index of largest number in matrix: " + indexOfarray;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

//Function Max number
console.log("\nFunction join for spaces between characters:");

function join(array){
    var text = "";

    for (i=0; i<array.length; i++) {
            text += array[i] + " ";
    }
    
    return "[" + array + "]  Array to string with spaces: " +text;
}

console.log(join(["Hello", "this", "was", "a", "Array"])); // "Hello this was a Array"
console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""

//  ¡¡END OF THE MISSION!!