import os
import requests
import json
from dotenv import load_dotenv
load_dotenv()
key = os.getenv("SPOON_API_KEY")

API_URL = "https://api.spoonacular.com/recipes/findByIngredients"

# food_list = ['chicken', 'carrot', 'potato']

def make_recipe(food_list):
    print(food_list)
    headers = {"Content-Type": "application/json"}
    params = {
        "ingredients": ",".join(x["name"] for x in food_list),
        "number": 5,
        "apiKey": key,
        "instructionsRequired": True,
        "addRecipeInformastion": True,
        "ranking": 1,
        "sort": "min-missing-ingredients",
    }

    response = requests.get(API_URL, headers=headers, params=params)
    recipeData = response.json()

    return recipeData

# print(make_recipe(food_list))

# import os
# import requests
# key = os.getenv("SPOON_API_KEY")

# API_URL = "https://api.spoonacular.com/recipes/findByIngredients"

# # food_list = ["beef", "tomato"]


# def make_recipe(food_list):
#     headers = {"Content-Type": "application/json"}
#     params = {
#         "ingredients": ",".join(food_list),
#         "number": 1,
#         "apiKey": key,
#         "instructionsRequired": True,
#         "addRecipeInformation": True,
#         "ranking": 1,
#         "sort": "min-missing-ingredients",
#     }

#     response = requests.get(API_URL, headers=headers, params=params)
#     recipeData = response.json()
#     return recipeData
