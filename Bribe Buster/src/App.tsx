// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ReportPage from './pages/ReportPage';
import MapPage from './pages/MapPage';
import { BribeProvider } from './context/BribeContext';

export default function App() {
  return (
    <BribeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </BribeProvider>
  );
}