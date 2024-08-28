//Operadores aritmeticos:

//suma resta multiplicacion y division

//modulo expenenciacion incremento y decremento

// let uno = 10 //numero
// let dos = 20 //numero 
// let tres = "10" //string
// let cuatro = "20" //string

// console.log(uno + dos) // 30
// console.log(tres + dos) // "1020"
// console.log(tres + cuatro) // "1020"
// console.log(uno - dos) // a -10
// console.log(tres - dos) // b -10
// console.log(tres - cuatro) // c -10

//Si quiero sumar 2 string los concatena
//Si quiero sumar 1 string y 1 numero; JS convierte en string el numero y los concatena
// Si quiero (restar, dividir o multiplicar) 2 string: si se pueden pasar a numero, JS los convierte a numero y realiza la operacion. Si alguno no se puede convertir da como resultado NaN


// ------------------------------------------
//------------modulo % --------------

// let numUno = 50
// let numDos = 2

// if(numUno % numDos === 0){
//     console.log(numUno + " es par")
// }else {
//     console.log(numUno + " es impar")
// }

// ------------------------------------------
//------------exponenciacion --------------

// let numUno = 40
// let numDos = 3

// console.log(numUno**numDos)
// console.log(numUno + 1) //41
// console.log(numUno + 1) //41 
// console.log(numUno + 1) //41

// console.log(numUno = numUno + 1) //41
// console.log(numUno += 1) //42
// console.log(numUno = numUno + 1) //43


///---------------------------------incremento
// let numUno = 40

// numUno++
// numUno++
// numUno++
// numUno++
// numUno++
// console.log(numUno) //45

///---------------------------------decremento
// let numDos = 3
// numDos--
// numDos--
// numDos--
// numDos--
// numDos--
// console.log(numDos) //-2



// ---------------------------------------
//Outputs  se refiere al proceso de mostrar datos o resultados de alguna operación al usuario

//prompt, alert, console.log
//input (toda modificacion del DOM) document.querySelector("input")

// document.write("esto se vera en el documento") //no es muy buena practica usarlo

let personas = [

    {nombre: "Carlos", edad: 34},
    {nombre: "Juan", edad: 28},
    {nombre: "Roberto", edad: 34}
  ];

 console.table(personas)
  