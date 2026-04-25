import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonationsPage from "./pages/DonationsPage";
import MapPage from "./pages/MapPage";
import { DonationProvider } from "./context/DonationContext";

function App() {
  return (
    <DonationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DonationsPage />} />
          <Route path="/mapa" element={<MapPage />} />
        </Routes>
      </Router>
    </DonationProvider>
  );
}

export default App;