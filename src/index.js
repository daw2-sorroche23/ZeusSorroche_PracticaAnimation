
const header = document.querySelector('header')
const carta = document.querySelector('#carta')

header.addEventListener("click",(evento)=>{
    if (!event.target.closest('.icono')) {
        // Si no se ha echo click en el icono, se agregar la clase "subirCarta"
        if (!carta.classList.contains("subirCarta")) {
            carta.style.removeProperty("bottom");
            carta.classList.add("subirCarta");
        }
    } else {
        // Si el clic se hizo en el icono, eliminar las clases subircarta y voltear
        carta.classList.remove("subirCarta");
        //Añado esto para que haga la animacion de ir abajo
        carta.style.bottom = "-" + carta.offsetHeight + "px";
        carta.classList.remove("volteada");
    }
})

carta.addEventListener("click",()=>{
    carta.classList.add('volteada')
})

const icono = document.querySelector('.trasera')



