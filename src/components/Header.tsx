import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLang } from "../context/langContext"; // note: your lowercase langContext

const logoPath = "/logo/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = lang === "zh"
    ? ["/zh", "/zh/services", "/zh/about", "/zh/contact"]
    : ["/", "/services", "/about", "/contact"];

  const labels = lang === "zh"
    ? ["首页", "服务", "关于我们", "联系我们"]
    : ["Home", "Services", "About", "Contact"];

  const toggleLang = () => {
    if (lang === "en") {
      setLang("zh");
      navigate("/zh" + (location.pathname === "/" ? "" : location.pathname));
    } else {
      setLang("en");
      const enPath = location.pathname.replace(/^\/zh/, "") || "/";
      navigate(enPath);
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] shadow-lg backdrop-blur-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to={lang === "zh" ? "/zh" : "/"} className="flex items-center space-x-2">
            <img src={logoPath} alt="Logo" className="h-8 w-auto" />
            <span className={`text-2xl font-bold ${isScrolled ? "text-white" : "text-gray-900"}`}>
              TNAOT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((path, idx) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors duration-200 ${
                  isActive(path)
                    ? isScrolled
                      ? "text-white font-semibold"
                      : "text-[#E53E3E] font-semibold"
                    : isScrolled
                    ? "text-white/80 hover:text-white"
                    : "text-gray-700 hover:text-[#E53E3E]"
                }`}
              >
                {labels[idx]}
              </Link>
            ))}

            <button
              onClick={toggleLang}
              className="px-3 py-2 rounded-md border text-sm"
            >
              {lang === "en" ? "简体中文" : "English"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-white" : "text-gray-900"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-white" : "text-gray-900"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navLinks.map((path, idx) => (
                <Link
                  key={path}
                  to={path}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    isActive(path)
                      ? "text-[#E53E3E] font-semibold"
                      : "text-gray-700 hover:text-[#E53E3E]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {labels[idx]}
                </Link>
              ))}
              <button
                onClick={toggleLang}
                className="block w-full text-left px-3 py-2 border rounded-lg"
              >
                {lang === "en" ? "简体中文" : "English"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
