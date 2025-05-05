const API_URL = "http://10.92.199.65:3000/users"

const userList = document.getElementById("userList")
const inputName = document.getElementById("name")
const inputEmail = document.getElementById("email")
const userForm = document.getElementById("userForm")

document.addEventListener("DOMContentLoaded", fetchUsers)

userForm.addEventListener("submit", addUser)

function fetchUsers() {

    fetch(API_URL)
    .then((res) => res.json())
    .then(users => displayUsers(users))
}

function displayUsers(users) {

    userList.innerHTML = ""

    users.forEach((user) => {
        const userDiv = document.createElement("div")
        userDiv.innerHTML = `
            <div>
            <strong>Nome:</strong> ${user.name} <br>
            <strong>Email:</strong> ${user.email} <br>
            <button>Delete</button>
            </div>
        `

        userList.append(userDiv)
    })

}

function addUser(event) {
    event.preventDefault()
    
    const userData = {
        name: inputName.value,
        email: inputEmail.value
    }

    fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)
    }).then((response) => {
        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }

        response.json()
    }).then((data) => {
        fetchUsers()

        alert("Usuario criado com sucesso!")
    })
}