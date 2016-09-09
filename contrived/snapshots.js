import React from 'react'
export {makeSomeRequestAndGetSomeResponse, getFilteredStuff, MyComponent}

function makeSomeRequestAndGetSomeResponse() {
  return new Promise(resolve => {
    resolve({
      name: 'Joe',
      id: '3423490',
      age: 32,
      foo: 'bar',
      email: '123@example.com',
    })
  })
}

function getFilteredStuff(filter) {
  return [
    'You shall not pass',
    'Vacuums have filters',
    'I will not be filtered out',
    'but I will',
  ].filter(i => i.includes(filter))
}

function MyComponent({name}) {
  return <div><h1>Hello</h1> there <strong>{`${name}!`}</strong></div>
}
