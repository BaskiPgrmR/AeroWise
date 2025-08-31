# AeroWise — AI-Powered Environmental Intelligence for Urban Real Estate

**AeroWise** is a design project developed to integrate environmental intelligence into real estate decision-making.  

In most cities, property evaluations focus on price, location, and amenities. However, ecological indicators such as air quality and green cover are often overlooked, despite their significant impact on public health, sustainability, and long-term property value.  

This project addresses this gap by combining real-time and historical environmental data with geospatial analysis and machine learning. The result is a dashboard that empowers citizens, investors, and urban planners to make informed, sustainability-oriented decisions.

---

## Project Objectives

- Develop a web-based dashboard that visualizes air quality and green cover data.  
- Implement machine learning models to forecast Air Quality Index (AQI) trends.  
- Design a "green score" metric to evaluate ecological health at plot or neighborhood levels.  
- Provide recommendations for environmentally sustainable real estate development.  

---

## Key Features

### Geospatial Visualization
- Interactive map displaying pollution (AQI) and vegetation (NDVI) data.  
- Ability to zoom into specific plots, districts, or regions.  
- Layer toggles for comparing multiple environmental indicators.  

### Air Quality Forecasting
- AQI predictions using Facebook Prophet and LSTM neural networks.  
- Incorporates historical data and seasonal variations.  

### Green Score Calculator
- Combines AQI, NDVI, and optionally noise/traffic data.  
- Produces a composite ecological health score for a location.  

### Environment-Aware Recommendations
- Suggests plots or neighborhoods with better environmental profiles.  
- Highlights sustainable zones for residential or commercial development.  

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
- React.js for interactive dashboard interface  
- Leaflet / Mapbox for geospatial visualization  

### Backend
- Python (Flask) for API handling and ML model integration  
- Node.js (optional) for lightweight APIs or parallel processing  

### Machine Learning & Data Science
- Prophet for time-series AQI forecasting  
- TensorFlow/Keras LSTM for deep learning predictions  
- Pandas / NumPy for data cleaning and preprocessing  

### Geospatial Tools
- Google Earth Engine (JavaScript API) for satellite imagery processing  
- GeoPandas for spatial operations in Python  
- QGIS for manual spatial validation and analysis  

---

## System Workflow

1. **Data Collection**  
   - AQI data via OpenAQ API  
   - NDVI and imagery from Google Earth Engine  
   - GIS shapefiles for zoning and boundaries  

2. **Data Preprocessing**  
   - Cleaning and normalization of AQI and NDVI datasets  
   - Spatial alignment of data with urban boundaries  
   - Handling missing values through interpolation  

3. **Model Training & Prediction**  
   - Training Prophet and LSTM models on AQI history  
   - Rolling window validation for seasonal effects  

4. **Green Score Calculation**  
   - Normalization of AQI and NDVI  
   - Weighted aggregation into a composite ecological score  

5. **Visualization & Interaction**  
   - Maps, charts, and tables rendered in the frontend  
   - Layer toggling, forecast visualization, and recommendation output  

---

## Impact and Relevance

As urbanization accelerates, environmental factors are often neglected in planning and investment decisions. AeroWise demonstrates how AI and geospatial intelligence can support:  

- Smarter property investment choices based on ecological indicators.  
- Comparison of neighborhoods beyond cost and amenities.  
- Urban planning aligned with health, sustainability, and livability.  

By merging artificial intelligence, geospatial analytics, and environmental science, this project showcases a data-driven approach to building healthier and more sustainable cities.  

---

## Team and Contributions

This project was developed as part of a university design project by a three-member team:  

- **Frontend Engineer**: UI/UX design, dashboard implementation, map integration.  
- **ML & Backend Developer**: AQI forecasting models, API development.  
- **Data & GIS Specialist**: Data collection, preprocessing, geospatial analysis.  

---

## License

This project is licensed under the [MIT License](LICENSE).  

