// llamando al botón de la primera pantalla
const firstButton = document.getElementById("entrada");
const firstWindow = document.getElementById("firstWindowPokemon");

// llamando a la segunda pantalla general
const secondWindow = document.getElementById("secondWindowPokemon");
//  llamando a la segunda pantalla para ordenar
const classifyPokemon = document.getElementById("orderingPokemon");
// llamando a la tercera pantalla general
const thirdWindow = document.getElementById("hidingSecondTime");
const faceDebilidades = document.getElementById("windowDebilidades");
const buttonDebilidades = document.getElementById("debilidades");
// llamando a la cuarta pantalla general
const fourthWindow = document.getElementById("hidingThirdTime");
// boton de tipos
const windowTypesPokemon = document.getElementById("typesPokemonImg");
const buttonTypes = document.getElementById("typesPokemon");
// la cuarta pantalla
const evolutionPokemonCandies = document.getElementById("candy");
const buttonEvolution = document.getElementById("candyPokemon");
// ocultando la segunda pantalla general
secondWindow.style.display = "none";
// agregando el evento al primer boton
firstButton.addEventListener("click",function(){
  firstWindow.style.display= "none";
  secondWindow.style.display = "block";
  thirdWindow.style.display = "none";
});


//la tercera pantalla 
 buttonDebilidades.addEventListener("click", function(){
 thirdWindow.style.display = "block";
 classifyPokemon.style.display = "none";
 fourthWindow.style.display = "none";
 });
// trabajando con la cuarta pantalla 
buttonTypes.addEventListener("click",function(){
fourthWindow.style.display = "block";
faceDebilidades.style.display = "none";
evolutionPokemonCandies.style.display = "none";
// trabajando con la quinta pantalla
buttonEvolution.addEventListener("click",function(){
  evolutionPokemonCandies.style.display = "block";
  windowTypesPokemon.style.display = "none";

})

})
