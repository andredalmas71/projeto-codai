var nome = "André Dalmas";
var cargo = "DESENVOLVEDOR";


var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarnomenohtml (nome) {
    nomehtml.innerHTML = nome;
}

function colocarcargonohtml (cargo) {
    cargohtml.innerHTML = cargo;
}

function logarnome () {
    console.log (nome);
}

function clicknoprojetos () {
    console.log ("clicou no botão projetos");
    texto2.style.display ="block";
    texto1.style.display ="none";
}

function clicknosobre () {
    console.log ("clicou no botão sobre");
    texto1.style.display ="block";
    texto2.style.display ="none";
}

colocarnomenohtml(nome);
colocarcargonohtml(cargo);
