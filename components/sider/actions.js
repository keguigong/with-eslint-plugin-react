export const TOGGLE_SIDER_COLLAPSE = 'TOGGLE_SIDER_COLLAPSE'
export const TOGGLE_SIDER_COLLAPSE_FROM_LOCAL = 'TOGGLE_SIDER_COLLAPSE_FROM_LOCAL'

export const toggleSiderCollapse = isSiderCollapsed => {
  localStorage.setItem('isSiderCollapsed', isSiderCollapsed)
  return {
    type: TOGGLE_SIDER_COLLAPSE
  }
}

export const readLocalCollapse = () => {
  const local = localStorage.getItem('isSiderCollapsed')
  if (local === 'true') {
    return {
      type: TOGGLE_SIDER_COLLAPSE_FROM_LOCAL,
      payload: true
    }
  } else return {
    type: TOGGLE_SIDER_COLLAPSE_FROM_LOCAL,
    payload: false
  }
}