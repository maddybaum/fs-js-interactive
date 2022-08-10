//grab HTML element

const plusBtn = document.querySelector("#plus-btn");

const counterText = document.querySelector("#counter");

const resetBtn = document.querySelector("#reset-btn");

const minusBtn = document.querySelector("#minus-btn");

const themeBtns = document.querySelectorAll(".theme-buttons");
//write out callback functions

let count = 0;

function increase() {
    count++;
    console.log(count);
    counterText.textContent = count;
}

function reset(){
    count = 0;
    counterText.textContent = count;
}

function decrease(){
    count-=1;
    counterText.textContent = count;
}

function selectTheme(event) {
    console.log(event.target.textContent);
    let theme = event.target.textContent;
    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;
    
    const buttons = document.querySelectorAll("button");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme;
    }
}
//combine element and function 

plusBtn.addEventListener('click', increase);

resetBtn.addEventListener('click', reset);

minusBtn.addEventListener('click', decrease);

for(let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener("click", selectTheme)
}