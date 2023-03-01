const lista = document.getElementsByClassName('nav_1');
const inicio = document.getElementById('header');

lista[0].addEventListener('click', mostrar_1);
lista[1].addEventListener('click', mostrar_2);
lista[2].addEventListener('click', mostrar_3);
inicio.addEventListener('click', mostrar);

function mostrar(){
    document.getElementById('centro').style.backgroundColor="aliceblue"
    document.getElementById('inicio').style.display="block"
    document.getElementById('pag_1').style.display="none"
    document.getElementById('pag_2').style.display="none"
    document.getElementById('pag_3').style.display="none"
}

function mostrar_1(){
    document.getElementById('centro').style.backgroundColor="thistle"
    document.getElementById('inicio').style.display="none"
    document.getElementById('pag_1').style.display="block"
    document.getElementById('pag_2').style.display="none"
    document.getElementById('pag_3').style.display="none"
}

function mostrar_2(){
    document.getElementById('centro').style.backgroundColor="thistle"
    document.getElementById('inicio').style.display="none"
    document.getElementById('pag_1').style.display="none"
    document.getElementById('pag_2').style.display="block"
    document.getElementById('pag_3').style.display="none"
}

function mostrar_3(){
    document.getElementById('centro').style.backgroundColor="thistle"
    document.getElementById('inicio').style.display="none"
    document.getElementById('pag_1').style.display="none"
    document.getElementById('pag_2').style.display="none"
    document.getElementById('pag_3').style.display="block"
}