// import { useContext, useEffect, useState } from 'react'
// import { RecipeData } from '../components/context';

// const Card = ({ recipe }) => {
//   return (
//     <div className="recipe-card">
//       <h3 className="font-bold">{recipe.title}</h3>
//       {/* You can add more information or components here */}
//     </div>
//   );
// };

// export default function Recipes() {
//   const {recipeData} = useContext(RecipeData);
//   console.log(recipeData)
//   if (!recipeData) {
//     // Render loading state or handle case where data is not available yet
//     return <div>Loading...</div>;
//   }

//   const recipes = recipeData; // Access the array of recipes

//   return (
//     <>
//       <div>List of recipes returned:</div>

//       {recipes.map((recipe) => (
//         <Card key={recipe.id} recipe={recipe} />
//       ))}
//     </>
//   );
// }

import React, { useContext, useState } from "react";
import { RecipeData } from "../components/context";

const Card = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [recipeData, setRecipeData] = useState(null);

  const backgroundImageStyle = {
    backgroundImage: `url(${recipe.image})`,
    backgroundSize: "cover", // You can adjust this property as needed
  };

  const toggleCard = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/get-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the correct content type
        },
        body: JSON.stringify({ recipe_id: recipe.id }),
      });

      if (response.ok) {
        console.log("Image data sent successfully"); //CHANGE MESSAGES AFTER
      } else {
        alert("Error sending image data to server");
        console.error("Error sending image data to server");
      }

      const _data = await response.json();

      console.log(_data);
      setRecipeData(_data);
      setIsExpanded(!isExpanded);
    } catch (error) {
      console.error("Error sending image data:", error);
    }
  };

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <>
      <button
        onClick={toggleCard}
        className=" bg-white p-5 w-full rounded-2xl mb-5"
      >
        <div className={`recipe-card   ${isExpanded ? "expanded" : ""}`}>
          <div
            className="recipe-image h-[200px] w-[200px]"
            style={backgroundImageStyle}
          ></div>
          <h3 className="font-bold">{recipe.title}</h3>
          {/* Toggle button */}

          {isExpanded ? "Collapse" : "Expand"}

          {/* Description */}

          {isExpanded && (
            <>
              <div className="grid gap-1">
                {recipe.usedIngredients.map((item) => (
                  <div>{item.originalName}</div>
                ))}
              </div>
              <p className="mt-2">{recipeData.description}</p>
              <p>Description</p>
              <p>{removeTags(recipeData.instructions)}</p>
            </>
          )}
        </div>
      </button>
    </>
  );
};

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
