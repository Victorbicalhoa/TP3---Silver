let numero = parseInt(prompt("Escolha um número de 0 a 8"))
let numeroSorteado = parseInt(Math.random() * 8)

if(numero >= 0 && numero <= 8){
    if(numero === numeroSorteado){
        alert(`Voce ganhou! o numero escolhido foi (${numero}) e o numero sorteado foi (${numeroSorteado})`)
    } else{
        alert(`infelizmente você não ganhou! o numero escolhido foi (${numero}) e o numero sorteado foi (${numeroSorteado})` )
    } 
} else{
    alert("Número inválido! Escolha de 0 a 8")
}
