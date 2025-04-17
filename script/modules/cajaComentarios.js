    
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

default export function seccionComentarios(root){
  root.innerHTML = `<section class="mb-5 row mt-5">
      <article class="col-sm-12 col-md-6">
        
      <form action="/index.html">
        <div class="form-titulo mb-2">
          <h2 class="fs-6">Deja un comentario</h2>
          <small><p>Tu dirección de correo electrónico no será publicado.   <br>
          Los campos obligatorios estan marcados con *
          </p></small>
        </div>

        <div>
          <textarea name="comentario" class="form-control"   required rows="6">Deje un comentario aquí...
          </textarea>
          <br>
          
          <div class="">
            <input class="form-control col-sm-12 col-md-6" type="text" placeholder="Nombre*">
            <br>
            <input type="email" class="form-control" placeholder="E-mail*">
          </div>
        </div>
        
        <div>
          <br>
        <button class="btn btn-primary bg-color-1 border border-none">Publicar comentario</button>
        </div>
        
      </form>
      </article>
    </section>`;
}

