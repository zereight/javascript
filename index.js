const boardElement = document.querySelector(".board");
const scoreElement = document.querySelector("#score");

const init = () => {
    scoreElement.innerHTML = 0;
    boardElement.style = `
        border: 1px solid black;
        width: 100%;
        height: 80vh;
    `;
}

init();