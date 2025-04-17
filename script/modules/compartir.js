    
// Código estático para la secciones de comentarios

/* ACLARATORIA DEL PROGRAMADOR
  De acuerdo a las buenas prácticas, esta forma de inserción de html 
  impacta negativamente en el rendimiento, por cuanto el navegador tendrá que trabajar
  un extra para dibujar el arbol del DOM con este nuevo contenido.
  Por tal motivo, aclaro que por tratarse de código estático y de mantener
  el código general [versión "vanilla" minimalista] lo más limpio posible, 
  he preferido obviar el uso de document.createElement(), agregar los nodos mediante el 
  método elementHTML.appendChild(), además de otras técnicas que representan 
  una mejor opción para dibujar el contenido en el arbol del DOM. 
  En caso de necesitar dinamismo, como el que se produce con la interacción del usuario,
   que implican renderizado del DOM, usaré los métodos nativos de Javascript 
   para ello -> DocumentFragment, appendchild, classList, createElement, entre otros.

*/

default export function compartirLinks(root,text){
  root.innerHTML = `<section>
      <h2 class="fs-6 fw-bold text-center">Comparte ${text}</h2>
      <div class="d-flex justify-content-center align-items-center gap-3">
        <i class="fab fa-whatsapp"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        
      </div>
    </section>`;
}

