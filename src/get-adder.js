import sum from './sum'
export default getAdder

function getAdder(a) {
  return b => sum(a, b)
}
