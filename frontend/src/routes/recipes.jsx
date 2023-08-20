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
  const {recipeData} = useContext(RecipeData);
  if (!recipeData) {
    // Render loading state or handle case where data is not available yet
    return <div>Loading...</div>;
  }

  const recipes = recipeData; // Access the array of recipes

  return (
    <>
      <div>List of recipes returned:</div>
      
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
}
