function pedirSorvete() {
    return new Promise((resolver, reject) => {
        console.log("👨 pedi um sorvete...")

        setTimeout(() => {
            const temSorvete = true

            if(temSorvete) {
                resolver("🍦 Aqui está o seu sorvete")
            } else {
                reject("❌ Não tem sorvete")
            }
        }, 2000);
    })
}

pedirSorvete()
    .then((resposta) => {
    console.log("Promise resolvida com sucesso: ", resposta)
}).catch((error) => {
    console.log("Promise foi rejeitada: ", error)
})

console.log("⛹️ Enquanto isso, fui brincar")