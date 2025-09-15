import { Shuffle } from "lucide-react";
import { memo } from "react";
import type { RandomNumberRange } from "@/hooks/useRandomNumberGenerator";

export type NumberDisplayProps = {
  readonly randomNumber: number | null;
  readonly isGenerating: boolean;
  readonly range: RandomNumberRange;
};

const LoadingAnimation = memo(() => (
  <div className="space-y-4">
    <div className="inline-flex space-x-1">
      {[0, 0.2, 0.4].map((delay) => (
        <div
          key={delay}
          className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
          style={{
            animationDelay: `${delay}s`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
    <p className="text-slate-600 dark:text-slate-400 animate-pulse">
      Calculating your random number...
    </p>
  </div>
));

const ResultDisplay = memo<{ number: number; range: RandomNumberRange }>(
  ({ number, range }) => (
    <div className="space-y-2 animate-in fade-in-0 zoom-in-95 duration-500">
      <div className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-700">
        {number.toLocaleString()}
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm">
        Range: {range.min.toLocaleString()} ~ {range.max.toLocaleString()}
      </p>
    </div>
  ),
);

const PlaceholderDisplay = memo(() => (
  <div className="text-slate-400 dark:text-slate-600">
    <Shuffle className="w-16 h-16 mx-auto mb-4 opacity-50" aria-hidden="true" />
    <p className="text-lg">Click generate to get your random number</p>
  </div>
));

export const NumberDisplay = memo<NumberDisplayProps>(
  ({ randomNumber, isGenerating, range }) => {
    return (
      <div className="text-center">
        <section
          className="h-32 sm:h-40 flex items-center justify-center"
          aria-label="Random number result"
          aria-live="polite"
          aria-atomic="true"
        >
          {isGenerating ? (
            <LoadingAnimation />
          ) : randomNumber !== null ? (
            <ResultDisplay number={randomNumber} range={range} />
          ) : (
            <PlaceholderDisplay />
          )}
        </section>
      </div>
    );
  },
);
