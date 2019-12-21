export const loadSessionState = (name) =>{
  try {
    const serializedState = sessionStorage.getItem(name)
    if(serializedState === null){
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveSessionState = (name,value) => {
  try{
    const serializedState = JSON.stringify(value)
    sessionStorage.setItem(name,serializedState)
  }catch(err){
    return `error while setting ${name} in sessionStorage`
  }
}

export const loadLocalState = (name) => {
  try {
    const serializedState = localStorage.getItem(name)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveLocalState = (name, value) => {
  try {
    const serializedState = JSON.stringify(value)
    localStorage.setItem(name, serializedState)
  } catch (err) {
    return `error while setting ${name} in sessionStorage`
  }
}