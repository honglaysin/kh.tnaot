import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomeZh from "./pages/zh/HomeZh";
import ServicesZh from "./pages/zh/ServicesZh";
import AboutZh from "./pages/zh/AboutZh";
import ContactZh from "./pages/zh/ContactZh";

import { LangProvider } from "./context/langContext";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <Routes>
      {/* English */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Chinese */}
      <Route path="/zh" element={<HomeZh />} />
      <Route path="/zh/services" element={<ServicesZh />} />
      <Route path="/zh/about" element={<AboutZh />} />
      <Route path="/zh/contact" element={<ContactZh />} />
    </Routes>
  );
}

function App() {
  return (
    <LangProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <ScrollToTop />
          <main className="flex-1 pt-20">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </LangProvider>
  );
}

export default App;
