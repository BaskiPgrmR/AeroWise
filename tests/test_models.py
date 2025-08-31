import os

def test_models_exist():
    assert os.path.exists("models/aqi_prophet_model.pkl")
    assert os.path.exists("models/scaler.pkl")
