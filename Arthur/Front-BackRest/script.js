
document.addEventListener("DOMContentLoaded", function () { // Executa quando está carregando a página

    const formProduto = document.getElementById("form-produto");

    formProduto.addEventListener("submit", (evento) => { // Dentro desse evento tem várias informações importantes como o momento em que clicou no botão, etc...
        // Impedir o form de recarregar
        evento.preventDefault();

        const nome = document.getElementById("form-nome").value;
        const preco = document.getElementById("form-preco").value;
        const quantidade = document.getElementById("form-quantidade").value;

        if (!nome || !preco || !quantidade) {
            alert("Preencha todos os campos...");
            return;
        };

        fetch("http://10.92.199.65:8080/produtos/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, preco, quantidade }) // Já passa para JSON
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            alert("Produto criado com sucesso")
        })
        .catch((error) => console.log(error));

    });

});