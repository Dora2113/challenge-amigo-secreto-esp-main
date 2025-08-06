// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver 
// el problema.

let miLista = [];

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}



asignarTextoElemento('h2', 'Añade 5 nombres de tus amigos');