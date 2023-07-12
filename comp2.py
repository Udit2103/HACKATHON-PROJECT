from flask_cors import CORS
import tensorflow as tf
from flask import Flask , render_template, request

import numpy as np
from PIL import Image

app = Flask(__name__)

CORS(app)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():


    # Load the pre-trained model
    model = tf.keras.applications.ResNet50(weights='imagenet')

    # Function to preprocess the image
    def preprocess_image(image_path):
        image = Image.open(image_path)
        image = image.resize((224, 224))
        image = tf.keras.applications.resnet50.preprocess_input(np.array(image))
        return image

    # Function to rate the outfit
    def rate_outfit(image_path):
        # Preprocess the image
        image = preprocess_image(image_path)

        # Reshape the image to match the model's input shape
        image = np.expand_dims(image, axis=0)

        # Use the pre-trained model to predict the outfit rating
        predictions = model.predict(image)
        rating = np.argmax(predictions)

        # Normalize the rating to a scale of 0 to 10
        normalized_rating = (rating / 999) * 10

        return normalized_rating
    file1 = request.files['image1']
    
    file1.save('comp/' + file1.filename)
    # Path to the outfit image
    image_path = 'comp/' + file1.filename

    # Rate the outfit image
    rating = rate_outfit(image_path)
    print(f"Outfit rating: {rating}/10")
    r=rating
    return "<html><body style='background-image:url('bck.jpg') ;'><h1 style='padding:10%'>THE COMPATIBILITY OF YOUR CLOTHS IS    "+str(r)+"</h1></body></html>"
if __name__ == '__main__':
    app.run(port=5000)