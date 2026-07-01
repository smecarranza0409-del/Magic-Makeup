// Mostrar y ocultar información

function mostrar(boton){

    const info = boton.nextElementSibling;

    info.classList.toggle("activo");

}


// Carrusel automático

let indice = 0;

const slides = document.querySelectorAll(".slide");

function cambiarSlide(){

    slides[indice].classList.remove("active");

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    slides[indice].classList.add("active");

}

setInterval(cambiarSlide,3000);