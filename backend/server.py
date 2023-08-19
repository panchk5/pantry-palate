from flask import Flask, jsonify, request
from flask_cors import CORS
import time
import base64
import io
import os

app = Flask(__name__)
CORS(app)

upload_folder = './assets'

from vision import image_ai
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
    