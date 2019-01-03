/*
const example = () => {
  return 'example';
};
window.example = example;
*/
// const map1 = array1.map(x => x * 2);
//const result = words.filter(word => word.length > 6);

let newArr1 = [];
const ordering = (data) => {
  data.forEach((obj) => {
    newArr1.push(obj.name);
  });
  const dataOrdenada = newArr1.sort();
 
  // const result = dataOrdenada.map((string) => { 
  //   data.filter(elemento => elemento.name === string); 
  // });
}; 


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
    return ((pokemon.type[0] === tipo) || (pokemon.type[1] === tipo) || (pokemon.type[2] === tipo));
  });
  return newArr2;
};

const filterData = (data, condition) => {
  const newArr2 = data.filter((pokemon) => {
    return (pokemon.name === condition);
  });
  return newArr2;
};

/*
const sortData = (data, sortBy, sortOrder) => {
  let dataOrdenada;
  if (sortBy === 'nameAsc') {
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
    return dataOrdenada;
  }
  else if()
  let dataOrdenadaNumero;
  if (sortBy === 'number') {
    dataOrdenadaNumero = data.sort((a, b) => {
      return (parseInt(a.num) - parseInt(b.num));
    });
    return dataOrdenadaNumero;
  }
};
*/
const sortData = (data, sortBy) => {
  let dataOrdenada;
  switch (sortBy) {
  case 'nameAsc':
    dataOrdenada = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    break;
  case 'nameDsc':
    dataOrdenada = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    dataOrdenada = dataOrdenada.reverse();
    
    break;
  case 'numberAsc':
    dataOrdenada = data.sort((a, b) => {
      return (parseInt(a.num) - parseInt(b.num));
    });
    break;
  case 'numberDesc':
    dataOrdenada = data.sort((a, b) => {
      return (parseInt(a.num) - parseInt(b.num));
    });
    dataOrdenada = dataOrdenada.reverse();
    break;
  }
  return dataOrdenada;
};

const filterEvolution = (data, name) => {
  const pokemonIngresado = pokemon.filterData(data, name);
  if (pokemonIngresado[0].hasOwnProperty('next_evolution') && pokemonIngresado[0].hasOwnProperty('prev_evolution')) {
    const arrPokemonEvolucion = pokemonIngresado[0].next_evolution;
    const arrPokemonDevolucion = pokemonIngresado[0].prev_evolution;
    let arrEvoluciones = (arrPokemonEvolucion.map(obj => obj.name)).concat(arrPokemonDevolucion.map(obj => obj.name));
    const arrEvolucionesfinal = arrEvoluciones.concat(name);
    let filtradoEvoluciones = arrEvolucionesfinal.map((string) => {return pokemon.filterData(data, string)});
    return pokemon.sortData(filtradoEvoluciones.flat(), 'numberAsc');
  } else if (pokemonIngresado[0].hasOwnProperty('next_evolution')) {
    const arrPokemonEvolucion = pokemonIngresado[0].next_evolution;
    let arrEvoluciones = arrPokemonEvolucion.map(obj => obj.name);
    const arrEvolucionesfinal = arrEvoluciones.concat(name);
    let filtradoEvoluciones = arrEvolucionesfinal.map((string) => {return pokemon.filterData(data, string)});
    return pokemon.sortData(filtradoEvoluciones.flat(), 'numberAsc');
  } else if (pokemonIngresado[0].hasOwnProperty('prev_evolution')) {
    const arrPokemonDevolucion = pokemonIngresado[0].prev_evolution;
    let arrEvoluciones = arrPokemonDevolucion.map(obj => obj.name);
    const arrEvolucionesfinal = arrEvoluciones.concat(name);
    let filtradoEvoluciones = arrEvolucionesfinal.map((string) => {return pokemon.filterData(data, string)});
    return pokemon.sortData(filtradoEvoluciones.flat(), 'numberAsc');
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

/*const getGroupsWeakns = (weaknsArr, number) =>{
  let weaknessesArray = [];
  let arrayGlobal = [];
  for (let i in weaknsArr) {
    weaknessesArray.push(weaknsArr[i].weaknesses);
    if (weaknsArr[i].weaknesses.length === number) {
      arrayGlobal.push(weaknsArr[i].weaknesses);
    }
  }
  return arrayGlobal;
   // var pokecalcul = (numbPokeGroup) =>{
      //   return `%${ Math.round((numbPokeGroup.length*100)/151)}.`;
      //     };
          // console.log(pokecalcul(oneWeaknesses));
     // }*/

window.pokemon ={
  ordering,
  obtenerTipoUnico,
  filtrarTipo,
  filterData,
  sortData,
  filterEvolution,
  mostrarTemplates
//getGroupsWeakns
  }; 
