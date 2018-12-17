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

<<<<<<< HEAD
/* Creamos una función que agrege la propiedad age a
todos los elementos de un array y retorna un nuevo array */
/*
const newArr= [];
 for(let i = 0; i < POKEMON.pokemon.length; i++){
   newArr.push(POKEMON.pokemon[i].name)
 }
*/

/*
const newArr2 = POKEMON.pokemon.filter((pokemon) => {
  return ((pokemon.type[0] === "Poison" )||(pokemon.type[1] === "Poison")||(pokemon.type[2] === "Poison"));
})
*/




//console.table(POKEMON);
const dataPokemon = POKEMON.pokemon;
const arrayTiposUnicos =  pokemon.obtenerTipoUnico(dataPokemon);
const listaTipos = document.getElementById('tipo');
for(let i = 0; i < arrayTiposUnicos.length; i++){
  listaTipos.innerHTML += `<option value= ${arrayTiposUnicos[i]}>${arrayTiposUnicos[i]}</option>`
}


listaTipos.addEventListener("change", mostrar);
function mostrar (){
  const containerlist = document.getElementById("pokemon");
  let list  = '';
  pokemon.filtrarTipo(listaTipos.value).forEach((pokemones)  =>  {
    const card  =`
    <div class="card-link">
      <article class="blog-card">
        <img class="post-image" src="${ pokemones.img }" />
        <div class="article-details">
          <h4 class="post-title">${ pokemones.name }</h4>
          <h3 class="post-category">${ pokemones.type }</h3>
        </div>
      </article>
    </div>
  `;
    list  = list  + card;
  })
  containerlist.innerHTML = list;
}
=======
})

})
>>>>>>> f6c6866017921434f6f121aa7e24888635c288ac
