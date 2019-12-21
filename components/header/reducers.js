import {
  TOGGLE_HEADER_COLLAPSE
} from './actions'

export const isHeaderCollapsed = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_HEADER_COLLAPSE:
      return !state
    default:
      return state
  }
}