export default formatList

function formatList(listName, items, key) {
  return `These are the items in the ${listName}:${
    items.reduce((itemsList, item) => {
      return `${itemsList}\n  - ${key ? item[key] : item}`
    }, '')
  }`
}
