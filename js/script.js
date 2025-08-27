//Pega os elementos HTML pelo ID
const form = document.getElementById("formulario")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const cpf = document.getElementById("cpf")

form.addEventListener("submit", e =>{e.preventDefault();})//impede que o formulario seja enviado automaticamente
//validação do nome
if(nome.value.trim().lenght < 3 ){

}

