from flask import Flask
from backend.api.predict import predict_aqi
from backend.api.score import calculate_green_score

app = Flask(__name__)

@app.route("/")
def home():
    return {"message": "Welcome to AeroWise API"}

# Register endpoints
app.add_url_rule("/predict", "predict", predict_aqi, methods=["POST"])
app.add_url_rule("/score", "score", calculate_green_score, methods=["POST"])

if __name__ == "__main__":
    app.run(debug=True)
