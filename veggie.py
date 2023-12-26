from flask import Flask, render_template, request, jsonify
import tensorflow as tf
from PIL import Image
import numpy as np
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(
    app, resources={r"/*": {"origins": "https://multiclass-classification.vercel.app"}}
)

loaded_veggie_model = tf.keras.models.load_model("models/veggie.h5")
unique_veggies = [
    "apple",
    "banana",
    "beetroot",
    "bell pepper",
    "cabbage",
    "capsicum",
    "carrot",
    "cauliflower",
    "chilli pepper",
    "corn",
    "cucumber",
    "eggplant",
    "garlic",
    "ginger",
    "grapes",
    "jalepeno",
    "kiwi",
    "lemon",
    "lettuce",
    "mango",
    "onion",
    "orange",
    "paprika",
    "pear",
    "peas",
    "pineapple",
    "pomegranate",
    "potato",
    "raddish",
    "soy beans",
    "spinach",
    "sweetcorn",
    "sweetpotato",
    "tomato",
    "turnip",
    "watermelon",
]


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/classifyveggie", methods=["POST"])
def classify_veggie():
    if request.method == "POST" and "image" in request.files:
        uploaded_file = request.files["image"]
        img = Image.open(uploaded_file)
        img = img.resize((224, 224))
        img_array = tf.keras.utils.img_to_array(img)
        img_array = tf.expand_dims(img_array, 0)  # Create a batch

        predictions = loaded_veggie_model.predict(img_array)
        score = tf.nn.softmax(predictions[0])
        predicted_veggie = unique_veggies[np.argmax(score)]

        return jsonify({"predicted_veggie": predicted_veggie})

    return jsonify({"error": "Invalid request"})


if __name__ == "__main__":
    app.run()
