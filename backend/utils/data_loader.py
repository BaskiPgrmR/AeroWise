import pandas as pd

def load_aqi_data(path="data/processed/aqi_data.csv"):
    return pd.read_csv(path)

def load_ndvi_data(path="data/processed/ndvi_data.csv"):
    return pd.read_csv(path)
