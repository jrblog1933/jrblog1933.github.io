/*let carruselLista = document.querySelector('.carrusel-lista');
let carruselElementos = document.querySelectorAll('.carrusel-elemento');
let elementoAncho = carruselElementos[0].offsetWidth + 10;
let posicionActual = 0;
let animando = false; // Bandera para evitar animaciones simultáneas

function moverCarrusel(direccion) {
    if (animando) return; // Si ya se está animando, no hacer nada
    animando = true;

    let posicionInicio = carruselLista.scrollLeft;
    let posicionFinal;

    if (direccion === -1) {
        posicionFinal = Math.max(posicionActual - elementoAncho, 0);
    } else if (direccion === 1) {
        posicionFinal = Math.min(posicionActual + elementoAncho, elementoAncho * (carruselElementos.length - 1));
    }

    posicionActual = posicionFinal; // Actualiza la posición actual inmediatamente

    let tiempoInicio = null;
    const duracionAnimacion = 500; // Duración en milisegundos

    function animarScroll(tiempoActual) {
        if (!tiempoInicio) tiempoInicio = tiempoActual;
        const tiempoTranscurrido = tiempoActual - tiempoInicio;
        let progreso = Math.min(tiempoTranscurrido / duracionAnimacion, 1); // Asegura que el progreso no pase de 1

        // Easing function (easeOutQuad - puedes probar otras)
        progreso = progreso * (2 - progreso); // Ease Out Quad

        carruselLista.scrollLeft = posicionInicio + (posicionFinal - posicionInicio) * progreso;

        if (tiempoTranscurrido < duracionAnimacion) {
            requestAnimationFrame(animarScroll); // Continúa la animación en el próximo frame
        } else {
            animando = false; // Finaliza la animación
        }
    }

    requestAnimationFrame(animarScroll);
}


let touchStartX = 0;
let touchEndX = 0;

carruselLista.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carruselLista.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    manejarSwipe();
});

function manejarSwipe() {
    const swipeThreshold = 50; // Umbral de distancia para considerar un swipe
    const swipeDistancia = touchStartX - touchEndX;

    if (swipeDistancia > swipeThreshold) {
        // Swipe hacia la izquierda (siguiente)
        moverCarrusel(1);
    } else if (swipeDistancia < -swipeThreshold) {
        // Swipe hacia la derecha (anterior)
        moverCarrusel(-1);
    }
    // Si el deslizamiento no supera el umbral, no se hace nada (o podrías añadir un comportamiento de "resorte" de vuelta a la posición original si lo deseas)
}

*/


// variables de efecto loading...
const loader = document.querySelector(".loader");
const logoLoader = document.querySelector(".logo-img");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
//================================================



//variables para manejar el dropdown del nav
//===============================================


//manejo de eventos para el dropdown del nav desktop
    const drop = document.querySelector(".drop");
    const down = document.querySelector(".down");

//=================END NAV EVENTHANDLERS===========


async function cargarPlantilla(nombre, id){
        
        //estructura para manejar errores al cargar plantillas
        try{
            const res = await fetch(`../templates/${nombre}.html`);
            const plantilla = await res.text(); //transforma a texto
            
            const elemento = document.getElementById(id)
            .innerHTML = plantilla; //inyecta el texto en el elemento de la página            

            console.log("aqui estoy");

            const drop = document.querySelector(".drop");
            const down = document.querySelector(".down");

            const decimas = document.querySelector(".decimas");
            const decimasContainer = document.querySelector(".decimas-container");
            
            drop.onmouseover = function(){
              down.classList.add("show");     
            }

            drop.onmouseleave = function(){
                   
                down.classList.remove("show");
            }


            decimas.onclick = function(){
                decimasContainer.classList.toggle("de-active")
            }



        }catch(error){ // en caso de error
            console.error(`Error al cargar la plantilla ${nombre}`,error); //advertir al usuario

        }
    }



//manejador de evento al cargar la pagina
addEventListener("DOMContentLoaded",()=>{
    

    /*//efecto loading..
    setTimeout(()=>{
      l1.setAttribute("style","opacity:1")
    },500)

    setTimeout(()=>{

      l2.setAttribute("style","opacity:1")

    },1000)

    setTimeout(()=>{

      l3.setAttribute("style","opacity:1")
      logoLoader.classList.add("move");

    },1500)

    setTimeout(()=>{
      loader.setAttribute("style","display:none");
    },2500)
*/
    //=================END EFECTO LOADING============




// motor de plantillas diseñado para automatizar la carga de parte de las páginas

    cargarPlantilla("header","header");
    cargarPlantilla("footer","footer");

    //al cargar la pagina se inyecta el html del header y footer
    


//efecto animado para las secciones:
   const seccionesObservables = document.querySelectorAll('.oculto');

        const observer = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('mostrar');
                    entrada.target.classList.remove('oculto');
                    observer.unobserve(entrada.target); // Para que solo se observe una vez
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.2 // Porcentaje de visibilidad para activar el efecto
        });

        seccionesObservables.forEach(seccion => {
            observer.observe(seccion);
        });
        
        //boton de subir al principio

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        
        const poema = document.querySelector('.poema-move');



        const observerPoema= new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('poema-card-move');
              
                    observer.unobserve(entrada.target); // Para que solo se observe una vez
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.8 // Porcentaje de visibilidad para activar el efecto
        });

      
          observerPoema.observe(poema);
        
    
});






