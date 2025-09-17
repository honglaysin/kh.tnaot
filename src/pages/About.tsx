import React from "react";
import Header from "../components/Header";
// import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const timeline = [
    {
      year: "2018",
      title: "Platform Establishment & Launch",
      description:
        "APP V1.0 officially launched, along with social media accounts. Initially focused on daily news services in Chinese and Khmer, providing timely and accurate news information for local Cambodian users.",
    },
    {
      year: "2019",
      title: "Service Diversification",
      description:
        "Expanded from single daily news service to a diversified service system, launched innovative features like treasure hunting activities, encouraging more user interaction and providing rich entertainment content and practical functions.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Fully embraced digital marketing, launched social media management and digital advertising services, providing professional digital marketing solutions for clients.",
    },
    {
      year: "2022",
      title: "Media Service Expansion",
      description:
        "Established a comprehensive media submission and interview service system, providing professional media communication services for enterprises and organizations, becoming a well-known media communication service provider in the industry.",
    },
    {
      year: "2024-Present",
      title: "Social Media Platform Upgrade",
      description:
        "APP fully upgraded to a professional social media platform where professional media companies, NGOs, and various organizations can publish content, announcements, promotions, and videos, achieving content monetization. Provides five core services: media submission, creative production, event planning, digital marketing, and technical development.",
    },
  ];
// const values = [
//   { icon: "💡", title: "Innovation", description: "We innovate to stay ahead." },
//   { icon: "🤝", title: "Collaboration", description: "Teamwork drives success." },
//   { icon: "⚖️", title: "Integrity", description: "We act ethically at all times." },
//   { icon: "🏆", title: "Excellence", description: "Delivering quality in everything." },
//   { icon: "🌏", title: "Sustainability", description: "Committed to a better world." },
// ];

// const events: {
//   title: string;
//   description: string;
//   date: string;
//   image: string;
//   link: string;
// }[] = [
//   {
//     title: "Birthday Party 2025",
//     description:
//       "Join us for a joyful celebration filled with fun, laughter, and unforgettable memories as we mark the special moments of Birthday Party 2025.",
//     date: "April 2025",
//     link: "https://www.facebook.com/tnaot.kh",
//     image: "/images/event-1.jpg",
//   },
//   {
//     title: "Happy Women's Day",
//     description:
//       "Celebrating the strength, courage, and achievements of women around the world. Join us in honoring their inspiring journey.",
//     date: "March 2025",
//     link: "https://www.facebook.com/share/p/16oejR8od8/",
//     image: "/images/event-2.jpg",
//   },
//   {
//     title: "Chinese New Year Events 2025",
//     description:
//       "Celebrate the vibrant traditions and festivities of Chinese New Year 2025, featuring colorful parades, cultural performances, and community events welcoming the Year of the Snake.",
//     date: "January 2025",
//     link: "https://www.facebook.com/share/p/1B5XVKZJRd/",
//     image: "/images/event-3.jpg",
//   },
//   {
//     title: "Chrismas Party 2024",
//     description:
//       "Celebrate the joy and warmth of the season at our Christmas Party 2024, filled with festive cheer, music, and holiday fun for everyone.",
//     date: "December 2024",
//     link: "https://www.facebook.com/share/p/19gu8r1zb7/",
//     image: "/images/event-4.jpg",
//   },
//   {
//     title: "People to People Exchange Amateur Badminton Championships 2024",
//     description:
//       "Join badminton enthusiasts from across the region for thrilling matches and friendly competition at the 2024 Amateur Championships.",
//     date: "September 2024",
//     link: "https://www.facebook.com/tnaot.kh",
//     image: "/images/event-5.jpg",
//   },
//   {
//     title: "Harbor Group Team Buiding Party 2023",
//     description:
//       "Strengthen bonds and build teamwork with fun activities and celebrations at Harbor Group’s 2023 team building event.",
//     date: "April 2023",
//     link: "https://www.facebook.com/share/p/177HK5ddFt/",
//     image: "/images/event-6.jpg",
//   },
//   {
//     title: "National and Career Fair 2022 at Khos Pich",
//     description:
//       "Engaging with the community through our outreach initiatives.",
//     date: "October 2022",
//     link: "https://www.facebook.com/share/p/19AvTSNedH/",
//     image: "/images/event-7.png",
//   },
//   {
//     title: "Harbor Group Annual Trip 2022",
//     description:
//       "Experience memorable moments and camaraderie during the Harbor Group’s 2022 Annual Trip filled with adventure and fun.",
//     date: "April 2022",
//     link: "https://www.facebook.com/share/p/1DubSVv3FS/",
//     image: "/images/event-8.jpg",
//   },
// ];


const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20">
        {/* Page Title */}
        <section className="bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white py-20">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Learn about our company history, team introduction and corporate
              culture, professional media communication and marketing promotion
              service team
            </p>
          </div>
        </section>

    {/* Company Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('Our Mission')}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('Committed to providing the most professional and effective media communication and marketing promotion services to maximize enterprise brand value.')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('We have rich industry experience and professional team to customize the most suitable communication strategy for clients.')}
                </p>

                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="flex flex-col items-center justify-center p-6 bg-primary-50 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-2">500+</div>
                    <div className="text-gray-700 font-medium text-center">Partner Clients</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 bg-primary-50 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-2">8+</div>
                    <div className="text-gray-700 font-medium text-center">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative">
                <img
                  src="/company/company.jpg"
                  alt="Company Values"
                  className="w-full h-96 object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-60 rounded-2xl p-6 text-center w-72 md:w-80">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <img
                        src="/company/logo.png"
                        alt="Company Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('TNAOT Advertisement')}</h3>
                    <p className="text-gray-200 text-sm">{t('We deliver innovative solutions that drive growth, efficiency, and success. Partner with us to unlock your company`s full potential in today`s digital landscape.')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                Witness our growth journey and milestone moments
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute top-0 left-5 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[#E53E3E]"></div>

              <div className="space-y-8 md:space-y-0">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className="flex flex-col md:flex-row md:items-center relative"
                  >
                    {/* Left Side Card */}
                    <div
                      className={`flex-1 px-6 ${
                        index % 2 === 0
                          ? "md:pr-8 md:text-right"
                          : "md:order-2 md:pl-8 md:text-left"
                      }`}
                    >
                      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="text-[#E53E3E] font-bold text-base mb-1">
                          {item.year}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className="w-4 h-4 bg-[#E53E3E] rounded-full border-2 border-white shadow-md"></div>
                    </div>

                    {/* Right Side Spacer */}
                    <div
                      className={`flex-1 px-6 hidden md:block ${
                        index % 2 === 0 ? "md:order-2" : ""
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


      {/* Partner */}
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Our Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            
            {/* Partner Card Example */}
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/Wing.png')" }}
              ></div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/eget.png')" }}
              ></div>

            </div>

            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/Huawei.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/ABA.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/abc.jpg')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/cdf.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/Cellcard.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/Forte.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/Harbor.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/Le-Conde.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/Mekong-Net.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/prince.jpg')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/Smart.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/STAPANA.jpg')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/The-Peak.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/tiger.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/truemoney.png')" }}
              ></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/partner/vattanac.jpg')" }}
              ></div>
            </div>

            
            
          </div>
        </div>
      </section>

        {/* Company Events */}
        {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Company Events
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Celebrating our milestones and bringing our team together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col h-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-semibold text-xl mb-2 text-gray-900">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {event.description}
                        </p>
                        <p className="text-sm text-[#E53E3E] font-medium mb-4">
                          📅 {event.date}
                        </p>
                      </div>
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E53E3E] hover:underline font-medium mt-2 text-sm"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 bg-[#E53E3E] text-white text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch with Us
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us to discuss your media communication needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[#E53E3E] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-[#E53E3E] font-semibold py-3 px-8 rounded-lg transition"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
