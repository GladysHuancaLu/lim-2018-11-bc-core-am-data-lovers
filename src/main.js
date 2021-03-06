// fetch('https://raw.githubusercontent.com/zuriros/lim-2018-11-bc-core-am-data-lovers/master/src/data/pokemon/pokemon.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let dataPokemonFetch = data.pokemon;
//     containerFunctions(dataPokemonFetch);
//   })
//   .catch((error) => { 
//     console.log('not found' + error.message);
//   });

// function containerFunctions(dataPokemon) {
  let dataPokemon = POKEMON.pokemon;
  // llamando al botón de la primera pantalla
  const firstButton = document.getElementById('entrada');
  const firstWindow = document.getElementById('firstWindowPokemon');
  // llamando a la segunda pantalla general
  const secondWindow = document.getElementById('secondWindowPokemon');
  secondWindow.style.display = 'none';
  firstButton.addEventListener('click', segundaVista);
  const navFiltrar = document.getElementById('filtrar');
  navFiltrar.addEventListener('click', segundaVista);
  const navOrdenar = document.getElementById('ordenar');
  navOrdenar.addEventListener('click', segundaVista);
  const navEvoluciones = document.getElementById('evoluciones');
  navEvoluciones.addEventListener('click', segundaVista);
  const navEstadisticas = document.getElementById('estadisticas');
  navEstadisticas.addEventListener('click', segundaVista);

  function segundaVista() {
    firstWindow.style.display = 'none';
    containerlist.style.display = 'none';
    containerCandy.style.display = 'none';
    containerOrdenar.style.display = 'none';
    containerWeakns.style.display = 'none';
    secondWindow.style.display = 'inline-flex';
  };
  const arrayTiposUnicos = pokemon.obtenerTipoUnico(dataPokemon);
  const listaTipos = document.getElementById('typesPokemon');
  for (let i = 0; i < arrayTiposUnicos.length; i++) {
    listaTipos.innerHTML += `<option value= ${arrayTiposUnicos[i]}>${arrayTiposUnicos[i]}</option>
    `;
  }

  const mostrarTemplates = (data) => {
    let list = '';
    data.forEach((pokemones) => {
      const card = `
    <div class ='card-link'>
      <article class ='blog-card'>
        <img class="card-image" src="${ pokemones.img}" />
        <div class="article-details">
          <h4 class="titulo">${ pokemones.name}</h4>
          <p3 class="parrafo">${ pokemones.type}</p3>
        </div>
      </article>
    </div>
    `;
      list = list + card;
    });
    return list;
  };

  const containerlist = document.getElementById('contFiltrar');


  listaTipos.addEventListener('change', mostrar);
  function mostrar() {
    const data = pokemon.filtrarTipo(listaTipos.value, dataPokemon);
    containerOrdenar.style.display = 'none';
    containerCandy.style.display = 'none';
    containerWeakns.style.display = 'none';
    containerlist.style.display = 'inline-flex';
    containerlist.innerHTML = mostrarTemplates(data);
  }
  const containerOrdenar = document.getElementById('contOrdenar');
  const listaOrdenar = document.getElementById('orderingPokemon');
  listaOrdenar.addEventListener('change', mostrarOrden);
  function mostrarOrden() {
    const data = pokemon.sortData(dataPokemon, listaOrdenar.value);
    containerlist.style.display = 'none';
    containerCandy.style.display = 'none';
    containerWeakns.style.display = 'none';
    containerOrdenar.style.display = 'inline-flex';
    containerOrdenar.innerHTML = mostrarTemplates(data);
  }
  const containerCandy = document.getElementById('contCandy');
  containerCandy.style.display = 'none';
  const btnCandy = document.getElementById('candy');
  btnCandy.addEventListener('click', () => {
    containerOrdenar.style.display = 'none';
    containerlist.style.display = 'none';
    containerWeakns.style.display = 'none';
    containerCandy.style.display = 'inline-flex';
  });
  const btnBuscar = document.getElementById('btnBuscar');
  const inputBuscar = document.getElementById('nombre');
  btnBuscar.addEventListener('click', () => {
    const data = pokemon.filterEvolution(dataPokemon, inputBuscar.value);
    let list = '';
    for (let i = 0; i < data.length - 1; i++) {
      const card = `
     <div class ='card col-lg-3 pseudoelemento'>
      <article class ='blog-card'>
        <img class="card-img-top" src="${ data[i].img}" />
        <div class="article-details">
          <h4 class="card-title">${ data[i].name}</h4>
          <h3 class="post-category">${ data[i].type}</h3>
        </div>
        <div class="article-details">
          <h3 class="post-category">Tipo de caramelo: ${ data[i].candy}</h3>
          <h4 class="post-title">Caramelos para evolucionar: ${data[i].candy_count}</h4>
        </div>
      </article>
      </div>
     `;
      list = list + card;
    }
    const ultimaEvolucion = data[data.length - 1];
    const card2 = `
   <div class ='card col-lg-3'>
    <article class ='blog-card'>
      <img class="card-img-top" src="${ ultimaEvolucion.img}" />
      <div class="article-details">
        <h4 class="card-title">${ ultimaEvolucion.name}</h4>
        <h3 class="post-category">${ ultimaEvolucion.type}</h3>
      </div>
      <div class="article-details">
        <h3 class="post-category">Tipo de caramelo: ${ ultimaEvolucion.candy}</h3>
        <h4 class="post-title">${ultimaEvolucion.name} Alcanzo la maxima evolucion</h4>
      </div>
    </article>
    </div>
   `;
    list = list + card2;
    containerCandy.innerHTML = list;
  });


  const containerWeakns = document.getElementById('contWeakns');
  containerWeakns.style.display = 'none';

  const calculWeakns = document.getElementById('weaknesses');
  calculWeakns.addEventListener('click', () => {
    containerOrdenar.style.display = 'none';
    containerlist.style.display = 'none';
    containerCandy.style.display = 'none';
    containerWeakns.style.display = 'inline-flex';

    google.charts.load('current', { 'packages': ['corechart', 'table', 'sankey'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      let data = new google.visualization.DataTable();
      data.addColumn('string', 'Debilidades');
      data.addColumn('number', 'pokemones');
      data.addRows([
        ['7 Debilidades', 2],
        ['5 Debilidades', 8],
        ['6 Debilidades', 9],
        ['1 Debilidades', 22],
        ['4 Debilidades', 30],
        ['2 Debilidades', 38],
        ['3 Debilidades', 42]
      ]);
      let options = {
        'title': 'POKEMONES CON MAS DEBILIDAD',
        hAxis: {
          title: 'Número de debilidades',
        },
        vAxis: {
          title: 'Número de Pokemones',
        }
      };
      let chart = new google.visualization.ColumnChart(document.getElementById('contWeakns'));
      chart.draw(data, options);
    }
    let list = '';
    for (let i = 1; i <= 7; i++) {
      const element = `
 <div class= 'weaknsNum'>
 <h2>El porcentaje de los pokemones con :${i} debilidades es : ${pokemon.getGroupsWeakns(dataPokemon, i)} </h2>
 </div>
 `;
      list += element;
    }
    containerWeakns.innerHTML = list;
  });
// }
