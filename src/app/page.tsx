import AnalyticsSection from '@/components/AnalyticsSection';
import FeatureCards from '@/components/FeatureCards';
import HeroSection from '@/components/HeroSection';
import TradingAccounts from '@/components/TradingAccounts';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      
      {/* Portfolio Management Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Portfolio Management Made Simple
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Track all your investments, monitor performance, and manage risk with our intuitive portfolio management tools.
              </p>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                  <p className="text-gray-600">Get Instant Insights into your portfolio performance and market trends.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Trading</h3>
                  <p className="text-gray-600">Trade with confidence using our advanced security protocols.</p>
                </div>
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

                    {/* App Content - Buy/Sell Screen */}
                    <div className="space-y-4">
                      {/* Chart */}
                      <div className="bg-gray-700 rounded-lg p-3 h-24 flex items-end justify-between">
                        <div className="flex items-end space-x-1">
                          <div className="w-2 bg-green-400 h-8 rounded-sm"></div>
                          <div className="w-2 bg-red-400 h-6 rounded-sm"></div>
                          <div className="w-2 bg-green-400 h-10 rounded-sm"></div>
                          <div className="w-2 bg-green-400 h-12 rounded-sm"></div>
                          <div className="w-2 bg-red-400 h-8 rounded-sm"></div>
                          <div className="w-2 bg-green-400 h-14 rounded-sm"></div>
                          <div className="w-2 bg-green-400 h-16 rounded-sm"></div>
                        </div>
                      </div>

                      {/* Buy/Sell Form */}
                      <div className="space-y-3">
                        <div className="bg-gray-700 rounded-lg p-3">
                          <div className="text-gray-300 text-xs mb-1">Quantity</div>
                          <input 
                            type="number" 
                            className="w-full bg-transparent text-white text-lg font-bold outline-none"
                            placeholder="0"
                          />
                        </div>

                        <div className="bg-gray-700 rounded-lg p-3">
                          <div className="text-gray-300 text-xs mb-1">Price</div>
                          <input 
                            type="number" 
                            className="w-full bg-transparent text-white text-lg font-bold outline-none"
                            placeholder="0.00"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button className="bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
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
        </div>
      </section>

      <AnalyticsSection />
      
      {/* Market Choice & Speed Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Extensive Market Choice */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Extensive Market Choice</h3>
              <p className="text-gray-600 mb-6">Trade across including Forex, metals, crypto, and more.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-2xl">📈</span>
                <span className="text-2xl">🐕</span>
              </div>
            </div>

            {/* Lightning Fast */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast.</h3>
              <p className="text-gray-600 mb-6">Never miss an opportunity again with execution speeds of &lt;10ms on all your trades.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-2xl">⚡</span>
                <span className="text-2xl">⚡</span>
              </div>
            </div>

            {/* Market-Leading Pricing */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market-Leading Pricing</h3>
              <p className="text-gray-600 mb-6">Tight spreads, zero commissions* & no hidden fees with customised pricing available upon request.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-2xl">¥</span>
                <span className="text-2xl">₹</span>
                <span className="text-2xl">€</span>
                <span className="text-2xl">$</span>
                <span className="text-2xl">£</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anytime, Anywhere Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anytime, Anywhere.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Participate in the global markets on the go – wherever you are. Trade our entire range of 300+ trading instruments across 10+ asset classes hassle-free via MT4.
            </p>
          </div>

          {/* Candlestick Chart */}
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-8 w-full max-w-4xl">
              <div className="flex items-end justify-center space-x-2 h-32">
                <div className="w-4 bg-green-500 h-20 rounded-sm"></div>
                <div className="w-4 bg-red-500 h-16 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-24 rounded-sm"></div>
                <div className="w-4 bg-red-500 h-12 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-28 rounded-sm"></div>
                <div className="w-4 bg-red-500 h-18 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-32 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-26 rounded-sm"></div>
                <div className="w-4 bg-red-500 h-14 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-30 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-22 rounded-sm"></div>
                <div className="w-4 bg-red-500 h-20 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-34 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-28 rounded-sm"></div>
                <div className="w-4 bg-red-500 h-16 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-36 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-30 rounded-sm"></div>
                <div className="w-4 bg-red-500 h-18 rounded-sm"></div>
                <div className="w-4 bg-green-500 h-38 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureCards />
      <TradingAccounts />
    </div>
  );
} 