let listaDeCompras = [];

function adicionarItem() {
    let inputItem = document.getElementById("item");
    let inputQtd = document.getElementById("quantidade");

    let item = {
        id: Date.now(),
        nome: inputItem.value,
        quantidade: inputQtd.value,
        comprado: false
    };
    
    listaDeCompras.push(item);
    atualizarInterface();
    
}


function limparLista() {
    listaDeCompras = [];
    atualizarInterface();
}


function atualizarInterface() {
    let lista = document.getElementById("lista")
    lista.innerHTML = "";
    
    for (let i = 0; i < listaDeCompras.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = `
                <input type="checkbox" name="" id="" onchange="toggleItem(${listaDeCompras[i].id})">
                <p>${listaDeCompras[i].nome} X ${listaDeCompras[i].quantidade}</p>
                <button onclick="excluirItem(${listaDeCompras[i].id})">X</button>`
        lista.append(item);
    };
}

function excluirItem(id) {
    listaDeCompras = listaDeCompras.filter((item) => item.id !== id);
    atualizarInterface();
};

function limparComprados() {
    listaDeCompras = listaDeCompras.filter((item) => item.comprado !== true);
    atualizarInterface();   
};

function toggleItem(id) {
    const item = listaDeCompras.find((item) => item.id === id);
    item.comprado = !item.comprado;
}