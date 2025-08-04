'use client';

import { pricingPlans } from '@/constants/pricing';

export default function TradingAccounts() {
  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trading Accounts We Offer
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Choose the perfect plan for your trading needs and start building your portfolio today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-primary-400 ring-2 ring-primary-400' 
                  : 'border-primary-300'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-400 text-primary-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-primary-200 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-primary-200">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-primary-400 hover:bg-primary-300 text-primary-900'
                      : 'bg-primary-600 hover:bg-primary-500 text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-12">
          <p className="text-primary-200 text-sm">
            Trusted by thousands of traders worldwide.
          </p>
        </div>
      </div>
    </section>
  );
} 