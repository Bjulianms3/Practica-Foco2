// Se ejecuta al cargar la pagina completa
window.addEventListener('load', function(){
    // Llamada a la funcion foco()
    // Observe como puede estar la declaracion abajo de la llamada
    foco();
});

function foco() {
    document.querySelector('body').classList.add('oscuridad');

    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    const anio = new Date().getFullYear();
    titulo.innerText = 'Demostraciones de desarrollo web ${anio}';
    document.body.appendChild(titulo);

    const img = document.createElement("img"); 
    img.classList.add('foco'); 
    img.setAttribute('src', 'images/foco-apagado.jpg');

    
    img.addEventListener('click', () => {
        if (img.src.indexOf("apagado") > 0) {
            img.setAttribute('src', 'images/foco-prendido.jpg');
            document.body.classList.remove('oscuridad');
            document.body.classList.add('luz');
        } else {
            img.setAttribute('src', 'images/foco-apagado.jpg');
            document.body.classList.remove('luz');
            document.body.classList.add('oscuridad');
        }
    });

    document.body.appendChild(img);
}


