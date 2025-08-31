import requests
import pandas as pd

URL = "https://api.openaq.org/v2/latest?city=Delhi"

def fetch_data():
    response = requests.get(URL)
    data = response.json()
    results = []
    for r in data["results"]:
        results.append({
            "location": r["location"],
            "city": r["city"],
            "country": r["country"],
            "aqi": r["measurements"][0]["value"]
        })
    df = pd.DataFrame(results)
    df.to_csv("data/raw/aqi_latest.csv", index=False)
    print("Saved latest AQI data to data/raw/aqi_latest.csv")

if __name__ == "__main__":
    fetch_data()
