'use client';

export default function AnalyticsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Mobile Mockup */}
          <div className="flex justify-center lg:justify-start">
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

                  {/* App Content - History Screen */}
                  <div className="space-y-4">
                    {/* Tabs */}
                    <div className="flex space-x-1 bg-gray-700 rounded-lg p-1">
                      <button className="flex-1 bg-primary-600 text-white py-2 rounded-md text-xs font-medium">
                        History
                      </button>
                      <button className="flex-1 text-gray-300 py-2 rounded-md text-xs font-medium">
                        Orders
                      </button>
                      <button className="flex-1 text-gray-300 py-2 rounded-md text-xs font-medium">
                        Cards
                      </button>
                    </div>

                    {/* Transaction History */}
                    <div className="space-y-3">
                      <div className="bg-gray-700 rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-white font-medium text-sm">Buy TSLA</div>
                            <div className="text-gray-400 text-xs">Today, 2:30 PM</div>
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 font-bold text-sm">+$1,250.00</div>
                            <div className="text-gray-400 text-xs">5 shares</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-700 rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-white font-medium text-sm">Sell AAPL</div>
                            <div className="text-gray-400 text-xs">Yesterday, 4:15 PM</div>
                          </div>
                          <div className="text-right">
                            <div className="text-red-400 font-bold text-sm">-$890.00</div>
                            <div className="text-gray-400 text-xs">3 shares</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-700 rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-white font-medium text-sm">Buy BTC</div>
                            <div className="text-gray-400 text-xs">Dec 15, 1:45 PM</div>
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 font-bold text-sm">+$2,100.00</div>
                            <div className="text-gray-400 text-xs">0.05 BTC</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Analytics & Insights
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Make data-driven decisions with comprehensive analytics, performance tracking, and market intelligence.
              </p>
            </div>

            {/* Numbered Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Performance Tracking
                  </h3>
                  <p className="text-gray-600">
                    Monitor your portfolio's performance across all timeframes with detailed analytics and insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Risk Assessment
                  </h3>
                  <p className="text-gray-600">
                    Understand and manage your investment risks effectively with advanced risk analysis tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Market Intelligence
                  </h3>
                  <p className="text-gray-600">
                    Stay informed with real-time market insights and trends to make better trading decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 