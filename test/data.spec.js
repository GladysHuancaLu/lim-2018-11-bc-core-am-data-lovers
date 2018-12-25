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
  {name: 'Bulbasaur', type: ['Grass', 'Poison']},
  {name: 'Charmander', type: ['Fire']},
  {name: 'Squirtle', type: ['Water']},
  {name: 'Caterpie', type: ['Bug']},
  {name: 'Butterfree', type: ['Bug', 'Flying']},
  {name: 'Pikachu', type: ['Electric']}
];

const output = ['Grass', 'Poison', 'Fire', 'Water', 'Bug', 'Flying', 'Electric'];
const output2 = [{name: 'Caterpie', type: ['Bug']}, {name: 'Butterfree', type: ['Bug', 'Flying']}];


describe('pokemon', () => {
  it('Debería ser un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });
  describe('potter.camiarPropiedad', () => {
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
});