import { createContext, useState } from 'react'

export const Data = createContext(null)

function Context({ children }) {
  const [modelData, setModelData] = useState([])

  return (
    <Data.Provider value={{ modelData, setModelData }}>
      {children}
    </Data.Provider>
  )
}

export default Context
 