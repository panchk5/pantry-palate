import { createContext, useState } from 'react'

export const Data = createContext(null)
export const RecipeData = createContext(null)

function Context({ children }) {
  const [modelData, setModelData] = useState([])
  const [recipeData, setRecipeData] = useState([])

  return (
    <Data.Provider value={{ modelData, setModelData }}>
      <RecipeData.Provider value={{ recipeData, setRecipeData }}>
        {children}
      </RecipeData.Provider>
    </Data.Provider>
  )
}

export default Context
