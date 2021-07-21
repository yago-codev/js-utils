const arr = [10, 20, 30, 40]

// a função find irá retornar o primeiro elemento dentro do array que
// satisfaça a condição que declararmos.
// OBS: Se o valor da sentença não for encontrado, será retornado undefined
const numeroMaiorQueDez = arr.find(elemento => {
  return elemento > 10
})

const numeroMaiorQueQuarenta = arr.find(elemento => {
  return elemento > 40
})

console.log(numeroMaiorQueDez) // 20
console.log(numeroMaiorQueQuarenta) // undefined
