import React from "react";
import Header from "../../components/Header";

const timeline = [
  {
    year: "2018",
    title: "平台建立与启动",
    description:
      "APP V1.0 正式上线，同时开通社交媒体账户。初期专注于中柬双语的每日新闻服务，向柬埔寨本地用户提供及时准确的新闻信息。",
  },
  {
    year: "2019",
    title: "服务多元化",
    description:
      "从单一的每日新闻服务扩展到多元化服务体系，推出创新功能，如寻宝活动，鼓励更多用户互动，并提供丰富的娱乐内容和实用功能。",
  },
  {
    year: "2020",
    title: "数字化转型",
    description:
      "全面拥抱数字营销，推出社交媒体管理和数字广告服务，为客户提供专业的数字营销解决方案。",
  },
  {
    year: "2022",
    title: "媒体服务扩展",
    description:
      "建立完善的媒体提交与采访服务体系，为企业和机构提供专业的媒体沟通服务，成为业内知名的媒体沟通服务提供商。",
  },
  {
    year: "2024-至今",
    title: "社交媒体平台升级",
    description:
      "APP 完全升级为专业社交媒体平台，专业媒体公司、NGO 和各类组织可发布内容、公告、促销和视频，实现内容变现。提供五大核心服务：媒体提交、创意制作、活动策划、数字营销和技术开发。",
  },
];

const AboutZh: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20">
        {/* Page Title */}
        <section className="bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white py-20">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              关于我们
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              了解我们的公司历史、团队介绍及企业文化，专业的媒体传播与营销推广服务团队
            </p>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  我们的使命
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  致力于提供最专业、高效的媒体传播与营销推广服务，最大化企业品牌价值。
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  我们拥有丰富的行业经验和专业团队，为客户量身定制最合适的传播策略。
                </p>

                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="flex flex-col items-center justify-center p-6 bg-primary-50 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-2">500+</div>
                    <div className="text-gray-700 font-medium text-center">合作客户</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 bg-primary-50 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-2">8+</div>
                    <div className="text-gray-700 font-medium text-center">多年经验</div>
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
                    <h3 className="text-xl font-bold text-white mb-2">TNAOT 广告</h3>
                    <p className="text-gray-200 text-sm">
                      我们提供创新解决方案，推动企业增长、效率和成功。与我们合作，充分发挥公司在数字时代的潜力。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                我们的历程
              </h2>
              <p className="text-xl text-gray-600">
                回顾我们的成长历程和里程碑时刻
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="absolute top-0 left-5 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[#E53E3E]"></div>
              <div className="space-y-8 md:space-y-0">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex flex-col md:flex-row md:items-center relative">
                    <div className={`flex-1 px-6 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:order-2 md:pl-8 md:text-left"
                    }`}>
                      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="text-[#E53E3E] font-bold text-base mb-1">{item.year}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className="w-4 h-4 bg-[#E53E3E] rounded-full border-2 border-white shadow-md"></div>
                    </div>
                    <div className={`flex-1 px-6 hidden md:block ${index % 2 === 0 ? "md:order-2" : ""}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">合作伙伴</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">

            {[
                "Wing.png", "eget.png", "Huawei.png", "ABA.png", "abc.jpg",
                "cdf.png", "Cellcard.png", "Forte.png", "Harbor.png", "Le-Conde.png",
                "Mekong-Net.png", "prince.jpg", "Smart.png", "STAPANA.jpg", "The-Peak.png",
                "tiger.png", "truemoney.png", "vattanac.jpg"
            ].map((logo, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-4">
                <div 
                    className="w-28 h-28 bg-center bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url('/partner/${logo}')` }}
                ></div>
                </div>
            ))}

            </div>
        </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-[#E53E3E] text-white text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">联系我们</h2>
            <p className="text-lg mb-8 opacity-90">联系我们，讨论您的媒体传播需求</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/zh/contact"
                className="bg-white text-[#E53E3E] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition"
              >
                联系我们
              </a>
              <a
                href="/zh/services"
                className="border-2 border-white text-white hover:bg-white hover:text-[#E53E3E] font-semibold py-3 px-8 rounded-lg transition"
              >
                我们的服务
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutZh;
