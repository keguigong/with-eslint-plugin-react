import { createContext } from 'react'

const PreferenceContext = createContext(false)
PreferenceContext.displayName = 'PreferenceContext'

export default PreferenceContext