
//document.getElementById("demo").innerHTML = POKEMON.pokemon[0].weaknesses;

/*
const example = () => {
  return 'example';
};

window.example = example;
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

const filtrarTipo= (tipo) =>{

 
  const newArr2= POKEMON.pokemon.filter((pokemon) => {
   return ((pokemon.type[0] === tipo )||(pokemon.type[1] === tipo)||(pokemon.type[2] === tipo));
 })
 return newArr2;
};



//console.log(newArr2);
console.log(POKEMON.pokemon.length)

console.log(obtenerTipoUnico(POKEMON.pokemon));

window.pokemon = {

  obtenerTipoUnico,
  filtrarTipo

};





