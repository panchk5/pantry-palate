# import os
# import requests
# key = os.getenv("SPOON_API_KEY")

# API_URL = "https://api.spoonacular.com/recipes/complexSearch"

# # food_list = ["beef", "tomato"]

# def make_recipe(food_list):
#     headers = {"Content-Type": "application/json"}
#     params = {
#         "ingredients": ",".join(food_list),
#         "number": 1,
#         "apiKey": key,
#         "instructionsRequired": True,
#         "addRecipeInformation": True,
#     }

#     response = requests.get(API_URL, headers=headers, params=params)
#     recipeData = response.json()
#     return recipeData


import os
import requests
key = os.getenv("SPOON_API_KEY")

API_URL = "https://api.spoonacular.com/recipes/findByIngredients"

# food_list = ["beef", "tomato"]


def make_recipe(food_list):
    headers = {"Content-Type": "application/json"}
    params = {
        "ingredients": ",".join(food_list),
        "number": 1,
        "apiKey": key,
        "instructionsRequired": True,
        "addRecipeInformation": True,
        "ranking": 1,
        "sort": "min-missing-ingredients",
    }

    response = requests.get(API_URL, headers=headers, params=params)
    recipeData = response.json()
    return recipeData
