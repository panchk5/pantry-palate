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
from recipe import make_recipe

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
        recipe_list = str(data['recipeData'])

        result = make_recipe(recipe_list)
        return json.dumps(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500



if __name__ == "__main__":
    app.run(debug=True)
