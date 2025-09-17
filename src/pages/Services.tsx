import React, { useState } from "react";
import Header from "../components/Header";

const TOTAL_IMAGES = 53; // number of base images

const Services: React.FC = () => {
  const [modalImage, setModalImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (src: string) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // Build ad images array
  const adImages = Array.from(
    { length: TOTAL_IMAGES },
    (_, i) => `/ads/page-${i + 1}.png`
  );
  adImages.splice(35, 0, "/ads/page-35-2.png"); // <— insert extra image

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-red-500">
          <img
            src="/ads/top.png"
            alt="TNAOT Top Banner"
            className="w-full object-cover"
          />
          <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="text-white space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                TNAOT Media Advertising Solutions
              </h1>
              <p className="text-lg md:text-xl">
                Multi-channel precision targeting of local users for brand
                exposure and efficient conversion
              </p>
              <div className="bg-blue-900 p-6 rounded-md inline-block">
                <h2 className="text-2xl font-bold">ADVERTISING</h2>
                <p className="text-xl">SOLUTION</p>
                <p className="text-sm mt-2">2025 / 07 / 01 – 2025 / 12 / 31</p>
              </div>
            </div>
            <div className="w-full">
              <img
                src="/ads/sec-top.png"
                alt="TNAOT App Building"
                className="w-full rounded-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* Ads Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {adImages.map((src, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden group"
                onClick={() => openModal(src)}
              >
                <img
                  src={src}
                  alt={`Advertisement ${index + 1}`}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 text-center">
                  {/* <p className="text-sm font-medium text-gray-700">
                    Advertisement #{index + 1}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative bg-white rounded-lg p-4 max-w-6xl w-full max-h-[90vh] overflow-auto">
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-red-600 text-3xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>

              {/* The big image */}
              <img
                src={modalImage}
                alt="Ad preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-md mb-2"
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Services;
