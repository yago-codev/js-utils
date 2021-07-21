const arr = ['🍎', '🍐', '🍊', '🍌']

// percorre os elementos do array e
// retorna um valor booleano de acordo com a sentença que declararmos.
// se apenas TODOS os elementos for capaz de satisfazer a sentença,
// será retornado true
const somenteLaranja = arr.every(elemento => {
  return elemento === '🍊'
})

// vai retornar false porque quando a função every estiver
// percorrendo os elementos, ela irá encontrar incidências diferentes de "laranjas"
console.log(somenteLaranja)
