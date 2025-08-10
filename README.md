# AeroWise — AI-Powered Environmental Intelligence for Urban Real Estate

**AeroWise** is a web-based dashboard that brings environmental intelligence into real estate decision-making.

In many cities, property evaluations focus on price, location, and amenities—while overlooking crucial ecological indicators like air quality and green cover. These factors directly affect public health, urban sustainability, and long-term property value.

AeroWise fills this gap by combining real-time and historical environmental data with geospatial analysis and machine learning. The platform empowers citizens, investors, and urban planners to make informed, sustainability-driven choices.

---

## Key Features

### Geospatial Visualization
- Interactive map showing pollution (AQI) and vegetation (NDVI) data.
- Zoom into specific plots, districts, or regions.
- Toggle multiple layers to compare environmental indicators.

### Air Quality Forecasting
- Predicts future AQI trends using Facebook Prophet and LSTM neural networks.
- Accounts for historical patterns and seasonal variations.

### Green Score Calculator
- Aggregates AQI, NDVI, and optionally noise or traffic data.
- Produces a single ecological health score for any location.

### Environment-Aware Recommendations
- Suggests plots or neighborhoods with better environmental profiles.
- Helps prioritize green zones and sustainable development.

---

## Data Sources

| Source               | Description                                                  |
|----------------------|--------------------------------------------------------------|
| OpenAQ API           | Real-time and historical air quality data                    |
| Google Earth Engine  | NDVI and satellite imagery                                   |
| GIS Shapefiles       | Urban boundaries, land use types, and zoning information     |

---

## Technology Stack

### Frontend
- **React.js** - Interactive dashboard interface
- **Leaflet / Mapbox** - Geospatial map rendering

### Backend
- **Python (Flask)** - API handling and ML model integration
- **Node.js** (optional) - Lightweight API or parallel processing

### Machine Learning & Data Science
- **Prophet** - Time-series AQI prediction
- **TensorFlow/Keras LSTM** - Deep learning-based forecasting
- **Pandas / NumPy** - Data cleaning and preprocessing

### Geospatial Tools
- **Google Earth Engine (JavaScript API)** - Large-scale geospatial processing
- **GeoPandas** - Python-based spatial operations
- **QGIS** - Manual spatial analysis and validation

---

## How It Works

1. **Data Collection**
   - AQI data from OpenAQ API
   - NDVI and imagery from Google Earth Engine
   - GIS shapefiles for zoning and boundaries

2. **Data Preprocessing**
   - Clean and normalize AQI and NDVI datasets
   - Align data with urban zones using spatial joins
   - Interpolate missing values for accuracy

3. **Model Training & Prediction**
   - Train Prophet and LSTM models on historical AQI
   - Use rolling window validation to capture seasonal trends

4. **Green Score Calculation**
   - Normalize AQI and NDVI to a common scale
   - Aggregate using weighted scoring to produce a composite score

5. **Visualization & Interaction**
   - Render maps, charts, and tables in the frontend
   - Search plots, toggle layers, and view AQI forecasts
   - Recommend areas based on user-defined criteria

---

## Why It Matters

Cities are growing rapidly, but environmental quality is often left out of planning and investment decisions. AeroWise helps:

- Make smarter investments based on ecological health
- Compare neighborhoods by air quality and green cover—not just cost
- Support urban planning that prioritizes livable, sustainable environments

By merging AI, geospatial analytics, and environmental science, AeroWise enables a data-driven approach to building healthier cities.

---

## License

This project is licensed under the [MIT License](LICENSE).
