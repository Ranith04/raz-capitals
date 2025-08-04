import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - RAZ CAPITALS',
  description: 'Discover the advanced features and tools that make RAZ CAPITALS the leading trading platform.',
};

export default function FeaturesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Trading Features
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover the powerful tools and features that make RAZ CAPITALS the preferred choice for traders worldwide.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-Time Data */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Market Data</h3>
              <p className="text-gray-600 mb-4">
                Access live market data with millisecond precision. Get instant price updates, volume information, and market depth for all trading instruments.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Live price feeds</li>
                <li>• Market depth</li>
                <li>• Volume analysis</li>
                <li>• News integration</li>
              </ul>
            </div>

            {/* Advanced Charting */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Charting</h3>
              <p className="text-gray-600 mb-4">
                Professional-grade charting tools with over 100 technical indicators and drawing tools for comprehensive market analysis.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Multiple timeframes</li>
                <li>• 100+ indicators</li>
                <li>• Drawing tools</li>
                <li>• Custom templates</li>
              </ul>
            </div>

            {/* Risk Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management</h3>
              <p className="text-gray-600 mb-4">
                Protect your capital with advanced risk management tools including stop-loss, take-profit, and position sizing calculators.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Stop-loss orders</li>
                <li>• Take-profit orders</li>
                <li>• Position sizing</li>
                <li>• Risk calculators</li>
              </ul>
            </div>

            {/* Mobile Trading */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Trading</h3>
              <p className="text-gray-600 mb-4">
                Trade anywhere, anytime with our powerful mobile app. Full functionality with intuitive touch controls and real-time notifications.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• iOS & Android apps</li>
                <li>• Touch-optimized</li>
                <li>• Push notifications</li>
                <li>• Biometric security</li>
              </ul>
            </div>

            {/* API Access */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">API Access</h3>
              <p className="text-gray-600 mb-4">
                Build custom trading applications with our comprehensive REST API. Access market data and execute trades programmatically.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• REST API</li>
                <li>• WebSocket feeds</li>
                <li>• SDK libraries</li>
                <li>• Documentation</li>
              </ul>
            </div>

            {/* Customer Support */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 mb-4">
                Get help whenever you need it with our round-the-clock customer support team. Available via chat, phone, and email.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Live chat support</li>
                <li>• Phone support</li>
                <li>• Email support</li>
                <li>• Knowledge base</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of traders who trust RAZ CAPITALS for their trading needs.
          </p>
          <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
} 