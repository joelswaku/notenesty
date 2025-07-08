import React, { useEffect, useState } from 'react';
import { ZapIcon, RotateCwIcon } from 'lucide-react';
import { useRateLimitStore } from '../store/useRateLimitStore';

function RateLimitedUI({ onRetry }) {
  const { setRateLimited } = useRateLimitStore();
  const [seconds, setSeconds] = useState(10);
  const [canRetry, setCanRetry] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setCanRetry(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleRetry = () => {
    setRateLimited(false);
    if (onRetry) onRetry();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-red-600">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="bg-white/10 p-3 rounded-full">
            <ZapIcon className="w-8 h-8 text-yellow-300" />
          </div>

          <div className="flex-1 text-center md:text-left space-y-1">
            <h3 className="text-lg font-semibold">Rate Limit Reached</h3>
            <p className="text-sm">
              You’ve made too many requests.
              {canRetry
                ? ' You can try again now.'
                : ` Please wait ${seconds} second${seconds !== 1 ? 's' : ''}.`}
            </p>
            <p className="text-xs text-white/80">
              Try again shortly for a better experience.
            </p>
          </div>

          {canRetry && (
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm font-medium"
            >
              <RotateCwIcon className="w-4 h-4" />
              Retry Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RateLimitedUI;
