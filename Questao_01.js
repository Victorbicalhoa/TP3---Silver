let lado1 = parseFloat(prompt("Digite o primeiro lado do triangulo"))
let lado2 = parseFloat(prompt("Digite o segundo lado do triangulo"))
let lado3 = parseFloat(prompt("Digite o terceiro lado do triangulo"))

if (lado1 === lado2 && lado2 === lado3){
    alert("Triangulo Equilátero")
} else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    alert("Triangulo isósceles")
} else{
    alert("Triangulo escaleno")
}