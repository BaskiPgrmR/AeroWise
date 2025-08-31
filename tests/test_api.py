import json
from backend.app import app

def test_home():
    client = app.test_client()
    res = client.get("/")
    assert res.status_code == 200
    assert b"Welcome" in res.data

def test_predict():
    client = app.test_client()
    res = client.post("/predict", json={"days": 3})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert "aqi_predictions" in data
