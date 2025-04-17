async function cargarPlantilla(nombre, id){
        
        //estructura para manejar errores al cargar plantillas
        try{
            const res = await fetch(`/templates/${nombre}.html`);
            const plantilla = await res.text(); //transforma a texto
            
            const elemento = document.getElementById(id)
            .innerHTML = plantilla; //inyecta el texto en el elemento de la página

    
        }catch(error){ // en caso de error
            console.error(`Error al cargar la plantilla ${nombre}`,error); //advertir al usuario

        }
    }

document.addEventListener("DOMContentLoaded",()=>{
    cargarPlantilla("header","header");   
    cargarPlantilla("footer","footer");
    

    if(document.getElementById("carrusel")){
        cargarPlantilla("carrusel","carrusel")
    }

    if(document.getElementById("comentarios")){
        cargarPlantilla("comentarios","comentarios")
    }

    if(document.getElementById("boton")){
        cargarPlantilla("boton","boton");
        const backBtn = document.querySelector(".back");
    
        
    }



    id = "." + location.pathname.split("/").pop().split(".")[0];
    
      
});

function linkActive(id){
    document.querySelector(id).classList.add("active-link");
}