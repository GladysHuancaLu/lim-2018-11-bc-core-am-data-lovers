// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;

let number = "aprendiendo";
console.log(number);
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
  return ((pokemon.type[0] === "Poison" )||(pokemon.type[1] === "Poison")||(pokemon.type[2] === "Poison"));
})
*/


const filtrarTipo= (tipo) =>{

 
  const newArr2= POKEMON.pokemon.filter((pokemon) => {
   return ((pokemon.type[0] === tipo )||(pokemon.type[1] === tipo)||(pokemon.type[2] === tipo));
 })
 return newArr2;
}





//console.table(POKEMON);
const dataPokemon = POKEMON.pokemon;
const arrayTiposUnicos =  pokemon.obtenerTipoUnico(dataPokemon);
const listaTipos = document.getElementById('tipo');
for(let i = 0; i < arrayTiposUnicos.length; i++){
  listaTipos.innerHTML += `<option value= ${arrayTiposUnicos[i]}>${arrayTiposUnicos[i]}</option>`
}

console.log(listaTipos.value);



//mostrar(listaTipos.value);

/*
let list  = '';
filtrarTipo('Electric').forEach((pokemones)  =>  {
  const li  = `<li>${pokemones.name}</li>`  + `<img src="${pokemones.img}">`;
  list  = list  + li;
})
containerlist.innerHTML = list;
*/

listaTipos.addEventListener("change", mostrar);
function mostrar (){
  const containerlist = document.getElementById("pokemon");
  let list  = '';
  filtrarTipo(listaTipos.value).forEach((pokemones)  =>  {
    const li  = `<li>${pokemones.name}</li>`  + `<img src="${pokemones.img}">`;
    list  = list  + li;
    
  })
  containerlist.innerHTML = list;
    
}





