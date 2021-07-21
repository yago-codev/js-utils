const arr = ['🍊', '🍊', '🍊', '🍊']

// a função findIndex irá retornar o índice do primeiro elemento que
// satisfazer a condição que for declarada.
// OBS: Se o elemento não existir, será retornado -1
const indiceDaPrimeiraLaranja = arr.findIndex(elemento => {
  return elemento === '🍊'
})

const indiceDaPrimeiraUva = arr.findIndex(elemento => {
  return elemento === '🍇'
})

console.log(indiceDaPrimeiraLaranja) // 0
console.log(indiceDaPrimeiraUva) // -1
