const contagemNumeroNotas = (total) => {
  const NotasDisponiveis = [100, 50, 20, 10, 5, 2, 1]
  let j = 0
  const obj = [0, 0, 0, 0, 0, 0, 0]
  const notas = []

  while (j < NotasDisponiveis.length) {
    if (total >= NotasDisponiveis[j]) {
      total -= NotasDisponiveis[j]
      obj[j]++
    } else {
      j++
    }
  }

  obj.forEach((item, index) => {
    if (item > 0)
      return notas.push({ bankNote: NotasDisponiveis[index], amount: item })
  })

  return notas
}

export default contagemNumeroNotas
