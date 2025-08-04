'use client';

import { Feature } from '@/types';

const features: Feature[] = [
  {
    id: 'security',
    title: 'Bank-Grade Security',
    description: 'Your investments are protected with enterprise-level security and encryption.',
    icon: '🛡️'
  },
  {
    id: 'speed',
    title: 'Lightning Fast',
    description: 'Execute trades instantly with our high-performance trading engine.',
    icon: '⚡'
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Make informed decisions with comprehensive market analysis tools.',
    icon: '📊'
  },
  {
    id: 'global',
    title: 'Global Markets',
    description: 'Access markets worldwide with real-time data and seamless trading.',
    icon: '🌍'
  },
  {
    id: 'support',
    title: 'Expert Support',
    description: '24/7 customer support from our team of trading professionals.',
    icon: '🎧'
  },
  {
    id: 'realtime',
    title: 'Real-Time Data',
    description: 'Stay ahead with live market data and instant notifications.',
    icon: '⏰'
  }
];

export default function FeatureCards() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All your investments Unified.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage, track, and optimize your entire portfolio from one powerful platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 