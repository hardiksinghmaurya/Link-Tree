const navlist=document.querySelector("nav")
const cancel=document.querySelector(".cancel-btn")
const menu=document.querySelector(".menu-btn")

menu.onclick=()=>{
    navlist.classList.toggle("open")
}

cancel.onclick=()=>{
    navlist.classList.toggle("open")
}

