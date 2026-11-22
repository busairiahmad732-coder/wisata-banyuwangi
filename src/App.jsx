import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tentang from "./pages/Tentang";
import Navbar from "./componen/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./componen/Footer";

import Beranda from "./pages/Beranda";
import AirTerjun from "./pages/wisata/AirTerjun";
import Danau from "./pages/wisata/Danau";
import Hutan from "./pages/wisata/Hutan";
import Pantai from "./pages/wisata/Pantai";
import Pegunungan from "./pages/wisata/Pegunungan";
import Savana from "./pages/wisata/Savana";

import ScrollToTop from "./componen/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />


        <Route path="/wisata/air-terjun" element={<AirTerjun />} />
        <Route path="/wisata/pegunungan" element={<Pegunungan />} />
        <Route path="/wisata/pantai" element={<Pantai />} />
        <Route path="/wisata/savana" element={<Savana />} />
        <Route path="/wisata/hutan" element={<Hutan />} />
        <Route path="/wisata/danau" element={<Danau />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App