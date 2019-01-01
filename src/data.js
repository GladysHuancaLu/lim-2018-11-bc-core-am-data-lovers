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

//Estamos intentando obtener las debilidades agrupando del 1 al 7
var weaknessesArray = [];
var oneWeaknesses = [];
var twoWeaknesses = [];
var threeWeaknesses = [];
var fourWeaknesses = [];
var fiveWeaknesses = [];
var sixWeaknesses = [];
var sevenWeaknesses = [];

const getGroupsWeakns = (weaknsArr) =>{
  for (let i in weaknsArr) {
    weaknessesArray.push(weaknsArr[i].weaknesses);
      if (weaknsArr[i].weaknesses.length === 1) {
        oneWeaknesses.push(weaknsArr[i].weaknesses);
      } else
      if (weaknsArr[i].weaknesses.length === 2) {
          twoWeaknesses.push(weaknsArr[i].weaknesses);
      }else
        if (weaknsArr[i].weaknesses.length === 3) {
          threeWeaknesses.push(weaknsArr[i].weaknesses);
        }else
          if (weaknsArr[i].weaknesses.length === 4) {
            fourWeaknesses.push(weaknsArr[i].weaknesses);
          }else
            if (weaknsArr[i].weaknesses.length === 5) {
              fiveWeaknesses.push(weaknsArr[i].weaknesses);
            }else
              if (weaknsArr[i].weaknesses.length === 6) {
                sixWeaknesses.push(weaknsArr[i].weaknesses);
              }else
                if (weaknsArr[i].weaknesses.length === 7) {
                  sevenWeaknesses.push(weaknsArr[i].weaknesses);
                } //else {
                //
                // }
  
      }
      }

// esta es la parte donde se realiza el cálculo de las debilidades de los pokemon.
      /*const callgroups = getGroupsWeakns(dataPokemon);
        let pokecalcul = (numbPokeGroup) =>{
         return `%${ Math.round((numbPokeGroup.length*100)/151)}.`;
           };
           console.log(pokecalcul(oneWeaknesses));*/
      //Este es el código para poder realizar las columnas y despues agregar el cálculo.

  /*google.charts.load('current', {'packages':['corechart', 'table', 'sankey']});
  google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      let data = new google.visualization.DataTable();
        data.addColumn('string', 'Debilidades');
        data.addColumn('number', 'pokemones');
        data.addRows([
          ['7 Debilidades',2],
          ['5 Debilidades',8],
          ['6 Debilidades',9],
          ['1 Debilidades',22],
          ['4 Debilidades',30],
          ['2 Debilidades',38],
          ['3 Debilidades',42]
        ]);
        let options = {
            'title':'POKEMONES CON MAS DEBILIDAD',
          hAxis: {
               title: 'Número de debilidades',
               },
             vAxis: {
               title: 'Número de Pokemones',
             }
        };
        let chart = new google.visualization.ColumnChart(document.getElementById('debilidades'));
        chart.draw(data, options);
    } */
     


window.pokemon = {
  obtenerTipoUnico,
  filtrarTipo,
  getGroupsWeakns
};

