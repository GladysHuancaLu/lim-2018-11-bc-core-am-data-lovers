// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*
const example = () => {
  return 'example';
};

window.example = example;
*/

/*
const obtenerTipoUnico = (arr) => {
  var newArr = [];
  var typesUniques = [];
   for(var i = 0; i < arr.length; i++){
      newArr.push(arr[i].type)
      }
   for(var j = 0; j < newArr.length; j++){
     if(typesUniques.indexOf(newArr[j].join('')) === -1){
       typesUniques.push(newArr[j].join(''))
     }
    }
  return typesUniques;
}

window.pokemon = {

 obtenerTipoUnico

};

*/
const obtenerTipoUnico = (arr) => {
  var newArr = [];
  var typesUniques = [];
   for(let i = 0; i < arr.length; i++){
     newArr= newArr.concat(arr[i].type);
   }
   for(var j = 0; j < newArr.length; j++){
    if(typesUniques.indexOf(newArr[j]) === -1){
      typesUniques.push(newArr[j]);
    }
   }

  return typesUniques;
}





//console.log(newArr2);
console.log(POKEMON.pokemon.length)


console.log(obtenerTipoUnico(POKEMON.pokemon));


window.pokemon = {

 obtenerTipoUnico


};

