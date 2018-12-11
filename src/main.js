let number = "aprendiendo";
console.log(number);
console.log("hola mundo");
console.log(POKEMON);
console.log(POKEMON.pokemon[1].name);

/* Creamos una función que agrege la propiedad age a
todos los elementos de un array y retorna un nuevo array */
/*
const newArr= [];
 for(let i = 0; i < POKEMON.pokemon.length; i++){
   newArr.push(POKEMON.pokemon[i].name)

 }

console.log(newArr);
*/

/*
const newArr2 = POKEMON.pokemon.filter((pokemon) => {
  return (pokemon.type[0] === 'Grass');
})
*/


const filtrarTipo= (tipo) =>{

  const newArr2=[];
  newArr2.push(POKEMON.pokemon.filter((pokemon) => {
   return ((pokemon.type[0] === tipo )||(pokemon.type[1] === tipo)||(pokemon.type[2] === tipo));
 }))
 console.log(newArr2);
}

filtrarTipo('Grass');

//console.log(newArr2);
console.log(POKEMON.pokemon.length)