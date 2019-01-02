// llamando al botón de la primera pantalla
const firstButton = document.getElementById('entrada');
const firstWindow = document.getElementById('firstWindowPokemon');

// llamando a la segunda pantalla general
const secondWindow = document.getElementById('secondWindowPokemon');
secondWindow.style.display = 'none';
// agregando el evento al primer boton

firstButton.addEventListener('click', function() {
  firstWindow.style.display = 'none';
  secondWindow.style.display = 'block';
  
});

// en esta sección se llama a la función y se llama al ID para crear el template en la etiqueta select.
const dataPokemon = POKEMON.pokemon;
const arrayTiposUnicos = pokemon.obtenerTipoUnico(dataPokemon);
const listaTipos = document.getElementById('typesPokemon');
for (let i = 0; i < arrayTiposUnicos.length; i++) {
  listaTipos.innerHTML += `<option value= ${arrayTiposUnicos[i]}>${arrayTiposUnicos[i]}</option>`;
}

const listaOrden = document.getElementById('orderingPokemon');
listaOrden.addEventListener('change', namesOrder)
function namesOrder() {
  const containerlist = document.getElementById('pokemon');
  let list = '';
  pokemon.ordering(dataPokemon).forEach((pokemones) => {
    const card = `
    <div class ='card-link'>
      <article class ='blog-card'>
        <img class="post-image" src="${ pokemones.img }" />
        <div class="article-details">
          <h4 class="post-title">${ pokemones.name }</h4>
          <h3 class="post-category">${ pokemones.type }</h3>
        </div>
      </article>
    </div>
    `;
    list = list + card;
  });
  containerlist.innerHTML = list;
}

listaTipos.addEventListener('change', mostrar);
function mostrar() {
  const containerlist = document.getElementById('pokemon');
  let list = '';
  pokemon.filtrarTipo(listaTipos.value, dataPokemon).forEach((pokemones) => {
    const card = `
    <div class ='card-link'>
      <article class ='blog-card'>
        <img class="post-image" src="${ pokemones.img }" />
        <div class="article-details">
          <h4 class="post-title">${ pokemones.name }</h4>
          <h3 class="post-category">${ pokemones.type }</h3>
        </div>
      </article>
    </div>
    `;
    list = list + card;
  });
  containerlist.innerHTML = list;
}
  
const espacioDespliegue = document.getElementsByClassName('card-link');
const articuloDesplegable = document.getElementsByClassName('oculto');
for (let i = 0; i < espacioDespliegue.length; i++) {
  espacioDespliegue[i].addEventListener('click', function() {
    if (articuloDesplegable.style.display === 'block') {
      articuloDesplegable.style.display = 'none';
    } else {
      articuloDesplegable.style.display = 'block';
    }
  });
}



/*
const ordenarAscendente = () => {
  const textoNombre = document.getElementById("nombre");
  let arrOrdenado = arrLol.map( arrLol => arrLol.name).sort();
  return textoNombre.innerHTML = arrOrdenado;
 };
POKEMON.pokemon.name.sort(
*/