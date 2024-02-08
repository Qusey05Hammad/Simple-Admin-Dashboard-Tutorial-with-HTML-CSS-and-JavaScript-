const nav = document.getElementById('nav');
const Btnopen = document.getElementById('open');
const Btnclose = document.getElementById('close');
const container = document.getElementById('container')

Btnopen.addEventListener('click',()=>{
    nav.style.display = "flex"
})

Btnclose.addEventListener('click',()=>{
    nav.style.display = "none"
})