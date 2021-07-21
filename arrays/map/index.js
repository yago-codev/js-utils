const arr = [1, 2, 3, 4, 5]

// utilizaremos a função map para percorrermos os elementos do array,
// gerando um novo array transformado.
// a função map recebe 3 parâmetros: o elemento, o índice e o array percorrido.
// OBS: a função map não irá causar mutação no array original.
const numerosMultiplicadosPorElesMesmos = arr.map(elemento => {
  return elemento * elemento
})

console.log(numerosMultiplicadosPorElesMesmos) // [ 1, 4, 9, 16, 25 ]

console.log(arr) // [ 1, 2, 3, 4, 5 ]
