import React from 'react'
import renderer from 'react-test-renderer'
import {
  makeSomeRequestAndGetSomeResponse,
  getFilteredStuff,
  MyComponent,
} from '../snapshots'

test('objects', async () => {
  const httpResponse = await makeSomeRequestAndGetSomeResponse()
  expect(httpResponse).toMatchSnapshot()
})

test('arrays', () => {
  const someFilteredList = getFilteredStuff('filter')
  expect(someFilteredList).toMatchSnapshot()
})

test('jsx', () => {
  const component = renderer.create(<MyComponent name="John" />)
  expect(component).toMatchSnapshot()
})
