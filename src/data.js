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
    return ((pokemon.type[0] === tipo )||(pokemon.type[1] === tipo)||(pokemon.type[2] === tipo));
  });
  return newArr2;
};

window.pokemon = {
  obtenerTipoUnico,
  filtrarTipo,
  ordering
};