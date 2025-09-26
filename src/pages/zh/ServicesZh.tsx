import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ServicesZh: React.FC = () => {
  const [showGoUp, setShowGoUp] = useState<boolean>(false);

  const totalImages = 53;
  const adImages = Array.from(
    { length: totalImages },
    (_, i) => `/ads/ads-cn/page-${i + 1}.jpg`
  );

  useEffect(() => {
    const handleScroll = () => {
      const thirdImageOffset = document.getElementById("ad-image-3")?.offsetTop || 0;
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

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white py-8">
          <div className="w-[100%] mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              TNAOT 媒体广告解决方案
            </h1>
            <p className="text-lg md:text-xl">
              精准多渠道投放，覆盖本地用户，实现品牌曝光与高效转化
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-white mt-5">
          <div className="w-[75%] mx-auto">
            <img src="/ads/ads-cn/page-1.jpg" alt="Hero" className="w-full object-cover shadow" />
          </div>
        </section>

        {/* Ads Images */}
        <section className="bg-white">
          {adImages.slice(1).map((src, index) => (
            <div
              key={index}
              id={index === 2 ? "ad-image-3" : undefined}
              className="w-[75%] mx-auto my-4"
            >
              <img src={src} alt={`Advertisement ${index + 2}`} className="w-full object-cover shadow-lg" />
            </div>
          ))}
        </section>

        {/* Go Up Button */}
        {showGoUp && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#FF6B6B] transition-all text-lg"
          >
            <img src="/logo/up-icon.png" className="w-6 h-6 mx-auto" alt="Up" />
          </button>
        )}

      </main>
    </>
  );
  <Footer />
};

export default ServicesZh;
