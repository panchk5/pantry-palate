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
      <div className="flex justify-between mx-[10%]">
        <a className='bg-dark text-white rounded-full p-2 px-5' href="/scan">&lt;</a>
        <a className='bg-white rounded-3xl text-bg py-2 px-4 transition-all border-2 flex flex-row justify-center'
          href="/">Home</a>
      </div>

      <div className="lg:m-auto lg:max-w-[40%] m-[10%]">
        <h1 className="text-2xl font-medium text-white mb-4">Ingredients 🧂</h1>
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>

    </>
  );
}
