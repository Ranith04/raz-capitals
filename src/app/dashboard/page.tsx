import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - RAZ CAPITALS',
  description: 'Your trading dashboard - monitor your portfolio, track performance, and manage your investments.',
};

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your trading overview.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                New Trade
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Portfolio Overview */}
            <div className="lg:col-span-2 space-y-6">
              {/* Portfolio Value */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Value</h2>
                <div className="flex items-end space-x-4">
                  <div className="text-3xl font-bold text-gray-900">$12,450.00</div>
                  <div className="text-green-600 text-sm font-medium">+$1,250.00 (+11.2%)</div>
                </div>
                <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-end justify-between p-4">
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
              </div>

              {/* Recent Trades */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Trades</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <div className="font-medium text-gray-900">Buy TSLA</div>
                      <div className="text-sm text-gray-500">Today, 2:30 PM</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-medium">+$1,250.00</div>
                      <div className="text-sm text-gray-500">5 shares</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <div className="font-medium text-gray-900">Sell AAPL</div>
                      <div className="text-sm text-gray-500">Yesterday, 4:15 PM</div>
                    </div>
                    <div className="text-right">
                      <div className="text-red-600 font-medium">-$890.00</div>
                      <div className="text-sm text-gray-500">3 shares</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-medium text-gray-900">Buy BTC</div>
                      <div className="text-sm text-gray-500">Dec 15, 1:45 PM</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-medium">+$2,100.00</div>
                      <div className="text-sm text-gray-500">0.05 BTC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Account Summary */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Balance</span>
                    <span className="font-medium">$5,230.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Equity</span>
                    <span className="font-medium">$12,450.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Open Positions</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Today's P&L</span>
                    <span className="text-green-600 font-medium">+$1,250.00</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                    Place New Trade
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                    Deposit Funds
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                    Withdraw Funds
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                    View Reports
                  </button>
                </div>
              </div>

              {/* Market Watch */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Market Watch</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">TSLA</div>
                      <div className="text-sm text-gray-500">Tesla Inc</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-medium">$245.67</div>
                      <div className="text-green-600 text-sm">+2.34%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">AAPL</div>
                      <div className="text-sm text-gray-500">Apple Inc</div>
                    </div>
                    <div className="text-right">
                      <div className="text-red-600 font-medium">$178.92</div>
                      <div className="text-red-600 text-sm">-1.23%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">BTC</div>
                      <div className="text-sm text-gray-500">Bitcoin</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-medium">$43,250</div>
                      <div className="text-green-600 text-sm">+5.67%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 