let mueble = document.getElementById("mueble");
let button = document.getElementById("btn");
let circulo = document.getElementById("circulo")
let titulo = document.getElementById("title");
let subtitulo = document.getElementById("sub");

original.addEventListener('click', () => {
    mueble.src = "img/mueble.png";
    button.style.backgroundColor = "#585934";
    button.style.color = "#000";
    circulo.style.border = "60px solid #585934";
    titulo.style.color = "#585934";
    subtitulo.innerHTML = "Green Furniture";
})

naranja.addEventListener('click', () => {
    mueble.src = "img/mueble-naranja.png";
    button.style.backgroundColor = "rgb(255, 149, 0)";
    button.style.color = "#000";
    circulo.style.border = "60px solid rgb(255, 149, 0)";
    titulo.style.color = "rgb(255, 149, 0)";
    subtitulo.innerHTML = "Orange Furniture";
})

verde.addEventListener('click', () => {
    mueble.src = "img/mueble-verde.png";
    button.style.backgroundColor = "rgb(43, 90, 43)";
    button.style.color = "#000";
    circulo.style.border = "60px solid rgb(43, 90, 43)";
    titulo.style.color = "rgb(43, 90, 43)";
    subtitulo.innerHTML = "Green2 Furniture";
})

piel.addEventListener('click', () => {
    mueble.src = "img/mueble-piel.png";
    button.style.backgroundColor = "rgba(212, 198, 179, 0.971)";
    button.style.color = "#000";
    circulo.style.border = "60px solid rgba(212, 198, 179, 0.971)";
    titulo.style.color = "rgba(212, 198, 179, 0.971)";
    subtitulo.innerHTML = "Peach Furniture";
})

negro.addEventListener('click', () => {
    mueble.src = "img/mueble-negro.png";
    button.style.backgroundColor = "#000";
    button.style.color = "#fff";
    circulo.style.border = "60px solid #000";
    titulo.style.color = "#000";
    subtitulo.innerHTML = "Black Furniture";
})

