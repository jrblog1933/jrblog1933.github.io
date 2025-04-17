    
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

default export function botonBack(root){
  root.innerHTML = `<section class="mt-5">
      <button class="back btn btn-info text-white rounded-0"> <i class="fas fa-arrow-left color-1"></i> Volver</button>
    </section>`;
}

