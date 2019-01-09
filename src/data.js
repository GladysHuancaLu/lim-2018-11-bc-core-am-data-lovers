const copyData = (data) => {
  const newData = data.map(obj => Object.assign({},obj));
  return newData;
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

const sortData = (data, sortBy) => {
  data = copyData(data);
  let dataOrdenada;
  switch (sortBy) {
  case 'nameAsc':
    dataOrdenada = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      else {
        return -1;
      }
    });
    break;
  case 'nameDesc':
    dataOrdenada = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      else {
        return -1;
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
  const pokemonIngresado = filterData(data, name);
  let arrEvolucionesfinal = [];
  let filtradoEvoluciones;
  if (pokemonIngresado[0].hasOwnProperty('next_evolution') && pokemonIngresado[0].hasOwnProperty('prev_evolution')) {
    const arrPokemonEvolucion = pokemonIngresado[0].next_evolution;
    const arrPokemonDevolucion = pokemonIngresado[0].prev_evolution;
    let arrEvoluciones = (arrPokemonDevolucion.map(obj => obj.name)).concat(name);
    arrEvolucionesfinal = arrEvoluciones.concat(arrPokemonEvolucion.map(obj => obj.name));
    filtradoEvoluciones = (arrEvolucionesfinal.map((string) => {return filterData(data, string)}));
  } else if (pokemonIngresado[0].hasOwnProperty('next_evolution')) {
    const arrPokemonEvolucion = pokemonIngresado[0].next_evolution;
    arrEvolucionesfinal = (arrEvolucionesfinal.concat(name)).concat(arrPokemonEvolucion.map(obj => obj.name));
    filtradoEvoluciones = (arrEvolucionesfinal.map((string) => {return filterData(data, string)}));
  } else {
    const arrPokemonDevolucion = pokemonIngresado[0].prev_evolution;
    arrEvolucionesfinal = (arrPokemonDevolucion.map(obj => obj.name)).concat(name);
    filtradoEvoluciones = (arrEvolucionesfinal.map((string) => {return filterData(data, string)}));
  }
  return filtradoEvoluciones.reduce((acc, element) => acc.concat(element), []);
};

const getGroupsWeakns = (weaknsArr, number) => {
  let arrayGlobal = [];
  for (let i in weaknsArr) {
    if (weaknsArr[i].weaknesses.length === number) {
      arrayGlobal.push(weaknsArr[i].weaknesses);
    }
  }
  return `${ Math.round((arrayGlobal.length * 100) / weaknsArr.length)}%`;
};
           
window.pokemon = {
  obtenerTipoUnico,
  filtrarTipo,
  filterData,
  sortData,
  filterEvolution,
  getGroupsWeakns,
  copyData
};