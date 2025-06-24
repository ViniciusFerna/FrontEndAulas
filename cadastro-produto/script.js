const productList = document.getElementById("productList")
const formProduct = document.getElementById("productForm")
const productNameInput = document.getElementById("productName")
const productPriceInput = document.getElementById("productPrice")
const productCategoryInput = document.getElementById("productCategory")

let produtoId = null

const API_URL = "http://10.92.199.65:3000/api/products"

async function getProdutos() { // A função async é uma operacao que pode demorar um pouco mais para acontecer
    try {
        const response = await fetch(API_URL)
        const produtos = await response.json()
        displayProduct(produtos)
    } catch (error) {
        console.log("Erro ao buscar produto", error)
    }
}

formProduct.addEventListener("submit", addProduct)

async function addProduct(event) {
    event.preventDefault()
    const price = parseFloat(productPriceInput.value)

    if(price <= 0) {
        alert("Por favor insira um valor válido (maior que 0)")
        return // Early return -> encerra a função e não executa o que está abaixo
    }

    const produto = {
        name: productNameInput.value,
        price: price,
        category: productCategoryInput.value
    } 

    try {
        if(produtoId != null) {
            await fetch(`${API_URL}/${produtoId}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(produto)
            })
            produtoId = null
            document.getElementById("btn-save").innerText = "Enviar"


        } else {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(produto)
            }) 
        }
        
       
        formProduct.reset()
       getProdutos()
    } catch (error) {
        console.log("Erro ao criar produto", error)
    }
}

document.addEventListener("DOMContentLoaded", getProdutos())

function displayProduct(products) {
    productList.innerHTML = ""

    products.forEach(produto => {
        const row = document.createElement("tr")

        row.innerHTML = `
            <td>${produto.name}</td>
            <td>${produto.price}</td>
            <td>${produto.category}</td>
            <td>
                <button class="btn-excluir" onclick="deleteProduct('${produto.id}')">Excluir</button>
                <button class="btn-edit" onclick='editForm(${JSON.stringify(produto)})'>Editar</button>
            </td>
        `
        productList.appendChild(row)
    })
}

async function deleteProduct(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })

        getProdutos()
    } catch (error) {
        console.log("Erro ao excluir:", error)``
    }

}

function editForm(produto) {
    productNameInput.value = produto.name
    productPriceInput.value = produto.price
    productCategoryInput.value = produto.category

    document.getElementById("btn-save").innerText = "Atualizar"
    produtoId = produto.id
}
