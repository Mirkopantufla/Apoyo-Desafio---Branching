const title = document.querySelector('h1')
const button = document.getElementsByClassName("btn-title")

let randomColor;

const generateRandomColor = () => {

    let hue = Math.random() * 360;
    let saturation = Math.random() * 100;
    let lightness = Math.random() * 100;

    return randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`

}

button[0].addEventListener('click', () => title.setAttribute("style", `color:${generateRandomColor()}`))