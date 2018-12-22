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
const arrayTiposUnicos =  pokemon.obtenerTipoUnico(dataPokemon);
const listaTipos = document.getElementById('typesPokemon');
for (let i = 0; i < arrayTiposUnicos.length; i++) {
  listaTipos.innerHTML += `<option value= ${arrayTiposUnicos[i]}>${arrayTiposUnicos[i]}</option>`
}

const containerlist = document.getElementById('contFiltrar');
listaTipos.addEventListener('change', mostrar);
function mostrar() {
  let list = '';
  const data = pokemon.filtrarTipo(listaTipos.value, dataPokemon);
  containerOrdenar.style.display = 'none';
  containerlist.style.display = 'block';
  containerlist.innerHTML = pokemon.mostrarTemplates(data);
};

const containerOrdenar = document.getElementById('contOrdenar');
const listaOrdenar = document.getElementById('orderingPokemon');
listaOrdenar.addEventListener('change', mostrarOrden);
function mostrarOrden() {
  let list = '';
  const data = pokemon.sortData(dataPokemon, 'name', listaOrdenar.value);
  console.log(data);
  containerlist.style.display = 'none';
  containerOrdenar.style.display = 'block';
  containerOrdenar.innerHTML = pokemon.mostrarTemplates(data);
};

/*
const ordenarAscendente = () => {
  const textoNombre = document.getElementById("nombre");
  let arrOrdenado = arrLol.map( arrLol => arrLol.name).sort();
  return textoNombre.innerHTML = arrOrdenado;
 };
POKEMON.pokemon.name.sort(
*/

//event.target.getAttribute('value')