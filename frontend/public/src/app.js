import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Forecast from "./components/Forecast";
import Recommender from "./components/Recommender";
import GreenScorePage from "./pages/GreenScorePage";
import DataSourcesPage from "./pages/DataSourcesPage";
import AboutPage from "./pages/AboutPage";

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

