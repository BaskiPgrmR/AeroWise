import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Forecast from "./components/Forecast.jsx";
import Recommender from "./components/Recommender.jsx";
import GreenScorePage from "./pages/GreenScorePage.jsx";
import DataSourcesPage from "./pages/DataSourcesPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/recommender" element={<Recommender />} />
          <Route path="/greenscore" element={<GreenScorePage />} />
          <Route path="/datasources" element={<DataSourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

