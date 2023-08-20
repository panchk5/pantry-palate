import React, { useContext, useState } from "react";
import { RecipeData } from "../components/context";
import Card from "../components/Card";

export default function Recipes() {
  const { recipeData } = useContext(RecipeData);
  if (!recipeData) {
    // Render loading state or handle case where data is not available yet
    return <div>Loading...</div>;
  }

  const recipes = recipeData; // Access the array of recipes

  return (
    <>
      <div className="lg:m-auto lg:max-w-[40%] m-[10%]">
        <h1 className="text-2xl font-medium text-white mb-4">Ingredients 🧂</h1>
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
