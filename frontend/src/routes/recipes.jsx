import { useContext, useEffect, useState } from 'react'
import { RecipeData } from '../components/context';

const Card = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h3 className="font-bold">{recipe.title}</h3>
      {/* You can add more information or components here */}
    </div>
  );
};

export default function Recipes() {
  const { recipeData, setRecipeData } = useContext(RecipeData);

  if (!recipeData || !recipeData.results) {
    // Render loading state or handle case where data is not available yet
    return <div>Loading...</div>;
  }

  const recipes = recipeData.results; // Access the array of recipes

  return (
    <>
      <div>List of recipes returned:</div>
      
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
}


// export default function Recipes() {
//   const { recipeData, setRecipeData } = useContext(RecipeData);

//     return (
//       <>
//         <div>list of recipes returned:</div>

//         <p>{JSON.stringify(recipeData)}</p>

//         {
//           recipeData.map((r) => <Card recipe={r}/>)
//         }
        
//       </>
//     )
//   }
  

  

//   function Card({ recipe }){

//   }

// const Card = ({ recipe }) => {
//   return (
//     <div className="recipe-card">
//       <h3>{recipe.title}</h3>
//       {/* You can add more information or components here */}
//     </div>
//   );
// };

// export default function Recipes() {
//   const { recipeData, setRecipeData } = useContext(RecipeData);

//   return (
//     <>
//       <div>List of recipes returned:</div>
      
//       {
//         recipeData.map((recipe) => (
//           <Card key={recipe.id} recipe={recipe} />
//         ))
//       }
//     </>
//   );
// }