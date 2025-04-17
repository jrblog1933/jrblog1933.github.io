
addEventListener("DOMContentLoaded",(e)=>{
    //carga lazy en imagenes: acelerador de carga de página
     Array.from(document.querySelectorAll("img"))
    .forEach(img => img.loading = "lazy");
    
     
    //variables 
      //items de relatos en el nav
    const navbarLi = document.querySelectorAll(".re-item");
      //boton hamburguesa
    const hamb = document.querySelector(".btn-menu");
    

      
    //delegacion de evento click
    addEventListener("click",(e)=>{
     
      
      if(e.target.matches(".poema-boton")){
        location.href ="/html/poemas.html";
      }

      
      Array.from(navbarLi).forEach((item) =>{
        if(e.target === item){
          hamb.click();
        }
        
      });
      
    });// fin eventHandlers click

      
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

        });//fin del script de animación


        //insertar contenido dinámico en la sección de discursos de html
        if(document.querySelector(".discursos-container")){
          const ul = document.querySelector(".discursos-container");
          const lista = ["Fedecene","Dia de los Educadores","Soc. Pro-Arismedi","Santa Rita","Colegios de Cont. Públicos",
          "Inst. Juan Bautista Arismendi","Sociedad Pro-Arismendi"];

          const fragment = new DocumentFragment();

          lista.forEach(item =>{
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.classList.add("dropdown-item");
            a.href = "/html/discursos.html#indice";
            a.innerHTML = `<i class="fas fa-chevron-right pe-4"></i> ${item}`;

            li.appendChild(a);
            fragment.appendChild(li);

          });

          ul.appendChild(fragment);
        }

              
           
});//fin del DOMContentLoaded




//funcion para subir al principio de la pagina. 
function scrollToTop() {
    window.scrollTo({
         top: 0,
            behavior: 'smooth'
        });
    }








