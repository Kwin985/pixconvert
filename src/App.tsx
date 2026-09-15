import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import RouteTracker from "@/components/RouteTracker";
import Home from "@/pages/Home";
import Compare from "@/pages/Compare";
import FAQ from "@/pages/FAQ";
import ToWebP from "@/pages/ToWebP";
import ToAVIF from "@/pages/ToAVIF";
import ToJPG from "@/pages/ToJPG";
import ToPNG from "@/pages/ToPNG";
import ToSVG from "@/pages/ToSVG";

export default function App() {
  return (
    <Router>
      <RouteTracker />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/to-webp" element={<ToWebP />} />
          <Route path="/to-avif" element={<ToAVIF />} />
          <Route path="/to-jpg" element={<ToJPG />} />
          <Route path="/to-png" element={<ToPNG />} />
          <Route path="/to-svg" element={<ToSVG />} />
        </Route>
      </Routes>
    </Router>
  );
}