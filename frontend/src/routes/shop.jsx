import { useContext, useRef, useState } from "react";
import { RecipeData } from "../components/context";
import { useNavigate } from "react-router-dom";

const predefinedAllergies = [
  {
    name: "Peanuts",
    emoji: "🥜",
  },
  {
    name: "Tree Nuts",
    emoji: "🌰",
  },
  {
    name: "Dairy",
    emoji: "🥛",
  },
  {
    name: "Eggs",
    emoji: "🥚",
  },
  {
    name: "Wheat",
    emoji: "🌾",
  },
  {
    name: "Soy",
    emoji: "🫘",
  },
  {
    name: "Shellfish",
    emoji: "🦀",
  },
  {
    name: "Tomato",
    emoji: "🍅",
  },
  {
    name: "Shrimp",
    emoji: "🦐",
  },
];

function Restriction({ name, selectedRestrictions, setSelectedRestrictions }) {
  return (
    <button
      className={`p-2 rounded-xl text-sm border border-gray-300 transition-all ${
        selectedRestrictions.includes(name)
          ? "bg-primary text-white"
          : "bg-white"
      }`}
      onClick={() => {
        if (selectedRestrictions.includes(name)) {
          setSelectedRestrictions(
            selectedRestrictions.filter((item) => item !== name)
          );
        } else {
          setSelectedRestrictions([...selectedRestrictions, name]);
        }
      }}
    >
      {name}
    </button>
  );
}

function Allergy({ name, emoji, selectedAllergies, setSelectedAllergies }) {
  return (
    <button
      className={`p-2 rounded-xl text-sm border border-gray-300 transition-all ${
        selectedAllergies.includes(name) ? "bg-primary text-white" : "bg-white"
      }`}
      onClick={() => {
        if (selectedAllergies.includes(name)) {
          setSelectedAllergies(
            selectedAllergies.filter((item) => item !== name)
          );
        } else {
          setSelectedAllergies([...selectedAllergies, name]);
        }
      }}
    >
      <div className="text-3xl">{emoji}</div>
      {name}
    </button>
  );
}

export default function Shop() {
  const { recipeData, setRecipeData } = useContext(RecipeData);

  const [selectedRestrictions, setSelectedRestrictions] = useState([]);
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const [alergiesText, setAllergiesText] = useState("");

  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  const sendData = async () => {
    try {
      const csvAllergies = selectedAllergies.join(",");
      const csvRestrictions = selectedRestrictions.join(",");

      const response = await fetch(
        "http://127.0.0.1:5000/retrieve-recipe-with-restrictions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the correct content type
          },
          body: JSON.stringify({
            intolerances: csvAllergies,
            diet: csvRestrictions,
          }),
        }
      );

      if (response.ok) {
        console.log("Image data sent successfully");
      } else {
        console.error("Error sending image data to server");
        alert("Error sending image data to server");
      }

      const _data = await response.json();

      setRecipeData(_data);

      // redirect to recipe page
      navigate("/accomodation");
    } catch (error) {
      console.error("Error sending image data:", error);
    }
  };

  if (currentStep === 1) {
    return (
      <>
        {/* Show instructions and request camera permissions first */}
        <div className="lg:m-auto lg:max-w-[40%] mx-[10%] flex flex-col items-center">
          <img src="/img/food.png" className="h-32 mt-12 mb-20" />
          <h1 className="text-4xl font-medium text-white mb-4">Instructions</h1>
          <br />
          <div className="h-[3px] w-28 bg-white justify-center mb-8"></div>
          <div className=" flex flex-col gap-5 text-white mb-2 p-3">
            <p>1. Enter some prompts on dietary restrictions, and allergies</p>
            <p>2. Enter missing allergies, one ingredient per line!</p>
          </div>
        </div>

        <div className="fixed bottom-5 left-5 right-5 p-5 flex justify-between">
          <a className="bg-dark text-white rounded-full py-2 px-4" href="/">
            &lt;
          </a>

          <button
            className="px-4 py-2 bg-white text-bg text-sm rounded-full"
            onClick={() => setCurrentStep(2)}
          >
            Next →
          </button>
        </div>
      </>
    );
  } else if (currentStep === 2) {
    return (
      <div className="lg:m-auto lg:max-w-[40%] m-[10%]">
        <div className="bg-card rounded-3xl flex flex-row justify-start">
          <div className="bg-white grid gap-4 p-5 w-full rounded-2xl">
            <h1 className="font-bold text-xl text-primary">
              What are your dietary restrictions?
            </h1>
            <h3 className="text-sm">Select all that apply:</h3>

            <div className="grid gap-4">
              {/* restrictions */}

              <Restriction
                name="Gluten Free"
                selectedRestrictions={selectedRestrictions}
                setSelectedRestrictions={setSelectedRestrictions}
              />
              <Restriction
                name="Ketogenic"
                selectedRestrictions={selectedRestrictions}
                setSelectedRestrictions={setSelectedRestrictions}
              />
              <Restriction
                name="Vegetarian"
                selectedRestrictions={selectedRestrictions}
                setSelectedRestrictions={setSelectedRestrictions}
              />
              <Restriction
                name="Lacto-Vegetarian"
                selectedRestrictions={selectedRestrictions}
                setSelectedRestrictions={setSelectedRestrictions}
              />
              <Restriction
                name="Ovo-Vegetarian"
                selectedRestrictions={selectedRestrictions}
                setSelectedRestrictions={setSelectedRestrictions}
              />
              <Restriction
                name="Vegan"
                selectedRestrictions={selectedRestrictions}
                setSelectedRestrictions={setSelectedRestrictions}
              />
              <Restriction
                name="Pescetarian"
                selectedRestrictions={selectedRestrictions}
                setSelectedRestrictions={setSelectedRestrictions}
              />
            </div>
          </div>

          <div className="fixed bottom-5 left-5 right-5 p-5 flex justify-between">
            <button
              className="bg-dark text-white rounded-full py-2 px-4"
              onClick={() => setCurrentStep(1)}
            >
              &lt;
            </button>

            <button
              className="px-4 py-2 bg-white text-bg text-sm rounded-full"
              onClick={() => setCurrentStep(3)}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    );
  } else if (currentStep === 3) {
    return (
      <div className="lg:m-auto lg:max-w-[40%] m-[10%]">
        <div className="bg-card rounded-3xl flex flex-row justify-start">
          <div className="bg-white grid gap-4 p-5 w-full rounded-2xl">
            <h1 className="font-bold text-xl text-primary">
              What are your allergies?
            </h1>
            <h3 className="text-sm">Select all that apply:</h3>

            <div className="grid grid-cols-3 gap-4">
              {/* restrictions */}
              <Allergy
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                name="Peanuts"
                emoji="🥜"
              />
              <Allergy
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                name="Tree Nuts"
                emoji="🌰"
              />
              <Allergy
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                name="Dairy"
                emoji="🥛"
              />
              <Allergy
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                name="Eggs"
                emoji="🥚"
              />
              <Allergy
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                name="Wheat"
                emoji="🌾"
              />
              <Allergy
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                name="Soy"
                emoji="🫘"
              />
              <Allergy
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                name="Shellfish"
                emoji="🦀"
              />
              <Allergy
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                name="Tomato"
                emoji="🍅"
              />
              <Allergy
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                name="Shrimp"
                emoji="🦐"
              />
            </div>

            <h1>Any missing allergies?</h1>

            {/* dont list predefined allergies */}
            {selectedAllergies.map((item, index) => {
              if (predefinedAllergies.map((item) => item.name).includes(item)) {
                return null;
              }

              return (
                <div className="flex gap-4 justify-between m-3">
                  <div className="flex">• {item}</div>

                  <button
                    onClick={() => {
                      setSelectedAllergies(
                        selectedAllergies.filter((item, i) => i !== index)
                      );
                    }}
                    className="hover:bg-red-500 rounded-full transition-all hover:text-white flex flex-row justify-right"
                  >
                    ❌
                  </button>
                </div>
              );
            })}

            <input
              type="textarea"
              placeholder="Enter allergies, one per line"
              className="p-2 rounded-xl text-sm border border-gray-300 transition-all w-full"
              value={alergiesText}
              onChange={(e) => setAllergiesText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // make sure no duplicates
                  const allergies = alergiesText
                    .split("\n")
                    .filter((item) => item !== "")
                    .filter(
                      (item) =>
                        !selectedAllergies.includes(item) &&
                        !predefinedAllergies
                          .map((item) => item.name)
                          .includes(item)
                    );

                  setSelectedAllergies([...selectedAllergies, ...allergies]);
                  setAllergiesText("");
                }
              }}
            ></input>
          </div>

          <div className="fixed bottom-5 left-5 right-5 p-5 flex justify-between">
            <button
              className="bg-dark text-white rounded-full py-2 px-4"
              onClick={() => setCurrentStep(1)}
            >
              &lt;
            </button>

            <button
              className="px-4 py-2 bg-white text-bg text-sm rounded-full"
              onClick={() => sendData()}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    );
  }
}
