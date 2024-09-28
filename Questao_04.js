let peso = parseFloat(prompt("Digite o seu peso em (kg):"))
let altura = parseFloat(prompt("Digite o sua altura em (m):"))
let imc = peso / (altura * altura)

if(imc >= 18.5 && imc < 25){
    alert("Peso normal")
} else if(imc >= 25 && imc < 30){
    alert("Pré Obesidade")
} else if(imc >= 30 && imc < 35){
    alert("Obesidade Grau I")
} else if(imc >= 35 && imc < 40 ){
    alert("Obesidade Grau II")
} else if (imc >= 40){
    alert("Obesidade Grau III")
} else{
    alert("Abaixo do peso")
}

console.log(imc)