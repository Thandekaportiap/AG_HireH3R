import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingPlan = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedFeatures, setSelectedFeatures] = useState({
    Basic: [true, true, true],
    Standard: [true, true, true, true, true],
  });

  const plans = [
    {
      name: 'Basic',
      priceMonthly: 'FREE',
      priceYearly: 'FREE',
      features: [
        'Job Listings - 1-3 jobs for free per month',
        'Company Profile',
        'Messaging System',
      ],
    },
    {
      name: 'Standard',
      priceMonthly: '$15',
      priceYearly: '$150',
      features: [
        'Job Listings - 4-10 jobs for free per month',
        'Company Profile',
        'Messaging System',
        'Job Boosting - $5 per job Ad',
        'Matching Algorithm',
      ],
    },
    // Add Pro and Premium plans as needd
  ];

  const handleBillingCycleChange = (event) => {
    setBillingCycle(event.target.value);
  };

  const handleFeatureToggle = (planName, featureIndex) => {
    setSelectedFeatures((prev) => {
      const newFeatures = [...prev[planName]];
      newFeatures[featureIndex] = !newFeatures[featureIndex];
      return { ...prev, [planName]: newFeatures };
    });
  };

  const handleGetStartedClick = (planName) => {
    // Redirect to the signup page with the selected plan and billing cycle
    const billingType = billingCycle === 'monthly' ? 'month' : 'year';
    window.location.href = `/signup?plan=${planName}&billing=${billingType}`;
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Pricing Plan</h2>
        <p className="mt-4 text-lg text-gray-500 text-center">
          Choose the plan that’s right for you and start experiencing the benefits today!
        </p>
        <div className="flex justify-center mt-8">
          <label className="mr-4">
            <input
              type="radio"
              value="monthly"
              checked={billingCycle === 'monthly'}
              onChange={handleBillingCycleChange}
              className="mr-2"
            /> {/*some changes might be neede for buttons instead if radio*/}
            Monthly
          </label>
          <label>
            <input
              type="radio"
              value="yearly"
              checked={billingCycle === 'yearly'}
              onChange={handleBillingCycleChange}
              className="mr-2"
            />
            Yearly
          </label>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">
                  {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}
                </span>
                <span className="text-base font-medium text-gray-500">
                  /{billingCycle === 'monthly' ? 'month' : 'year'}
                </span>
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedFeatures[plan.name][index]}
                      onChange={() => handleFeatureToggle(plan.name, index)}
                    />
                    <p className="text-base leading-6 text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex justify-center ml-9 items-center">
                <button
                  onClick={() => handleGetStartedClick(plan.name)}
                  className="w-3/4 bg-purple-600 text-white py-2 px-4 rounded-md mb-2"
                >
                  Get Started
                </button>
              </div>
              <div className="flex justify-center">
                <Link to="/signup" className="text-gray-700 underline">
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
