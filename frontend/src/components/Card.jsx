import React, { useContext, useState } from "react";

const Card = ({ recipe, accomodation = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [recipeData, setRecipeData] = useState(null);

  const backgroundImageStyle = {
    backgroundImage: `url(${recipe.image})`,
    backgroundSize: "cover", // You can adjust this property as needed
  };

  console.log(recipe);

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
        console.log("Info sent succesfully");
      } else {
        alert("Error sending info to server");
        console.error("Error sending info to server");
      }

      const _data = await response.json();

      console.log("-----");
      console.log(_data);
      console.log("-----");

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
  if (!accomodation) {
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
  } else if (accomodation === true) {
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
                  {/* {recipe.usedIngredients.map((item) => (
                    <div>{item.originalName}</div>
                  ))} */}
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
  }
};

export default Card;
