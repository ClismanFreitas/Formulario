const inputs = document.querySelectorAll(".input")
const btn = document.querySelector(".btn")
const invalido = document.querySelectorAll(".invalido")

const validacao = () => {
   inputs.forEach((inputs, index) => { 
    if(inputs.value === ""){
       inputs.classList.remove("valido")
       inputs.classList.add("erro")
       invalido[index].innerHTML = `Campo obrigatorio`
    } else {
        inputs.classList.remove("erro")
        inputs.classList.add("valido")
        invalido[index].innerHTML = ``
    }
})}

btn.addEventListener('click', validacao)