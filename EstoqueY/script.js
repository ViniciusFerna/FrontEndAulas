const produtos = [  
    {
        id: 12,
        name: "Yeezy slide",
        price: 449.99,
        imageUrl: "/assets/chinelo.jpg",
        category: "Unissex"
    },
    {
        id: 13,
        name: "Yezzy 350 yeezReel",
        price: 1099.99,
        imageUrl: "/assets/tenis7.jpg",
        category: "Masculino"
    },
    {
        id: 14,
        name: "Yezzy 350 Steel Grey",
        price: 1199.99,
        imageUrl: "/assets/tenis6.jpg",
        category: "Masculino"
    },
    {
        id: 15,
        name: "Yezzy 350 Slate",
        price: 1199.99,
        imageUrl: "/assets/tenis5.jpg",
        category: "Masculino"
    },
    {
        id: 16,
        name: "Yezzy 350 Black/Red",
        price: 1899.99,
        imageUrl: "/assets/tenis4.jpg",
        category: "Masculino"
    },
    {
        id: 17,
        name: "Yezzy 350 Beluga 2.0",
        price: 1199.99,
        imageUrl: "/assets/tenis3.jpg",
        category: "Masculino"
    },
    {
        id: 18,
        name: "Yezzy 350 True Form",
        price: 2099.99,
        imageUrl: "/assets/tenis2.jpg",
        category: "Masculino"
    },
    {
        id: 19,
        name: "Yezzy 350 Bred",
        price: 1699.99,
        imageUrl: "/assets/tenis1.jpg",
        category: "Masculino"
    }
]

const productContainer = document.querySelector(".product-container")
const openSidebarButton = document.getElementById("shopping-bag")
const closeSidebarButton = document.getElementById("closeButton")
const carrinhoContainer = document.getElementById("carrinho-container")

function carregarProdutos() {
    produtos.forEach((produto) => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")

        productCard.innerHTML = 
        `
        <img src="${produto.imageUrl}" alt="">
                <div class="product-info">
                    <div>
                        <div>
                            <span>${produto.category}</span>
                            <h3>${produto.name}</h3>
                            <span>R$ ${produto.price.toFixed(2)}</span>
                        </div>
                        <button onclick="addToCart(${produto.id})">
                            <img src="/assets/icons/shopping-bag-white.svg" alt="">
                        </button>
                    </div>
                </div>
        `

        productContainer.appendChild(productCard);
    })
}

function addToCart(produtoId) {
    // Buscar o produto na lista de produtos pelo id que e passado como parametro
    const produto = produtos.find((p) => p.id == produtoId)

    // Verifica se encontrou
    if(produto) {
        // Pega o carrinho que foi salvo antes, caso não tenha nada ele seta uma lista vazia(nova)
        const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || []

        let productIndex = carrinho.findIndex((p) => p.id == produtoId)

        if(productIndex > -1) {
            carrinho[productIndex].quantity += 1
        } else {
            carrinho.push({
                name: produto.name,
                price: produto.price,
                imageUrl: produto.imageUrl,
                category: produto.category,
                quantity: 1,
                id: produto.id,
            })
        }

        // Salva novamente o carrinho com o produto adicionado
        sessionStorage.setItem("carrinho", JSON.stringify(carrinho) )

    }
    atualizarContador()
}

function atualizarContador() {
    const itemCount = document.querySelector(".product-count")

    const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || []
    const qtd = carrinho.length

    itemCount.textContent = qtd
    itemCount.style.display = qtd > 0 ? "flex" : "none"

    

    atualizarItensCarrinho()

}

function atualizarItensCarrinho() {
    const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || []

    if(carrinho.length > 0) {
        carrinhoContainer.innerHTML = carrinho.map((item) => `
        <div class="product-card-mini">
                <div class="product-card-mini-container">
                    <img src=${item.imageUrl} alt="">

                    <div class="product-info">
                        <h4>${item.name}</h4>
                        <p class="tag">${item.category}</p>

                        <div class="action-container">
                            <p>Qtd. ${item.quantity}</p>
                            <button id="remove-button" onclick="removeItem(${item.id})"><img src="assets/icons/trash.svg" alt="">Remover</button>
                        </div>
                        <h5 id="item-prices">R$</h5>
                    </div>
                </div>
            </div>
    `)
    } else {
        carrinhoContainer.innerHTML = `<p class="noItemText"> Não há itens no carrinho</p>`
    }

    let total = 0

    for(let i = 0; i < carrinho.length; i++) {
        total = total + carrinho[i].price * carrinho[i].quantity
    }

    const totalContainer = document.getElementById("total-carrinho")

    totalContainer.innerText = `R$ ${total.toFixed(2)}`

}

function removeItem(itemId) {
    let carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || []

    carrinho = carrinho.filter((item) => item.id != itemId)

    sessionStorage.setItem("carrinho", JSON.stringify(carrinho))

    atualizarContador()
} 

function toggleSideBar() {
    const sidebar = document.getElementById("sidebar")

    // o toggle se tiver ele tira e se não tiver ele põe
    sidebar.classList.toggle("open")
}

openSidebarButton.addEventListener("click", toggleSideBar)
closeSidebarButton.addEventListener("click", toggleSideBar)

// FUnção que é chamada assim que a pagina carregar
window.onload = () => {
    carregarProdutos()
    atualizarContador()
}
