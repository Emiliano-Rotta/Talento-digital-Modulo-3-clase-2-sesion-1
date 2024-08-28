let numeroUno = Number(prompt("escriba un número"))
let numeroDos = Number(prompt("escriba un número"))
let operacion = prompt("escriba una oeracion")


// suma, resta, multiplicacion, division, resto(módulo), exponenciación
if(operacion === "suma"){
    console.log(numeroUno + numeroDos)
} else if(operacion === "resta"){
    console.log(numeroUno - numeroDos)
} else if(operacion === "multiplicacion"){
    console.log(numeroUno * numeroDos)
} else if(operacion === "division"){
    console.log(numeroUno / numeroDos)
} else if(operacion === "resto"){
    console.log(numeroUno % numeroDos)
} else if(operacion === "exponenciación"){
    console.log(numeroUno ** numeroDos)
} else {
    console.log("recordá que solo pueden ingresarse suma resta multiplicacion division resto exponenciacion")
}