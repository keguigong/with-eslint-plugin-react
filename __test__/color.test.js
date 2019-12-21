import {
  ADD_COLOR,
  REMOVE_COLOR,
  RATE_COLOR,
  SORT_COLORS
} from '../components/color-list'
import { color } from '../components/color-list'
import deepFreeze from 'deep-freeze'

describe('color Reducer', () => {
  it('ADD_COLOR', () => {
    const state = {}
    const action = {
      type: ADD_COLOR,
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      rating: 0,
      timestamp: new Date().toString()
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(color(state, action))
      .toEqual({
        id: 0,
        title: 'Test Teal',
        color: '#90C3D4',
        timestamp: action.timestamp,
        rating: 0
      })
  })
  it('RATE_COLOR', () => {
    const state = {
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
      rating: undefined
    }
    const action = {
      type: RATE_COLOR,
      id: 0,
      rating: 3
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(color(state, action))
      .toEqual({
        id: 0,
        title: 'Test Teal',
        color: '#90C3D4',
        timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
        rating: 3
      })
  })
})