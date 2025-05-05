document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users/1"

    function fetchUserData() {
        fetch(apiUrl)
        .then((res) => res.json())
        .then(data => displayUser(data))
    }

    fetchUserData()

    function displayUser(user) {
        document.getElementById("userNameElement").innerText = user.name
        document.getElementById("userName").innerText = `@${user.username}`
        document.getElementById("emailContent").innerText = user.email
        document.getElementById("phoneContent").innerText = user.phone
        document.getElementById("siteContent").innerText = user.website
        document.getElementById("streetContent").innerText = user.address.street
        document.getElementById("cityZipContent").innerText = `${user.address.city}/${user.address.zipcode}`
    }

    const tabButtons = document.querySelectorAll(".tab-button")
    const tabContents = document.querySelectorAll(".tab-content")

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            tabButtons.forEach((btn) => btn.classList.remove("active"))
            tabContents.forEach((content) => content.classList.remove("active"))

           button.classList.add("active")
           const tabId = button.getAttribute("data-tab")
           document.getElementById(tabId).classList.add("active")
        })                          
    }) 
})

const themeToggleBtn = document.getElementById('theme-toggle')
const savedTheme = localStorage.getItem('theme')
 
if (savedTheme == 'dark') {
    document.documentElement.classList.add('dark-theme')
    themeToggleBtn.innerText = '☀️ Light mode';
}
 
 
 
themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark-theme');
 
    if (isDark) {
        themeToggleBtn.innerText = '🌙 Dark mode';
        document.documentElement.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark-theme');
        themeToggleBtn.innerText = '☀️ Light mode';
        localStorage.setItem('theme', 'dark');
    }
});