let number = "aprendiendo";
console.log(number);
console.log(POKEMON);
console.log(POKEMON.pokemon[1].name);

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
