import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    title: 'Starter',
    description: 'Perfect for beginners getting started with trading',
    price: '$0',
    period: '/forever',
    features: [
      'Basic trading tools',
      'Real-time market data',
      'Email support',
      'Mobile app access',
      'Basic analytics'
    ],
    buttonText: 'Get Started'
  },
  {
    id: 'professional',
    title: 'Professional',
    description: 'Advanced features for serious traders',
    price: '$29',
    period: '/per month',
    features: [
      'Everything in Starter',
      'Advanced charting tools',
      'Priority support',
      'API access',
      'Custom indicators',
      'Portfolio analytics',
      'Risk management tools'
    ],
    buttonText: 'Start Free Trial',
    popular: true
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'For teams and institutional traders',
    price: '$99',
    period: '/per month',
    features: [
      'Everything in Professional',
      'Team collaboration tools',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security',
      'Unlimited API calls',
      'White-label options'
    ],
    buttonText: 'Contact Sales'
  }
]; 