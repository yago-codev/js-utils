const arr = ['🍎', '🍐', '🍊', '🍌']

// a função forEach não possui valor de retorno E não altera o array original.
// a função forEach recebe 3 parâmetros: o elemento, o índice e o array percorrido.
// utilizaremos o forEach quando quisermos iterar algum array:
const arrayContendoLaranja = []

arr.forEach(elemento => {
  if (elemento === '🍊') {
    return arrayContendoLaranja.push(elemento)
  }
})

console.log(arrayContendoLaranja) // [ '🍊' ]
