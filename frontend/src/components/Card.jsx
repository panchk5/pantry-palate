import React, { useState } from "react";

const Card = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [recipeData, setRecipeData] = useState(null);

  const toggleCard = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/get-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipe_id: recipe.id }),
      });

      if (response.ok) {
        console.log("Info sent successfully");
      } else {
        alert("Error sending info to the server");
        console.error("Error sending info to the server");
      }

      const _data = await response.json();

      console.log("-----");
      console.log(_data);
      console.log("-----");

      // Format instructions with space between sentences
      if (_data?.instructions) {
        const formattedInstructions = _data.instructions.replace(/\.\s/g, ".\n\n");
        setRecipeData({ ..._data, instructions: formattedInstructions });
      }

      setIsExpanded(!isExpanded);
    } catch (error) {
      console.error("Error sending image data:", error);
    }
  };

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  }
  // if (!accomodation) {
  //   return (
  //     <>
  //       <button
  //         onClick={toggleCard}
  //         className=" bg-white p-5 w-full rounded-2xl mb-5"
  //       >
  //         <div className={`recipe-card   ${isExpanded ? "expanded" : ""}`}>
  //           <div
  //             className="recipe-image h-[200px] w-[200px]"
  //             style={backgroundImageStyle}
  //           ></div>
  //           <br />
  //           <h3 className="font-bold">{recipe.title}</h3>
  //           {/* Toggle button */}

  return (
    <button
      onClick={toggleCard}
      className="bg-white p-5 w-full rounded-2xl mb-5 overflow-hidden"
    >
      <div className={`recipe-card ${isExpanded ? "expanded" : ""}`}>
        <div
          className="recipe-image h-32 w-32 rounded-full mx-auto mb-3"
          style={{
            backgroundImage: `url(${recipe.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <h3 className="font-bold text-2xl text-center mb-1">{recipe.title}</h3>
        <div className="text-center mb-2">
          {isExpanded ? "" : "Expand"}
        </div>
        {isExpanded && (
          <>
            <div className="grid gap-1">
              <h1 className="font-bold text-xl my-4">Ingredients</h1>
              {recipe.usedIngredients.map((item, index) => (
                <div className="text-left" key={index}>• {item.originalName}</div>
              ))}
            </div>
            <p className="mt-4">{recipeData?.description}</p>
            <h1 className="font-bold text-xl mt-8">Instructions</h1>
            <p className="text-left my-4 whitespace-pre-line">
              {removeTags(recipeData?.instructions)}
            </p>
          </>
        )}
      </div>
    </button>
  );
};

export default Card;
