// llamando al botón de la primera pantalla
const firstButton = document.getElementById("entrada");
const firstWindow = document.getElementById("firstWindowPokemon");

// llamando a la segunda pantalla general
const secondWindow = document.getElementById("secondWindowPokemon");
//  llamando a la segunda pantalla para ordenar
// const classifyPokemon = document.getElementById("orderingPokemon");
// // llamando a la tercera pantalla general
// const thirdWindow = document.getElementById("hidingSecondTime");
// const faceDebilidades = document.getElementById("windowDebilidades");
// const buttonDebilidades = document.getElementById("debilidades");
// // llamando a la cuarta pantalla general
// const fourthWindow = document.getElementById("hidingThirdTime");
// // boton de tipos
// const windowTypesPokemon = document.getElementById("typesPokemonImg");
// const buttonTypes = document.getElementById("typesPokemon");
// // la cuarta pantalla
// const evolutionPokemonCandies = document.getElementById("candy");
// const buttonEvolution = document.getElementById("candyPokemon");
// ocultando la segunda pantalla general
secondWindow.style.display = "none";
// agregando el evento al primer boton

firstButton.addEventListener( "click", function(){
  firstWindow.style.display=  "none";
  secondWindow.style.display = "block";
  // thirdWindow.style.display = "none";
 });


//la tercera pantalla 
/*
 buttonDebilidades.addEventListener("click", function(){
 thirdWindow.style.display = "block";
 classifyPokemon.style.display = "none";
 fourthWindow.style.display = "none";
 });
 */
// trabajando con la cuarta pantalla 
/*
buttonTypes.addEventListener("click",function(){
fourthWindow.style.display = "block";
faceDebilidades.style.display = "none";
evolutionPokemonCandies.style.display = "none";
});
*/
// trabajando con la quinta pantalla
/*
buttonEvolution.addEventListener("click",function(){
  evolutionPokemonCandies.style.display = "block";
  windowTypesPokemon.style.display = "none";
});
*/
//console.table(POKEMON);
const dataPokemon = POKEMON.pokemon;
const arrayTiposUnicos =  pokemon.obtenerTipoUnico(dataPokemon);
const listaTipos = document.getElementById('typesPokemon');
for (let i = 0; i < arrayTiposUnicos.length; i++) {
  listaTipos.innerHTML += `<option value= ${arrayTiposUnicos[i]}>${arrayTiposUnicos[i]}</option>`
}

//console.log(newArr2)ss
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
      <article class="oculto">
        <h5 class="post-category">Altura: ${ pokemones.height }</h5>
        <h5 class="post-category">Peso: ${ pokemones.weight }</h5>
        <h5 class="post-category">Candy: ${ pokemones.candy }</h5>
        <h5 class="post-category">Egg: ${ pokemones.egg }</h5>
      </article>
    </div>
  `;
    list  = list  + card;

  })
  containerlist.innerHTML = list;
}

const espacioDespliegue=document.getElementsByClassName("card-link");
for ( let i = 0; i < espacioDespliegue.length; i++) {
  console.log(espacioDespliegue)
  espacioDespliegue[i].addEventListener("click", function() {
    const articuloDesplegable = getElementsByClassName("oculto")
    if (articuloDesplegable.style.display === "block") {
      articuloDesplegable.style.display = "none";
    } else {
      articuloDesplegable.style.display = "block";
    }
  });
}

/*
const ordenarAscendente = () => {
  const textoNombre = document.getElementById("nombre");
  let arrOrdenado = arrLol.map( arrLol => arrLol.name).sort();
  return textoNombre.innerHTML = arrOrdenado;
 };
POKEMON.pokemon.name.sort()
*/