  //--Atividade 02 Modelo 01--//
  //  var nota = Number(prompt("Digite a 1ª Nota:"))
  //  var contador = 1
  //  var soma = 0    
  //  var soma = soma + nota
  //  while(contador >= 1){
  //      nota = Number(prompt("Digite a Nota Seguinte:"))
  //      contador++
  //      soma = soma + nota
  //      console.log(`Média ${(soma/contador)}`)
  // }
//--Atividade 02 Modelo 02--//
  var nota = Number(prompt("Digite a 1ª Nota:"))
   var contador = 1
   var soma = 0    
   var soma = soma + nota
   while(contador >= 1){
       if(contador == 3){
         console.log("Encerramos a média")
         break
       }
       nota = Number(prompt("Digite a Nota Seguinte:"))
       contador++
       soma = soma + nota
       console.log(`Média ${(soma/contador)}`)
  }
