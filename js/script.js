//se os campos de nome e email estiverem preenchidos 
//  envie os dados
//senão
//  peça a usuaria que preencha os campos nome e email

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  //codigo que deve ser executado
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
    alert("Por favor, preencha os campos nome, e-mail e telefone.")
  }
}


  