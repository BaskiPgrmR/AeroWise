import joblib
import numpy as np
from flask import request, jsonify

# Load Prophet model (pre-trained)
prophet_model = joblib.load("models/aqi_prophet_model.pkl")

def predict_aqi():
    data = request.get_json()
    days = data.get("days", 7)

    # For now, return dummy values
    forecast = [50 + np.random.randint(-10, 10) for _ in range(days)]

    return jsonify({"forecast_days": days, "aqi_predictions": forecast})
