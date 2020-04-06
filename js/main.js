function clicou () {
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log( document.getElementById("agradecimento"));
}

function redirencionar(){
    //window.open("https://web.digitalinnovation.one")
    window.location.href = "https://web.digitalinnovation.one" //abre na mesma janela
}

function trocar(elemento){
    //alert("trocar texto")
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
   elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
   elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*Funções*/ 
/*
//Variável Globais
var validar = 0 
function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar)

*/
/*
//Variável local
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade))
*/

/*
function soma(n1, n2){
    return n1 + n2; 
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"))
*/

/*condicionais*/
/*var d = new Date();
//alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for(count=0; count <= 5; count++){
    alert(count)
}
*/
/*var count = 0;
while(count < 5){
    console.log(count);
  //count = count + 1; 
    count++;
}
*/


/*var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
alert("meu primeiro js")
var frase = "Japão é o melhor time do mundo"; 
n1 = 5;
n2 = 3;

console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase());
console.log(n1 * n2);
*/
/*
var lista = ["maça", "pêra", "laranja"];
//lista.push("uva") //adicionar elemento na lista
//lista.pop //remove elemento
//console.log(lista);
//console.log(lista.length); //mostrar tamanho da lista
//console.log(lista.reverse()) // inverter a posição dos elementos
console.log(lista.toString()[0])//transformar os elementos em string, retornando a primeira letra, m.
console.log(lista.join(" | "))
*/




