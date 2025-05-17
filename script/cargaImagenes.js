"use strict";

//archivo que va despues de modal.js
        
//esta clase no cumple con los principios SOLID.
//cumple un fin especifico de encapsular logica

const $ = query => document.querySelector(query); //atomización del selector de elementos

class CreateElements{
  constructor(contenedor){ //recibe una lista de 3 nombres de contenedores grilla para las imagenes
    this.contenedor = contenedor;
    this.modal = $(".modal");
    this.modalImg = $(".modal-img");
    this.modalTitulo = $(".modal-titulo");
    this.modalDescripcion = $(".modal-descripcion");
    // para evitar el exceso de contenido, v.1.2 => hacer un json para la información
    this.informacion = {
      reconocimientos: {
        titulo: ["Credencial como Contador Público <br> <small class= 'color-1'> 02 de agosto de 1975</small>"
        ,"Reconocimiento como Orador de Órden  <br> <small class= 'color-1'> 12 de marzo de 2001</small>",
        "Declaración de Hijo Ilustre del municipio Antolín del Campo <br> <small class= 'color-1'> 19 de marzo de 1997 </small>",
        " Reconocimiento como Orador de Orden <br> <small class= 'color-1'> 23 de agosto de 1997</small>",
        "Placa otorgada como Padrino de Promoción <br> <small class= 'color-1'> 22 de septiembre de 1973 </small>",
        "Reconocimiento por mi colaboración con la Organización Deportiva Arismendi de La Vecidad <br> <small class= 'color-1'> 20 de abril de 1985 </small>",
        "Mención Honorífica 'Premier' <br> <small class= 'color-1'> 1982 </small>",
        "Diploma otorgado por el Instituto Juan Bautista Arismendi  <br> <small class= 'color-1'> 15 de marzo de 1979</small>",
        "Declaración de 'Hijo Adoptivo' del municipio Francisco Esteban Gómez <br> <small class= 'color-1'> 19 de marzo de 1996</small>"
       ,"","","","","",""
        ],
        descripcion: [
        "Otorgado por el Colegio de Contadores Públicos del estado Nueva Esparta.",
        "Me fue concedida en la plaza Bolivar de Porlamar en sesión solemne de la alcaldía del municipio Mariño con ocasión al <b> día del profesor jubilado </b>. <br><br> <a href='/html/discursos-educador.html' class='rounded-0 btn btn-primary bg-color-1 border border-white fw-bold'>Leer Discurso</a>",
        "La alcaldía de este municipio en sesión solemne conmemoró mis labores culturales y académicas  realizadas en la región. Como ejemplo de aquellas labores, puedo mencionar  que fui dirigente de la Sociedad Pro Arismendi, institución socio cultural del municipio, destaco la creación de una escuela de contabilidad gratuita en la que en dos años egresaban los estudiantes como auxiliares de contabilidad, muchos de ellos hoy día contadores públicos de renombre. Además de estas actividades culturales, el reconocimiento también fue extensivo a mi labor como académico. ",
        "Entregada en mis manos por la junta directiva de la sociedad Pro Arismendi, seccional del estado Zulia. El acto solemne se celebró en el <b>club 'TAMARE' </b> de ciudad Ojeda en fecha 23 de agosto de 1997. <br> Recuerdo que en esa disertación se habló sobre la Margarita de antes/después del Puerto Libre. <br> Se encontraban muchos margariteños acompañados de sus hijos nacidos en el estado Zulia. <br><br> <a href= '/html/discursos-tres.html'  class ='btn btn-primary bg-color-1 border border-white rounded-0 fw-bold'> Leer discurso </a>",
        "Este reconocimiento es especial para mi, es testimonio de la primera promoción de bachiller mención contabilidad de la <b>'Escuela Técnica Industrial'</b> ubicada en la ciudad de Juangriego.",
        "Fuí participe de muchas actividades llevadas a cabo por esta organización, lo que conllevó a este reconocimiento.",
        "Reconocimiento que me fue otorgado por <b>CONFEPRENSA</b> por destacar como profesional de la contaduría en esa época.",
        "Este diploma es fiel testimonio de mi entrega total a esa institución como docente por más de 25 años dictando la mayoría de las asignaturas de contabilidad.",
        "En este acto me declararon hijo ilustre de este municipio en sesión solemne llevada a cabo por la alcaldía del municipio con ocasión de la celebración del santo patrono de La Vecindad, <b>San Jóse</b>"
        ,"","","","","",""
        ]
      },
      actosPublicos:{
        titulo: ["","","","","","","","",""],
        descripcion: ["","","","","","","","",""]
      },

      otros:{
        titulo: ["","","","","","","","","","",""],
        descripcion: ["","","","","","","","","","",""]
      }
    }
  
  }

  createAndInsertElements(){
    const fragmento = new DocumentFragment(); //buffer de imagenes
          
    
          //llenar el contenedor de elementos
    const archivos = [[15,"reconocimientos"],[9,"actosPublicos"],[11,"otros"]];
    

    for(let j = 0; j < 3; j++){// doble for, eliminar en refactoring

        
    for(let i = 0; i < archivos[j][0]; i++){
            //crear elementos
            //contenedor de imagenes
      const divContenedor = document.createElement("div");
            divContenedor.setAttribute("class","galeria-item");
            

            //imagenes
            const figure = document.createElement("figure");
            figure.setAttribute("class","d-flex justify-content-center align-items-center");
            const img = document.createElement("img");
            figure.setAttribute("style","height:100%;");
            img.src = `/GALERIA/${archivos[j][1]}/${i}.webp`;
            img.loading = "lazy";
            img.classList.add("img-fluid"); 
            img.classList.add("shadow"); 

            //ordenación de arbol de elementos
            
            figure.appendChild(img);
            divContenedor.appendChild(figure);

            divContenedor.addEventListener("click",(e)=>{
              this.modal.classList.add("show-modal");
              this.modal.scrollTop = 0;
              this.modalImg.src = img.src;
              this.modalTitulo.innerHTML= this.informacion[archivos[j][1]].titulo[i];
              this.modalDescripcion.innerHTML = this.informacion[archivos[j][1]].descripcion[i];

        });

            fragmento.appendChild(divContenedor);

          }//primer for

          //insertar en el DOM todas las imágenes

          $("."+this.contenedor[j]).appendChild(fragmento);    
    }//segundo for



  }//end function

}//end clase

        


document.addEventListener("DOMContentLoaded",()=>{

  const cerrarModal = document.querySelector(".volver");
  
  cerrarModal.addEventListener("click",()=>{
    $(".modal").classList.remove("show-modal");
  })
  const contenedores = ["reconocimientos","actosPublicos","otros"];
          
  //cargar imagenes
  const cargarImages = new CreateElements(contenedores);

  cargarImages.createAndInsertElements();


  //funcion para mejorar la UX

    document.addEventListener("click",(e)=>{ //delegacion de eventos
      if(e.target === $(".scrolleable") || e.target === $(".scrolleable2")){
        $(".elemento-scrollback").scrollIntoView({behavior:"smooth"});
      }
    })  

  });


  
