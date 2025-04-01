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
    const duracionAnimacion = 1000; // Duración en milisegundos

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

*/




//================================================



//variables para manejar el dropdown del nav
//===============================================




//=================END NAV EVENTHANDLERS===========


async function cargarPlantilla(nombre, id){
        
        //estructura para manejar errores al cargar plantillas
        try{
            const res = await fetch(`../templates/${nombre}.html`);
            const plantilla = await res.text(); //transforma a texto
            
            const elemento = document.getElementById(id)
            .innerHTML = plantilla; //inyecta el texto en el elemento de la página            

            console.log("aqui estoy");



            const decimas = document.querySelector(".decimas");
            decimas.onclick = function(){
                decimasContainer.classList.toggle("de-active")
            }



        }catch(error){ // en caso de error
            console.error(`Error al cargar la plantilla ${nombre}`,error); //advertir al usuario

        }
    }



//manejador de evento al cargar la pagina
addEventListener("DOMContentLoaded",()=>{
    

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
        
        
        
    
});






