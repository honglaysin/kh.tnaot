import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const Services: React.FC = () => {
  const [lang, setLang] = useState<"en" | "cn">("en");
  const [showGoUp, setShowGoUp] = useState<boolean>(false);

  // Dynamic total images based on language
  const totalImages = lang === "en" ? 55 : 53;

  const adImages = Array.from(
    { length: totalImages },
    (_, i) => `/ads/ads-${lang}/page-${i + 1}.jpg`
  );

  // Show "Go Up" button after scrolling past the 3rd image
  useEffect(() => {
    const handleScroll = () => {
      const thirdImageOffset =
        document.getElementById("ad-image-3")?.offsetTop || 0;
      setShowGoUp(window.scrollY > thirdImageOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">

        {/* Language Toggle + Banner */}
       <section className="bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white py-8">
          <div className="w-[100%] mx-auto px-4 flex items-center justify-between">
            
            {/* Left: empty space to balance layout */}
            <div className="flex-1"></div>

            {/* Center: Title & Paragraph */}
            <div className="flex-1 text-center">
              <h1 className="text-3xl md:text-4x1 font-bold mb-2">
                TNAOT Media Advertising Solutions
              </h1>
              <p className="text-lg md:text-xl">
                Multi-channel precision targeting of local users for brand exposure and efficient conversion
              </p>
            </div>

            {/* Right: Language Toggle */}
            <div className="flex-1 flex justify-end">
              <button
                className="px-4 sm:px-6 md:px-10 py-2 rounded-full text-sm md:text-base font-medium border border-white bg-transparent text-white hover:bg-white hover:text-red-500 transition-colors whitespace-nowrap"
                onClick={() => setLang(lang === "en" ? "cn" : "en")}
              >
                {lang === "en" ? "简体中文" : "English"}
              </button>
            </div>

          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white mt-5">
          <div className="w-[75%] mx-auto">
            <img
              src={`/ads/ads-${lang}/page-1.jpg`}
              alt="Hero"
              className="w-full object-cover shadow"
            />
          </div>
        </section>

        {/* Ads Images */}
        <section className="bg-white">
          {adImages.slice(1).map((src, index) => (
            <div
              key={index}
              id={index === 2 ? "ad-image-2" : undefined} // mark the 3rd image
              className="w-[75%] mx-auto"
            >
              <img
                src={src}
                alt={`Advertisement ${index + 2}`}
                className="w-full object-cover shadow-lg"
              />
            </div>
          ))}
        </section>

        {/* Go Up Button */}
        {showGoUp && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8  text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#FF6B6B] transition-all text-lg"
          >
            <img src="/logo/up-icon.png" 
            className="w-6 h-6 mx-auto"
            alt="" />
            <img src="/logo/logo.png" 
            className="w-6 h-6 mx-auto"
            alt="" />
          </button>
        )}

      </main>
    </>
  );
};

export default Services;
