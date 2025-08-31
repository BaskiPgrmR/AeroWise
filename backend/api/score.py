import joblib
import numpy as np
from flask import request, jsonify

# Load scaler & score model
try:
    scaler = joblib.load("models/scaler.pkl")
    score_model = joblib.load("models/green_score_model.pkl")
except:
    scaler, score_model = None, None

def calculate_green_score():
    data = request.get_json()
    aqi = data.get("aqi", 60)
    ndvi = data.get("ndvi", 0.4)

    features = np.array([[aqi, ndvi]])

    if scaler and score_model:
        features = scaler.transform(features)
        score = score_model.predict(features)[0]
    else:
        # Simple rule-based score
        score = (100 - aqi) * 0.6 + (ndvi * 100) * 0.4

    return jsonify({"aqi": aqi, "ndvi": ndvi, "green_score": round(score, 2)})
