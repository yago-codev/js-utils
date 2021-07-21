const arr = ['🍎', '🍐', '🍊', '🍌']

// a função includes irá retornar um valor booleano
// de acordo com a sentença que declararmos.
// se o array incluir o elemento incluido na sentença, será retornado true,
// caso contrário, será retornado false:
const arrayContemLaranja = arr.includes('🍊')
console.log(arrayContemLaranja) // true

const arrayContemUva = arr.includes('🍇')
console.log(arrayContemUva) // false
