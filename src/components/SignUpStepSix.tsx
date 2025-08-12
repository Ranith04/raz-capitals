'use client';

import { useEffect, useRef, useState } from 'react';

export default function SignUpStepSix() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      // Handle OTP verification here
      console.log('OTP:', otpValue);
      alert('Registration completed successfully! Welcome to RAZ CAPITALS!');
      // Redirect to dashboard or success page
      window.location.href = '/dashboard';
    }
  };

  // Focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Header with icon */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ backgroundColor: '#A0C8A9' }}>
          <svg className="w-8 h-8" style={{ color: '#1E2E23' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Enter the OTP</h1>
        <p className="text-gray-600">We just sent it to email you entered!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* OTP Input Boxes */}
        <div className="flex justify-center space-x-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 transition-colors duration-200 text-gray-900 bg-white"
              style={{ 
                color: '#111827', 
                backgroundColor: '#ffffff'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#A0C8A9';
                e.target.style.boxShadow = '0 0 0 2px rgba(160, 200, 169, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={otp.join('').length !== 6}
          className="w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ 
            backgroundColor: '#A0C8A9', 
            color: '#1E2E23'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            if (!target.disabled) {
              target.style.backgroundColor = '#8FB89A';
            }
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            if (!target.disabled) {
              target.style.backgroundColor = '#A0C8A9';
            }
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
}
