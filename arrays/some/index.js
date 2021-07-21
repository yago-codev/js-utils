const arr = ['🍎', '🍐', '🍊', '🍌']

// percorre os elementos do array e
// retorna um valor booleano de acordo com a sentença que declararmos.
// se apenas um dos elementos for capaz de satisfazer a sentença,
// será retornado true
const contemLaranja = arr.some(elemento => {
  return elemento === '🍊'
})

// vai retornar true, porque dentro do array existe ao menos uma
// incidência do valor "laranja"
console.log(contemLaranja)
