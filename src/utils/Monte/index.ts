import { IMesa } from '../../Pages/Game'

export function embaralhar (array: Array<{cor: string, id: number, virado: boolean}>) {
  const _array = array.slice(0)
  for (let i = 0; i < array.length - 1; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const temp = _array[i]
    _array[i] = _array[randomIndex]
    _array[randomIndex] = temp
  }

  return _array
}

export default function inicitalizarMonte () {
  let id: number = 0
  const cartas = ['yellow', 'red', 'brown', 'black', 'green', 'blue']
    .reduce((acumulador: Array<IMesa>, cor) => {
      acumulador.push(
        { cor, id: id, virado: false }
      )
      acumulador.push(
        { cor, id: id++, virado: false }
      )

      return acumulador
    }, [])

  return embaralhar(cartas)
}
