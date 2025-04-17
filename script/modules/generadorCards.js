
// Clase que genera cards para la seccion de cards.

class Card{
	#parrafo = "descripcion";
	#titulo = "titulo";
	#img = "";
	#imgRoot = `/recursos/${this.#img}`;
	#html = "archivo.html";

	constructor(root){
		this.root = root;
	}

	setParrafo(p){
		this.#parrafo = p;
	}
	setTitulo(h4){
		this.#titulo = h4;
	}
	setImg(img){
		this.#img = img;
	}

	setHtml(html){
		this.#html = html;
	}

	load(){

		//root debe ser un elemento html
		if(typeof(this.root) === 'object'){

			const card = ` <div class="cards-decimas-historia" style="background-image: url('${this.#imgRoot}')">
                <div class="card p-4">

                  <div class="card-elements">
                    <h4 class="">${this.#titulo}</h4>
                    <div class="card-elements-pa">
                      <p>
                     	${this.#parrafo}
                      </p>
                      <a href="${this.#html}" class="btn-card btn bg-color-3 text-white fw-bold fs-6">
                      Leer décimas <i class="fas fa-play color-1"></i>
                      </a>  
                    </div>  
                       
                  
                  </div>
                </div>
            </div>`;
			this.root.appendChild(card);

		}else{
			console.error("root no es un elemento html. debe ser un HTMLElement");
		}

	}


}

