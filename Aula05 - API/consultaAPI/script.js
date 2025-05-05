const btn = document.getElementById("buscarButton")
const nameContainer = document.getElementById("name")

btn.addEventListener("click", () => {
   fetch("https://jsonplaceholder.typicode.com/users/4")
    .then((res) => res.json())
   .then(user => {

   nameContainer.innerText = user.name
    })
})

// API DE FOTOS DE GATO
const btnGato = document.getElementById("getCat")
const imagemContainer = document.getElementById("image")

btnGato.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then(data =>  {
        imagemContainer.innerHTML = `<img src="${data[0].url}"/>`
    })
})

// API DE CEP
const cepInput = document.getElementById("cepInput")
const buttonCep = document.getElementById("buttonCep")

buttonCep.addEventListener("click", () => {
    fetch(`https://viacep.com.br/ws/${cepInput.value}/json`)
    .then((res) => res.json())
    .then(data => {
        document.getElementById("logradouro").innerText = `Rua: ${data.logradouro}`
        document.getElementById("bairro").innerText = `Rua: ${data.bairro}`
        document.getElementById("cidade").innerText = `Rua: ${data.localidade}`
        document.getElementById("estado").innerText = `Rua: ${data.estado}`
    })
})

// API DE EURO
const btnEuro = document.getElementById("showEuro")
const euroContainerV = document.getElementById("getEuroVenda")
const euroContainerC = document.getElementById("getEuroCompra")

btnEuro.addEventListener("click", () => {
    fetch("https://economia.awesomeapi.com.br/json/last/EUR-BRL")
    .then((res) => res.json())
    .then(data => {
        console.log(data)
        euroContainerV.innerText = `Valor de compra: ${data.EURBRL.bid}`
        euroContainerC.innerText = `Valor de venda: ${data.EURBRL.ask}`
    })
})