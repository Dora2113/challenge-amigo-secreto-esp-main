/**
 * El usuario deberá agregar nombres mediante un campo de texto y un botón 
 * "Adicionar". Los nombres ingresados se mostrarán en una lista visible 
 * en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno 
 * de los nombres de forma aleatoria, mostrando el resultado en pantalla.
 */


let miLista = [];

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTexto('h2', 'Añada los nombres de sus amigos');

function agregarAmigo() {
    const input = document.getElementById("valorAmigo");
    const nombre = input.value.trim(); // Elimina espacios

      // Validar que no esté vacío y no sea duplicado
    if (nombre === "") {
        alert("Digite un nombre por favor.");
        return;
    }

    if (miLista.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

      // Agregar el nombre al arreglo
    miLista.push(nombre);

      // Limpiar el input
    input.value = "";

      // Actualizar la lista visual, pero antes se tiene que crear la funcion actualizar
    actualizarLista();
}


function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
      lista.innerHTML = ""; // Limpiar antes de volver a mostrar

    for (let i = 0; i < miLista.length; i++) {
        const li = document.createElement("li");
        li.textContent = miLista[i];
        lista.appendChild(li);
        }
    }

function sortearAmigo() {
    const resultado = document.getElementById("resultadoSorteo");
     // Elegir un índice aleatorio
    const indice = Math.floor(Math.random() * miLista.length); // formuña matemica
    const nombreGanador = miLista[indice];
    if (miLista.length === 0) {
        resultado.textContent = "No hay amigos para sortear.";
        return;
    }
    return   resultado.textContent = `🎉 El amigo secreto es: ${nombreGanador}`;
}



