//--Atividade 04--//   
while(true){
    let nome = prompt("Digite o Login:")
    let senha = prompt("Digite sua senha:")
    if (nome == senha){
        console.log("Erro: O Login não pode ser igual a senha")
    }
    else{
        console.log(`Login = ${nome} e Senha = ${senha}`)
        break
    }
   }   

