export class Card extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({mode:"open"});	
		
	}

	static get observedAttributes(){
		return ["titulo", "descripcion","img","url","display","noBtn"];
	}

	attributeChangedCallback(nombre,viejoValor,nuevoValor){
		if(viejoValor !== nuevoValor) this._render();
	}

	connectedCallback(){
		this._render();
	}

	disconnectedCallback(){
		console.log("componente eliminado");
	}

	_render(){
		const img = this.getAttribute("img") || "/recursos/amor.jpg";
		const titulo = this.getAttribute("titulo") || "título";
		const descripcion = this.getAttribute("descripcion") || "descripcion";
		const url = this.getAttribute("url") || "/html/discursos.html";
		const display = this.getAttribute("display") || "";
		const noBtn = this.getAttribute("noBtn") || ""; 

		this.shadowRoot.innerHTML = 
		`
		<style>
		
		h2{
			text-align:center;
		}
		.cards-container{
					
			background-image:url("${img}");
		   	background-repeat: no-repeat;
			background-position: center;
		 	background-size: 105% 105%;
		  	transition: all .3s ease-in; 
		  	cursor: pointer;
		  	min-height: 400px;
					   				   	
		}

				.cards-container:hover{
						background-size: 100% 100%; 
					}

				.card{
					background: #0008;
					min-height: 400px;
					padding: 1.5rem;
					
				}


				.card-elements{
					display: flex;
					min-height: 400px;
					flex-direction: column;
					
					
					color: #fff;
					transition: transform .3s ease-in;
					width:100%;
					
				}

				.card-elements:hover{
					transform: translateY(-6px);
				}


				.card-elements-pa p{
					font-size: 1rem;
				}

				.card-elements h2{
					flex: 2;
					align-self: center;
					
					display: flex;
					justify-content: center;
					align-items: flex-end;
					padding-bottom: 1.4rem;

					font-weight: 700;
					font-family: Arial;
				}

				.fs-6{
					font-size: .7rem !important;
				}
				
				
				.btn {
				    display: inline-block;
				    font-weight: 700;
				    line-height: 1.5;
				    color: #fff;
				    text-align: center;
				    text-decoration: none;
				    vertical-align: middle;
				    cursor: pointer;
				    -webkit-user-select: none;
				    -moz-user-select: none;
				    user-select: none;
				    border: 1px solid #25cff2;
				    padding: .375rem .75rem;
				    font-size: 1rem;
				    border-radius: .25rem;
				    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
				}
				.btn-info {
    				color: #fff;
    				background-color: #0dcaf0;
    				border-color: #0dcaf0;
				}

				.btn-info:hover {
 					   
    				background-color: #31d2f2;
 					
					color:#000;
				}

				.no-btn{
					display: none;
				}
				.placeholder-vacio{
					opacity: 0;
				}



				 @media (max-width: 575.98px){  
          			.placeholder-vacio {
            			display: none;
          			}        

         		}

         		.flex{
         			display:inline-flex;
         			justify-content:center;
         			align-items:center;
         		}
				</style>

				<div class="cards-container ${display}">
                <div class="card">
                  <div class="card-elements">
                    <h2>${titulo}</h2>
                    <div class="card-elements-pa">
                      <p>
                        ${descripcion}
                      </p>

	                      <a href = '${url}'  class="btn-info btn fs-6 ${noBtn} flex">
	                      
	                      	<span>Leer décimas</span>
	                      
	                      	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" style="color:#f4d9bb;" viewBox="0 0 16 16">
	 						 <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
							</svg>
	                       
	                      
	                      </a>  
                      
                    </div>  
                       
                  
                  </div>
                </div>
            </div>
				
		`



		;
		
		
	}

}

customElements.define("card-item",Card);