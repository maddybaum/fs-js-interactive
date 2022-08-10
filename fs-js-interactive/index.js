let message = document.querySelector("#message");
document.querySelector("form").addEventListener('submit', addMovie);


function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector("input");

    let movie = document.createElement("li");

    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    document.querySelector("ul").appendChild(movie);
    document.addEventListener("click", crossOffMovie);

    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    
    inputField.value = ''

}
function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!";
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")

    if(event.target.classList.contains("checked") === true){
        message.textContent = "Movie watched!"
    } else{
        message.textContent = "Movie added back!"
    }
}