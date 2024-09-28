let salarioAtual = parseFloat(prompt("Informe o salário atual:"))
let anosDeEmpresa = parseInt(prompt("Informe quantos anos de empresa:"))
let dependente = prompt("Possui dependente? (s/n)")
let verificaDependente
let novoSalario

if (dependente === "s"){
    verificaDependente = true
} else {
    verificaDependente = false
}

if (anosDeEmpresa >= 2 && verificaDependente){
    novoSalario = (salarioAtual * 1.15) + 500
    alert(`Salário atual: R$${salarioAtual.toFixed(2)}, Anos de empresa: ${anosDeEmpresa}, Novo Salario: R$${novoSalario.toFixed(2)}`)
} else if (anosDeEmpresa >= 2) {
    novoSalario = salarioAtual * 1.15
    alert(`Salário atual: R$${salarioAtual.toFixed(2)}, Anos de empresa: ${anosDeEmpresa}, Novo Salario: R$${novoSalario.toFixed(2)}`)
}
