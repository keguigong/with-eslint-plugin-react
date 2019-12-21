import {
  TOGGLE_SIDER_COLLAPSE,
  TOGGLE_SIDER_COLLAPSE_FROM_LOCAL
} from './actions'

// const initialState = async () => {
//   try {
//     const foo = await localStorage.isSiderCollapsed ?
//       localStorage.isSiderCollapsed === 'true' ?
//         true :
//         false :
//       false
//     return foo
//   } catch (err) {
//     // console.log(err)
//     return false
//   }
// }

export const isSiderCollapsed = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDER_COLLAPSE:
      return !state
    case TOGGLE_SIDER_COLLAPSE_FROM_LOCAL:
      return action.payload
    default:
      return state
  }
}