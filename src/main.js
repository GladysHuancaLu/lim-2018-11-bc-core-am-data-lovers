// llamando al botón de la primera pantalla
const firstButton = document.getElementById('entrada');
const firstWindow = document.getElementById('firstWindowPokemon');

// llamando a la segunda pantalla general
const secondWindow = document.getElementById('secondWindowPokemon');
secondWindow.style.display = 'none';

firstButton.addEventListener('click', function() {
  firstWindow.style.display = 'none';
  secondWindow.style.display = 'block';
  // thirdWindow.style.display = "none";
});

const dataPokemon = POKEMON.pokemon;
const arrayTiposUnicos = pokemon.obtenerTipoUnico(dataPokemon);
const listaTipos = document.getElementById('typesPokemon');
for (let i = 0; i < arrayTiposUnicos.length; i++) {
  listaTipos.innerHTML += `<option value= ${arrayTiposUnicos[i]}>${arrayTiposUnicos[i]}</option>`
}
/*
let textArray = [];
for (let i = 0; i < dataPokemon.length; i++) {
  textArray = textArray.concat(dataPokemon[i].weaknesses);
}
console.log(textArray);
*/

const containerlist = document.getElementById('contFiltrar');
listaTipos.addEventListener('change', mostrar);
function mostrar() {
  let list = '';
  const data = pokemon.filtrarTipo(listaTipos.value, dataPokemon);
  containerOrdenar.style.display = 'none';
  containerCandy.style.display = 'none';
  containerlist.style.display = 'block';
  containerlist.innerHTML = pokemon.mostrarTemplates(data);
};

const containerOrdenar = document.getElementById('contOrdenar');
const listaOrdenar = document.getElementById('orderingPokemon');
listaOrdenar.addEventListener('change', mostrarOrden);
function mostrarOrden() {
  const data = pokemon.sortData(dataPokemon, 'name', listaOrdenar.value);
  containerlist.style.display = 'none';
  containerCandy.style.display = 'none';
  containerOrdenar.style.display = 'block';
  containerOrdenar.innerHTML = pokemon.mostrarTemplates(data);
};

const containerCandy = document.getElementById('contCandy');
const btnCandy = document.getElementById('candy');
btnCandy.addEventListener('click', () => {
  containerOrdenar.style.display = 'none';
  containerlist.style.display = 'none';
  containerCandy.style.display = 'block';
});

const btnBuscar = document.getElementById('btnBuscar');
const inputBuscar = document.getElementById('nombre');
btnBuscar.addEventListener('click', () => {
  const data = pokemon.filterEvolution(dataPokemon, inputBuscar.value);
  let list = '';
  for (let i = 0; i < data.length-1; i++) {
    const card = `
     <div class ='card-link'>
      <article class ='blog-card'>
        <img class="post-image" src="${ data[i].img }" />
        <div class="article-details">
          <h4 class="post-title">${ data[i].name }</h4>
          <h3 class="post-category">${ data[i].type }</h3>
        </div>
        <div class="article-details">
          <h3 class="post-category">Tipo de caramelo: ${ data[i].candy }</h3>
          <h4 class="post-title">Caramelos para evolucionar: ${data[i].candy_count}</h4>
        </div>
      </article>
      </div>
     `;
    list = list + card;
  }
  const ultimaEvolucion = data[data.length - 1 ];
  const card2 = `
   <div class ='card-link'>
    <article class ='blog-card'>
      <img class="post-image" src="${ ultimaEvolucion.img }" />
      <div class="article-details">
        <h4 class="post-title">${ ultimaEvolucion.name }</h4>
        <h3 class="post-category">${ ultimaEvolucion.type }</h3>
      </div>
      <div class="article-details">
        <h3 class="post-category">Tipo de caramelo: ${ ultimaEvolucion.candy }</h3>
        <h4 class="post-title">${ultimaEvolucion.name} Alcanzo la maxima evolucion</h4>
      </div>
    </article>
    </div>
   `;
  list = list + card2;
  containerCandy.innerHTML = list;
});
 
  /*
  data.forEach((pokemones) => {
    if (data.hasOwnProperty('next_evolution')) {
      const card = `
     <div class ='card-link'>
      <article class ='blog-card'>
        <img class="post-image" src="${ pokemones.img }" />
        <div class="article-details">
          <h4 class="post-title">${ pokemones.name }</h4>
          <h3 class="post-category">${ pokemones.type }</h3>
        </div>
        <div class="article-details">
          <h3 class="post-category">Tipo de caramelo: ${ pokemones.candy }</h3>
          <h4 class="post-title">Caramelos para evolucionar: ${pokemones.candy_count}</h4>
        </div>
      </article>
      </div>
     `;
      list = list + card;
    }
    else {
      const card = `
     <div class ='card-link'>
      <article class ='blog-card'>
        <img class="post-image" src="${ pokemones.img }" />
        <div class="article-details">
          <h4 class="post-title">${ pokemones.name }</h4>
          <h3 class="post-category">${ pokemones.type }</h3>
        </div>
        <div class="article-details">
          <h3 class="post-category">Tipo de caramelo: ${ pokemones.candy }</h3>
          <h4 class="post-title">${pokemones.name} Alcanzo la maxima evolucion</h4>
        </div>
      </article>
     </div>
     `;
      list2 = list2 + card;
    }
  });

  containerCandy.innerHTML = list + list2;  
  //containerCandy.innerHTML = pokemon.mostrarTemplates(pokemon.filterEvolution(dataPokemon, inputBuscar.value));
});
*/

/*
const ordenarAscendente = () => {
  const textoNombre = document.getElementById("nombre");
  let arrOrdenado = arrLol.map( arrLol => arrLol.name).sort();
  return textoNombre.innerHTML = arrOrdenado;
 };
POKEMON.pokemon.name.sort(
*/

//event.target.getAttribute('value')