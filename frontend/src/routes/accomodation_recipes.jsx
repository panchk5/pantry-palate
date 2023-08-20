// import { useContext, useRef, useState } from "react";
// import { RecipeData } from "../components/context";
// import { useNavigate } from "react-router-dom";

// export default function AccomodationRecipe() {
//   const { recipeData, setRecipeData } = useContext(RecipeData); //use it on the next page
//   if (!recipeData) {
//     return <div>Loading...</div>;
//   }

//   console.log(recipeData.results);

//   function Card({ data }) {
//     return (
//       <>
//         <p>{data}</p>
//       </>
//     );
//   }

//   return (
//     <>
//       <p> THIS BETTER WORK...</p>
//       <p>{JSON.stringify(recipeData.results)}</p>

//       {/* {recipeData.map((recipe) => {
//         <Card data={recipeData.results} id={recipeData.results.id} />;
//       })} */}
//     </>
//   );
// }

import Card from "../components/Card";

import { useContext } from "react";
import { RecipeData } from "../components/context";

export default function AccommodationRecipe() {
  const { recipeData } = useContext(RecipeData);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  // function Card({ data }) {
  //   return (
  //     <>
  //       <p>{data.id}</p>
  //       <p>{data.title}</p>
  //       {/* Other fields you want to display */}
  //     </>
  //   );
  // }

  return (
    <>
      <p>THIS BETTER WORK...</p>
      {recipeData?.results &&
        recipeData.results.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} accomodation={true} />
        ))}
    </>
  );
}
