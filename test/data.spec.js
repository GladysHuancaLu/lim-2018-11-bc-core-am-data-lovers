require('../src/data.js');

/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
*/


const input = [
  {id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']},
  {id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock']},
  {id: 7, name: 'Squirtle', type: ['Water'], weaknesses: ['Electric', 'Grass']},
  {id: 10, name: 'Caterpie', type: ['Bug'], next_evolution:[{id: 11, name: 'Metapod'}, {id: 12, name: 'Butterfree'}], weaknesses: ['Fire', 'Flying', 'Rock']}, 
  {id: 11, name: 'Metapod', type: ['Bug'], next_evolution:[{id: 12, name: 'Butterfree'}], prev_evolution:[{id: 10, name: 'Caterpie'}], weaknesses: ['Fire', 'Flying', 'Rock']},
  {id: 12, name: 'Butterfree', type: ['Bug', 'Flying'], prev_evolution:[{id: 10, name: 'Caterpie' }, {id: 11, name: 'Metapod'}], weaknesses: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock']},
  {id: 25, name: 'Pikachu', type: ['Electric'], weaknesses: ['Ground']}
];

const output = ['Grass', 'Poison', 'Fire', 'Water', 'Bug', 'Flying', 'Electric'];
const output2 = [ 
  {id: 10, name: 'Caterpie', type: ['Bug'], next_evolution:[{id: 11, name: 'Metapod'}, {id: 12, name: 'Butterfree'}], weaknesses: ['Fire', 'Flying', 'Rock']}, 
  {id: 11, name: 'Metapod', type: ['Bug'], next_evolution:[{id: 12, name: 'Butterfree'}], prev_evolution:[{id: 10, name: 'Caterpie'}], weaknesses: ['Fire', 'Flying', 'Rock']},
  {id: 12, name: 'Butterfree', type: ['Bug', 'Flying'], prev_evolution:[{id: 10, name: 'Caterpie' }, {id: 11, name: 'Metapod'}], weaknesses: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock']},
];
const output3 = [
  {id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']},
  {id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock']},
  {id: 7, name: 'Squirtle', type: ['Water'], weaknesses: ['Electric', 'Grass']},
  {id: 10, name: 'Caterpie', type: ['Bug'], next_evolution:[{id: 11, name: 'Metapod'}, {id: 12, name: 'Butterfree'}], weaknesses: ['Fire', 'Flying', 'Rock']}, 
  {id: 11, name: 'Metapod', type: ['Bug'], next_evolution:[{id: 12, name: 'Butterfree'}], prev_evolution:[{id: 10, name: 'Caterpie'}], weaknesses: ['Fire', 'Flying', 'Rock']},
  {id: 12, name: 'Butterfree', type: ['Bug', 'Flying'], prev_evolution:[{id: 10, name: 'Caterpie' }, {id: 11, name: 'Metapod'}], weaknesses: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock']},
  {id: 25, name: 'Pikachu', type: ['Electric'], weaknesses: ['Ground']}
];
const output4 = [
  {id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']},
  {id: 12, name: 'Butterfree', type: ['Bug', 'Flying'], prev_evolution:[{id: 10, name: 'Caterpie' }, {id: 11, name: 'Metapod'}], weaknesses: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock']},
  {id: 10, name: 'Caterpie', type: ['Bug'], next_evolution:[{id: 11, name: 'Metapod'}, {id: 12, name: 'Butterfree'}], weaknesses: ['Fire', 'Flying', 'Rock']}, 
  {id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock']},
  {id: 11, name: 'Metapod', type: ['Bug'], next_evolution:[{id: 12, name: 'Butterfree'}], prev_evolution:[{id: 10, name: 'Caterpie'}], weaknesses: ['Fire', 'Flying', 'Rock']},
  {id: 25, name: 'Pikachu', type: ['Electric'], weaknesses: ['Ground']},
  {id: 7, name: 'Squirtle', type: ['Water'], weaknesses: ['Electric', 'Grass']}
];
const output5 = [
  {id: 7, name: 'Squirtle', type: ['Water'], weaknesses: ['Electric', 'Grass']},
  {id: 25, name: 'Pikachu', type: ['Electric'], weaknesses: ['Ground']},
  {id: 11, name: 'Metapod', type: ['Bug'], next_evolution:[{id: 12, name: 'Butterfree'}], prev_evolution:[{id: 10, name: 'Caterpie'}], weaknesses: ['Fire', 'Flying', 'Rock']},
  {id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock']},
  {id: 10, name: 'Caterpie', type: ['Bug'], next_evolution:[{id: 11, name: 'Metapod'}, {id: 12, name: 'Butterfree'}], weaknesses: ['Fire', 'Flying', 'Rock']}, 
  {id: 12, name: 'Butterfree', type: ['Bug', 'Flying'], prev_evolution:[{id: 10, name: 'Caterpie' }, {id: 11, name: 'Metapod'}], weaknesses: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock']},
  {id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']},
];
const output6 = [
  {id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']},
  {id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock']},
  {id: 7, name: 'Squirtle', type: ['Water'], weaknesses: ['Electric', 'Grass']},
  {id: 10, name: 'Caterpie', type: ['Bug'], next_evolution:[{id: 11, name: 'Metapod'}, {id: 12, name: 'Butterfree'}], weaknesses: ['Fire', 'Flying', 'Rock']}, 
  {id: 11, name: 'Metapod', type: ['Bug'], next_evolution:[{id: 12, name: 'Butterfree'}], prev_evolution:[{id: 10, name: 'Caterpie'}], weaknesses: ['Fire', 'Flying', 'Rock']},
  {id: 12, name: 'Butterfree', type: ['Bug', 'Flying'], prev_evolution:[{id: 10, name: 'Caterpie' }, {id: 11, name: 'Metapod'}], weaknesses: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock']},
  {id: 25, name: 'Pikachu', type: ['Electric'], weaknesses: ['Ground']}
];
const output7 = [
  {id: 25, name: 'Pikachu', type: ['Electric'], weaknesses: ['Ground']},
  {id: 12, name: 'Butterfree', type: ['Bug', 'Flying'], prev_evolution:[{id: 10, name: 'Caterpie' }, {id: 11, name: 'Metapod'}], weaknesses: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock']},
  {id: 11, name: 'Metapod', type: ['Bug'], next_evolution:[{id: 12, name: 'Butterfree'}], prev_evolution:[{id: 10, name: 'Caterpie'}], weaknesses: ['Fire', 'Flying', 'Rock']},
  {id: 10, name: 'Caterpie', type: ['Bug'], next_evolution:[{id: 11, name: 'Metapod'}, {id: 12, name: 'Butterfree'}], weaknesses: ['Fire', 'Flying', 'Rock']}, 
  {id: 7, name: 'Squirtle', type: ['Water'], weaknesses: ['Electric', 'Grass']},
  {id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock']},
  {id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']}
]; 
const output8 = [
  {id: 25, name: 'Pikachu', type: ['Electric'], weaknesses: ['Ground']}
]; 
const output9 = [
  {id: 10, name: 'Caterpie', type: ['Bug'], next_evolution:[{id: 11, name: 'Metapod'}, {id: 12, name: 'Butterfree'}], weaknesses: ['Fire', 'Flying', 'Rock']}, 
  {id: 11, name: 'Metapod', type: ['Bug'], next_evolution:[{id: 12, name: 'Butterfree'}], prev_evolution:[{id: 10, name: 'Caterpie'}], weaknesses: ['Fire', 'Flying', 'Rock']},
  {id: 12, name: 'Butterfree', type: ['Bug', 'Flying'], prev_evolution:[{id: 10, name: 'Caterpie' }, {id: 11, name: 'Metapod'}], weaknesses: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock']}
]; 
const output10 = '43%'; 

describe('pokemon', () => {
  it('Debería ser un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });

  describe('pokemon.obtenerTipoUnico', () => {
    it('debería ser una función', () => {
      expect(typeof pokemon.obtenerTipoUnico).toBe('function');
    });
    it('debería retornar un array de objetos, con el valor de la propiedad name en mayusculas', () => {
      expect(pokemon.obtenerTipoUnico(input)).toEqual(output);
    });
    it('debería retornar un nuevo array, no modificar el original', () => {
      expect(pokemon.obtenerTipoUnico(input)).not.toEqual(input);
    });
  });

  describe('pokemon.filtrarTipo', () => {
    it('debería ser una función', () => {
      expect(typeof pokemon.filtrarTipo).toBe('function');
    });
    it('deberia agregar la propiedad insignia a todos los estudiantes de hogwarts', () => {
      expect(pokemon.filtrarTipo('Bug', input)).toEqual(output2);
    });
    it('debería retornar un nuevo array, no cambiar el array original', () => {
      expect(pokemon.filtrarTipo('Bug', input)).not.toEqual(input);
    });
  });
   
  describe('pokemon.copyData', () => {
    it('debería ser una función', () => {
      expect(typeof pokemon.copyData).toBe('function');
    });
    it('debería retornar un array de objetos, con el valor de la copia del array original', () => {
      expect(pokemon.copyData(input)).toEqual(output3);
    });
    it('debería retornar un nuevo array, igual que el original', () => {
      expect(pokemon.copyData(input)).toEqual(input);
    });
  });

  describe('pokemon.sortData', () => {
    it('debería ser una función', () => {
      expect(typeof pokemon.sortData).toBe('function');
    }); 
    it('debería retornar un array de objetos, ordenado alfbabeticameente ascendente, segun propiedad name', () => {
      expect(pokemon.sortData(input,'nameAsc')).toEqual(output4);
    });
    it('debería retornar un nuevo array, no modificar el original', () => {
      expect(pokemon.sortData(input,'nameAsc')).not.toEqual(input);
    });
    it('debería retornar un array de objetos, ordenado alfbabeticameente descendente, segun propiedad name', () => {
      expect(pokemon.sortData(input,'nameDesc')).toEqual(output5);
    });
    it('debería retornar un nuevo array, no modificar el original', () => {
      expect(pokemon.sortData(input,'nameDesc')).not.toEqual(input);
    });
    it('debería retornar un array de objetos, ordenado numericamente ascendente, segun propiedad id', () => {
      expect(pokemon.sortData(input,'numberAsc')).toEqual(output6);
    });
    it('debería retornar un nuevo array, y ser igual al original', () => {
      expect(pokemon.sortData(input,'numberAsc')).toEqual(input);
    });
    it('debería retornar un array de objetos, ordenado numericamente descendente, segun propiedad id', () => {
      expect(pokemon.sortData(input,'numberDesc')).toEqual(output7);
    });
    it('debería retornar un nuevo array, no modificar el original', () => {
      expect(pokemon.sortData(input,'numberDesc')).not.toEqual(input);
    }); 
  }); 
  
  describe('pokemon.filterData', () => {
    it('debería ser una función', () => {
      expect(typeof pokemon.filterData).toBe('function');
    }); 
    it('debería retornar un array con un objeto, resultado de filtrar segun el nombre', () => {
      expect(pokemon.filterData(input,'Pikachu')).toEqual(output8);
    });
    it('debería retornar un nuevo array, no modificar el original', () => {
      expect(pokemon.filterData(input,'Pikachu')).not.toEqual(input);
    });
  });

  describe('pokemon.filterEvolution', () => {
    it('debería ser una función', () => {
      expect(typeof pokemon.filterEvolution).toBe('function');
    }); 
    it('debería retornar un array de objetos de los pokemones evolucionados', () => {
      expect(pokemon.filterEvolution(input,'Caterpie')).toEqual(output9);
    });
    it('debería retornar un array de objetos de los pokemones evolucionados', () => {
      expect(pokemon.filterEvolution(input,'Metapod')).toEqual(output9);
    });
    it('debería retornar un array de objetos de los pokemones evolucionados', () => {
      expect(pokemon.filterEvolution(input,'Butterfree')).toEqual(output9);
    }); 
  });

  describe('pokemon.getGroupsWeakns', () => {
    it('debería ser una función', () => {
      expect(typeof pokemon.getGroupsWeakns).toBe('function');
    });
    it('debería retornar un string, con el valor del porcentaje de debilidades', () => {
      expect(pokemon.getGroupsWeakns(input, 3)).toEqual(output10);
    }); 
  }); 
});