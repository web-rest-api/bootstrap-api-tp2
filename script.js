/* GLOBAL VARIABLES */
const BASE_URL = "https://basic-rest-flask.martinpedraza.repl.co"

const url = BASE_URL + "/api/books"
fetch(url)
	.then((response) => response.json())
	.then((json) => console.log(json))
