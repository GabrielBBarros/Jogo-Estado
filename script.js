var estados = ["Acre", "Alagoas", "Amapá", "Amazonas",
"Bahia", "Ceará", "Distrito Federal", "Espírito Santo","Goiás", "Maranhão",
"Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará",
"Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
"Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima",
"Santa Catarina", "São Paulo", "Sergipe", "Tocantins"].map(function(estado){return estado.toLowerCase()});

var acerto;
var original;
var numero = 1;
var contador =1;


function exibir() {
    var i = Math.floor(Math.random()*estados.length);
    original = estados[i];
    var aleatorio = estados[i].toLowerCase();
    acerto = removerAcentos(aleatorio);
    var mapa = document.getElementById("mapa");
    mapa.src = "mapas/"+aleatorio+".png";
}

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function verificar(){
    var tentativa = removerAcentos(document.getElementById("estados").value.toLowerCase());
    if (tentativa === acerto) {
        alert("Parabéns, você acertou!!! "+original.toUpperCase());
        localStorage.setItem("estadoAcertado", original.toUpperCase());
        document.getElementById("acertou").style.display ='block';
    }
    else{
        alert("Estado incorreto, tentativa número: ["+numero+"] ");
        numero++;
    }
}

exibir();

function teste(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    alert(estadoAcertado);
}

function redirecionar(){
    window.location.href = "bandeira.html";
}
localStorage.setItem('acerto', original);

function redirecionar2(){
    window.location.href = "estatistica.html";
}





// Armazenar o estado acertado no localStorage
localStorage.setItem('estadoAcertado', original.toUpperCase());


function ACRE(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "ACRE") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Acre. Tente denovo");
    }
}

function ALAGOAS(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "ALAGOAS") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Alagoas. Tente denovo");
        contador++;
    }
}

function AMAPÁ(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "AMAPÁ") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Amapá. Tente denovo");
        contador++;
    }
}

function AMAZONAS(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "AMAZONAS") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Amazonas. Tente denovo");
        contador++;
    }
}

function BAHIA(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "BAHIA") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira da Bahia. Tente denovo");
        contador++;
    }
}

function CEARÁ(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "CEARÁ") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Ceará. Tente denovo");
        contador++;
    }
}

function DISTRITO_FEDERAL(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "DISTRITO FEDERAL") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Distrito Federal. Tente denovo");
        contador++;
    }
}

function ESPÍRITO_SANTO(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "ESPÍRITO SANTO") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Espírito Santo. Tente denovo");
        contador++;
    }
}

function GOIÁS(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "GOIÁS") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Goiás. Tente denovo");
        contador++;
    }
}

function MARANHÃO(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "MARANHÃO") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Maranhão. Tente denovo");
        contador++;
    }
}

function MATO_GROSSO_DO_SUL(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "MATO GROSSO DO SUL") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Mato Grosso do Sul. Tente denovo");
        contador++;
    }
}

function MATO_GROSSO(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "MATO GROSSO") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Mato Grosso. Tente denovo");
        contador++;
    }
}

function MINAS_GERAIS(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "MINAS GERAIS") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira de Minas Gerais. Tente denovo");
        contador++;
    }
}

function PARÁ(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "PARÁ") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Pará. Tente denovo");
        contador++;
    }
}

function PARANÁ(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "PARANÁ") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Paraná. Tente denovo");
        contador++;
    }
}

function PARAÍBA(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "PARAÍBA") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira da Paraíba. Tente denovo");
        contador++;
    }
}
function PERNAMBUCO(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "PERNAMBUCO") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira de Pernambuco. Tente denovo");
        contador++;
    }
}

function PIAUÍ(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "PIAUÍ") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Piauí. Tente denovo");
        contador++;
    }
}

function RIO_DE_JANEIRO(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "RIO DE JANEIRO") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Rio de Janeiro. Tente denovo");
        contador++;
    }
}
function RIO_GRANDE_DO_NORTE(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "RIO GRANDE DO NORTE") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Rio Grande do Norte. Tente denovo");
        contador++;
    }
}

function RIO_GRANDE_DO_SUL(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "RIO GRANDE DO SUL") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Rio de Janeiro. Tente denovo");
        contador++;
    }
}
function RONDÔNIA(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "RONDÔNIA") {
        alert("Parabéns você acertou!")
        document.getElementById("acertou2").style.display ='block';;
    }
    else{
        alert("Essa é a bandeira do Rondônia. Tente denovo");
        contador++;
    }
}
function RORAIMA(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "RORAIMA") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Roraima. Tente denovo");
        contador++;
    }
}
function SANTA_CATARINA(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "SANTA CATARINA") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Santa Catarina. Tente denovo");
        contador++;
    }
}
function SÃO_PAULO(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "SÃO PAULO") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Roraima. Tente denovo");
        contador++;
    }
}
function SERGIPE(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "SERGIPE") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Sergipe. Tente denovo");
        contador++;
    }
}
function TOCANTINS(){
    var estadoAcertado = localStorage.getItem("estadoAcertado");
    if (estadoAcertado === "TOCANTINS") {
        alert("Parabéns você acertou!");
        document.getElementById("acertou2").style.display ='block';
    }
    else{
        alert("Essa é a bandeira do Tocantins. Tente denovo");
        contador++;
    }
}
