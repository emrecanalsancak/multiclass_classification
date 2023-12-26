from flask import Flask, render_template, request, jsonify
import tensorflow as tf
import pickle
from flask_cors import CORS  # Import CORS
from keras.layers import TextVectorization


app = Flask(__name__)
CORS(
    app, resources={r"/*": {"origins": "https://multiclass-classification.vercel.app"}}
)

loaded_toxic_model = tf.keras.models.load_model("models/toxicity.h5")

from_disk = pickle.load(open("models/tv_layer.pkl", "rb"))
new_v = TextVectorization.from_config(from_disk["config"])
# You have to call `adapt` with some dummy data (BUG in Keras)
new_v.adapt(tf.data.Dataset.from_tensor_slices(["xyz"]))
new_v.set_weights(from_disk["weights"])


@app.route("/")
def index():
    return render_template("index.html")


def toxicity_classifier(comment):
    vectorized_comment = new_v([comment])
    results = loaded_toxic_model.predict(vectorized_comment)
    tox = [
        "Toxicity",
        "Severe toxicity",
        "Obscene",
        "Threat",
        "Insult",
        "Identity hate",
    ]
    tox_dict = {}
    for idx, col in enumerate(tox):
        confidence_percentage = round(results[0][idx] * 100, 2)
        # Convert numpy.bool_ to native Python bool
        is_toxic = bool(results[0][idx] > 0.45)
        tox_dict[col] = [is_toxic, confidence_percentage]

    return tox_dict


@app.route("/toxicity", methods=["POST"])
def classify_toxicity():
    if request.method == "POST" and request.is_json:
        data = request.get_json()
        if "comment" in data:
            comment = data["comment"]
            # Call the toxicity classifier method
            toxicity_results = toxicity_classifier(comment)
            # Convert numpy.bool_ to native Python bool in the response
            for key, value in toxicity_results.items():
                value[0] = bool(value[0])
            response_data = {"toxicity_results": toxicity_results}
            print("Server Response:", response_data)  # Log the response
            # Return the toxicity results as a string
            return jsonify(response_data)

    return jsonify({"error": "Invalid request"})


app = app
