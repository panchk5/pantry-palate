from flask import Flask, jsonify, request
from flask_cors import CORS
import time
import base64
import io
import os

app = Flask(__name__)
CORS(app)