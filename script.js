/* GLOBAL VARIABLES */
const BASE_URL = "https://basic-rest-flask.martinpedraza.repl.co"

const url = BASE_URL + "/api/books"
fetch(url)
	.then((response) => response.json())
	.then((livres) => {
		livres.forEach((livre) => {
			document.querySelector(".row").innerHTML += `
                <div class="col">
                    <article class="card">
                        <img src="${livre.imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${livre.title}</h5>
                           
                              <button data-bs-toggle="modal"
			                    data-bs-target="#bookModal" 
                                class="btn btn-dark edit">Edit</button>
                        </div>
                    </article>
                </div>
            `
			console.log(livre)
		})
	})
