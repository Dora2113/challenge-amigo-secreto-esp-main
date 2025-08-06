// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver 
// el problema.

let campo = document.querySelector('button');
let amigos = [];



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo(){
    alert('Por favor, inserte un nombre.');
    return;
}

function añadirNombreSorteado() {
    let nombreSecreto = Math.random()*5;
}

asignarTextoElemento('h2','Añada 5 nombres de sus amigos');