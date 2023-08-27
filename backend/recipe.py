import os
import requests
import json
from dotenv import load_dotenv
load_dotenv()
key = os.getenv("SPOON_API_KEY")

API_URL = "https://api.spoonacular.com/recipes/findByIngredients"

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

def get_recipe(id):
    recipe_url = "https://api.spoonacular.com/recipes/" + str(id) + "/information" 
    headers = {"Content-Type": "application/json"}
    params = {
        "apiKey": key,
    }

    response = requests.get(recipe_url, headers=headers, params=params)
    recipeData = response.json()

    return recipeData

def find_recipe(diet, intolerances):
    headers = {"Content-Type": "application/json"}
    params = {
        "apiKey": key,
        "instructionsRequired": True,
        "addRecipeInformation": True,
        "diet": diet,
        "intolerances": intolerances,
    }

    response = requests.get('https://api.spoonacular.com/recipes/complexSearch', headers=headers, params=params)
    recipeData = response.json()

    return recipeData