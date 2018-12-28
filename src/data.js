/*
const example = () => {
  return 'example';
};
window.example = example;
*/
const obtenerTipoUnico = (arr) => {
  let newArr = [];
  let typesUniques = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i].type);
  }  
  for (let j = 0; j < newArr.length; j++) {
    if (typesUniques.indexOf(newArr[j]) === -1) {
      typesUniques.push(newArr[j]);
    }
  }
  return typesUniques;
};

const filtrarTipo = (tipo, arr) => {
  const newArr2 = arr.filter((pokemon) => {
    return ((pokemon.type[0] === tipo )||(pokemon.type[1] === tipo)||(pokemon.type[2] === tipo));
  });
  return newArr2;
};

const filterData = (data, condition) => {
  const newArr2 = data.filter((pokemon) => {
    return (pokemon.name === condition);
  });
  return newArr2;
};

const sortData = (data, sortBy, sortOrder) => {
  let dataOrdenada;
  if (sortBy === 'name') {
    dataOrdenada = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      else if (a.name < b.name) {
        return -1;
      }
      else {
        return 0;
      }
    });
    if (sortOrder === 'ascendente') {
      return dataOrdenada;
    }
    else if (sortOrder === 'descendente') {
      return dataOrdenada.reverse();
    }
  }
  let dataOrdenadaNumero;
  if (sortBy === 'number') {
    dataOrdenadaNumero = data.sort((a, b) => {
      return (parseInt(a.num) - parseInt(b.num));
    });
    return dataOrdenadaNumero;
  }
};

const filterEvolution = (data, name) => {
  const pokemonIngresado = pokemon.filterData(data, name);
  if (pokemonIngresado[0].hasOwnProperty('next_evolution') && pokemonIngresado[0].hasOwnProperty('prev_evolution')) {
    const arrPokemonEvolucion = pokemonIngresado[0].next_evolution;
    const arrPokemonDevolucion = pokemonIngresado[0].prev_evolution;
    let arrEvoluciones = (arrPokemonEvolucion.map(obj => obj.name)).concat(arrPokemonDevolucion.map(obj => obj.name));
    const arrEvolucionesfinal = arrEvoluciones.concat(name);
    let filtradoEvoluciones = arrEvolucionesfinal.map((string) => {return pokemon.filterData(data, string)});
    return pokemon.sortData(filtradoEvoluciones.flat(), 'number', 'ascendente');
  } else if (pokemonIngresado[0].hasOwnProperty('next_evolution')) {
    const arrPokemonEvolucion = pokemonIngresado[0].next_evolution;
    let arrEvoluciones = arrPokemonEvolucion.map(obj => obj.name);
    const arrEvolucionesfinal = arrEvoluciones.concat(name);
    let filtradoEvoluciones = arrEvolucionesfinal.map((string) => {return pokemon.filterData(data, string)});
    return pokemon.sortData(filtradoEvoluciones.flat(), 'number', 'ascendente');
  } else if (pokemonIngresado[0].hasOwnProperty('prev_evolution')) {
    const arrPokemonDevolucion = pokemonIngresado[0].prev_evolution;
    let arrEvoluciones = arrPokemonDevolucion.map(obj => obj.name);
    const arrEvolucionesfinal = arrEvoluciones.concat(name);
    let filtradoEvoluciones = arrEvolucionesfinal.map((string) => {return pokemon.filterData(data, string)});
    return pokemon.sortData(filtradoEvoluciones.flat(), 'number', 'ascendente');
  }
};

const mostrarTemplates = (data) => {
  let list = '';
  data.forEach((pokemones) => {
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
  return list;
};

window.pokemon = {
  obtenerTipoUnico,
  filtrarTipo,
  filterData,
  sortData,
  filterEvolution,
  mostrarTemplates
};
