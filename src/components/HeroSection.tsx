'use client';

import { Statistic } from '@/types';

const statistics: Statistic[] = [
  { value: '10K+', label: 'Active Traders' },
  { value: '$2.5B', label: 'Trading Volume' },
  { value: '99.9%', label: 'Uptime' },
];

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Boost. Your. Earnings.
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Your all-in-one hub for trading, selling, and expanding your investment portfolio with advanced tools and real-time insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-300">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-primary-200 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Mobile Phone Frame */}
              <div className="w-72 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-800 rounded-2xl p-4">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary-600 rounded"></div>
                      <span className="text-white font-semibold text-sm">RAZ CAPITALS</span>
                    </div>
                    <div className="text-white text-xs">9:41</div>
                  </div>

                  {/* App Content */}
                  <div className="space-y-4">
                    {/* Balance Section */}
                    <div className="bg-gray-700 rounded-lg p-3">
                      <div className="text-gray-300 text-xs mb-1">Balance</div>
                      <div className="text-white font-bold text-lg">$12,450.00</div>
                    </div>

                    {/* Trading Pairs */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                        <div>
                          <div className="text-white font-medium">TSLA</div>
                          <div className="text-gray-400 text-xs">Tesla Inc</div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-bold">$245.67</div>
                          <div className="text-green-400 text-xs">+2.34%</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                        <div>
                          <div className="text-white font-medium">AAPL</div>
                          <div className="text-gray-400 text-xs">Apple Inc</div>
                        </div>
                        <div className="text-right">
                          <div className="text-red-400 font-bold">$178.92</div>
                          <div className="text-red-400 text-xs">-1.23%</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                        <div>
                          <div className="text-white font-medium">BTC</div>
                          <div className="text-gray-400 text-xs">Bitcoin</div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-bold">$43,250</div>
                          <div className="text-green-400 text-xs">+5.67%</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-primary-600 text-white py-2 rounded-lg text-sm font-medium">
                        Buy
                      </button>
                      <button className="bg-red-600 text-white py-2 rounded-lg text-sm font-medium">
                        Sell
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 