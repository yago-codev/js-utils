const arr = ['🍎', '🍐', '🍊', '🍌']

// filtra os elementos do array,
// retornando um novo array contendo os valores desejados.
// os valores que serão inclusos no novo array precisam
// retornar true de acordo com a sentença que declararmos.
// a função filter recebe 3 parâmetros: o elemento, o índice, e o array percorrido.
const arrayContendoBanana = arr.filter((
  elemento,
  indice,
  array
) => {
  console.log(`índice: ${indice}`) // índice: 0 // índice: 1 // índice: 2 // índice: 3

  console.log(`array percorrido: ${array}`) // array percorrido: 🍎,🍐,🍊,🍌

  return elemento === '🍌'
})

// vai retornar um novo array (sem modificar o original).
// esse novo array irá conter apenas uma banana
console.log(arrayContendoBanana) // [ '🍌' ]

// o array permanece imutável:
console.log(arr) // [ '🍎', '🍐', '🍊', '🍌' ]
