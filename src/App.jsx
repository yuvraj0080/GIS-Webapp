import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/home/layout";
import SpatialAnalysisLayout from "./components/spatial-analysis/Layout";

function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/spatial-analysis" element={<SpatialAnalysisLayout />} />
      </Routes>

  );
}

export default App;
