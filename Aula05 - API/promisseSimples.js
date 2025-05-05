// Uma promise tem dois métodos reject e o resolver
// Reject - rejeita a promise
// Resolver - Aceita a promise
const promessa = new Promise((resolver, reject) => {
    reject("Deu ruim!")
    resolver("Deu certo")
    
})

promessa
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    // Se usa o catch quando tem a possibilidade da promise ser rejeitada

const promessa2 = new Promise((resolver, reject) => {
    // nenhum resolver e nem reject
})

promessa2.then((res) => {
    console.log("Nunca vai chegar até aqui")
})