   
//--Atividade 05--//
let contador = 0
let soma = 0
let media = 0
while(contador >= 0){
    if (contador == 5){
        console.log(`Média = ${media}`)
        break
    }
    let idade = Number(prompt("Qual a minha idade ?"))
    contador++
    soma = soma + idade
    media = (soma / contador)
}   
if (media <=25){
    console.log(`Média = ${media}, então vc é Jovem`)
}
else if (media >= 26 && media <=60) {
    console.log(`Média = ${media}, então vc é Adulto`)
}
else{
    console.log(`Média = ${media}, então vc é Idoso`)
}
