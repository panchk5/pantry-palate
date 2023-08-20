from flask import Flask, jsonify, request
from flask_cors import CORS
import time
import base64
import io
import os
import json
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)
CORS(app, origins=["http://localhost:5173"])

upload_folder = './assets'

from vision import image_ai
from recipe import make_recipe, get_recipe, find_recipe

@app.route('/upload-image', methods=['POST'])
def handle_image_upload():
    try:      
        data = request.json
        image_data = data['imageData']
        decoded_data = base64.b64decode(image_data.split(',')[1])

        image_name = f'uploaded_image_.jpg'
        image_path = os.path.join(upload_folder, image_name)
        with open(image_path, 'wb') as f:
            f.write(decoded_data)

        # returns as json
        result = image_ai('./assets/test_image.jpg')
        
        return result
        # return jsonify({'message': 'Image uploaded and processed successfully'})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    


@app.route('/scan-image', methods=['POST'])
def retrieve_ingred(image_path):
        result = image_ai(image_path)
        return image_ai

    
@app.route('/retrieve-info', methods= ['POST'])
def retrieve_recipe():
    try:
        data = request.json
        print(f"{data=}")
        recipe_list = data['recipeData']

        result = make_recipe(recipe_list)
        return json.dumps(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/get-recipe', methods= ['POST'])
def get_recipe_route():
    try:
        data = request.json
        recipe_id = data['recipe_id']

        result = get_recipe(recipe_id)
        return json.dumps(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@app.route('/retrieve-recipe-with-restrictions', methods= ['POST'])
def retrieve_recipe_with_restrictions():
    try:
        data = request.json

        diet = str(data['diet'])
        intolerances = str(data['intolerances'])

        result = find_recipe(diet, intolerances)
        return json.dumps(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# @app.route('/chatbot', methods=['POST'])
# def retrieve_ingred():
#     try:
#         api_key = "VF.DM.64de5b79aa29af0007d93ee5.rnjQQkq2Rpp9DyPt"  # Replace with your Voiceflow API key

#         user_id = "user_123"  # Unique ID used to track conversation state

#         data = request.get_json()
#         message = data.get('message', '')


#         body = {"action": {"type": "text", "payload": message}}  # Use the actual message

#         response = requests.post(
#             f"https://general-runtime.voiceflow.com/state/user/{user_id}/interact",  # Update the endpoint
#             json=body,
#             headers={"Authorization": api_key},
#         )
        
#         response_data = response.json()  # Get the JSON content from the response
#         return jsonify(response_data)  # Return the JSON response
        
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
