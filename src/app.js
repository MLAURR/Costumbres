
const botonHamburguesa=document.querySelector(".contenedor--botonhamburguesa");
const menu=document.querySelector(".navegacion--links--contenedor");
botonHamburguesa.addEventListener("click",function(){
    if(!menu.classList.contains("menu")){
        menu.className+=" menu"; 
        console.log(menu);
    }
    else{
        menu.classList.remove("menu");
    }
    
})
