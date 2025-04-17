const poema = document.querySelector('.poema-move');



    const observerPoema= new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('poema-card-move');
              
                    observerPoema.unobserve(entrada.target); // Para que solo se observe una vez
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.8 // Porcentaje de visibilidad para activar el efecto
        });

      
          observerPoema.observe(poema);
        