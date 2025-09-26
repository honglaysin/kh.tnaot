import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star } from 'lucide-react';

const HomeZh = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFE5E5] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#FFB6B6] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-60 right-20 w-72 h-72 bg-[#FF9999] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#FFCCCC] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-[#FFE5E5] rounded-full text-[#E53E3E] text-sm font-medium mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-[#E53E3E] rounded-full mr-2"></span>
                信赖我们服务的柬埔寨企业 1,000+ 家
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                转型您的 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B]"> 企业</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                我们提供创新解决方案，推动增长、效率与成功。与我们合作，释放您公司在数字时代的全部潜力。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/zh/contact"
                  className="group bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  立即开始
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link 
                  to="/zh/services"
                  className="group bg-white text-[#E53E3E] px-8 py-4 rounded-full text-lg font-semibold border-2 border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  了解更多
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 mt-12 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#E53E3E] rounded-full mr-2"></div>
                  无设置费用
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#E53E3E] rounded-full mr-2"></div>
                  全天候支持
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#E53E3E] rounded-full mr-2"></div>
                  随时取消
                </div>
              </div>
            </div>

            <div className="relative lg:ml-12">
              <div className="relative">
                <img 
                  src="/hero/hero-image.png" 
                  alt="Professional team meeting"
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="text-3xl font-bold text-[#E53E3E]">95%</div>
                  <div className="text-sm text-gray-600">客户满意度</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white rounded-xl shadow-xl p-6 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-90">完成项目</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              我们的影响力
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              我们通过客户的成功来衡量我们的成果
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">10,000+</div>
              <div className="text-lg text-red-100 font-medium">满意客户</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">500+</div>
              <div className="text-lg text-red-100 font-medium">完成项目</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">15+</div>
              <div className="text-lg text-red-100 font-medium">年经验</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">99%</div>
              <div className="text-lg text-red-100 font-medium">成功率</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Sarah Johnson"
                  className="w-20 h-20 rounded-full object-cover shadow-lg"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  "InnovateCorp 完全改变了我们的业务运营。他们的数字化转型策略将我们的效率提高了 200%，并帮助我们在全球扩展。"
                </blockquote>
                
                <div>
                  <cite className="text-lg font-semibold text-gray-900 not-italic">
                    Sarah Johnson
                  </cite>
                  <div className="text-[#E53E3E] font-medium">
                    CEO, TechStart Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            准备好转型您的企业了吗？
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            加入已经通过我们创新解决方案转型的成千上万家公司。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/zh/contact"
              className="bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              开始您的旅程
            </Link>
            <Link 
              to="/zh/services"
              className="bg-gray-100 text-[#E53E3E] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFE5E5] transition-all duration-200 shadow-lg"
            >
              探索服务
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeZh;
