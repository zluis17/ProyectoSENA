const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMennu = document.querySelectorAll(".enlace")

toggle.addEventListener("Click",()=>{
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("bx-menu")){
        iconoMenu.classList.replace("bx-menu", "bx-x")
    }else{
        iconoMenu.classList.replace("bx-x", "bx-menu")
        
    }
})

enlacesMennu.forEach(enlace=>{
    enlace.addEventListener("Click",()=>{
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("bx-menu", "bx-x")

    })
})