import { Shuffle } from "lucide-react";
import { useCallback, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RandomNumberGenerator() {
  const minId = useId();
  const maxId = useId();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [errors, setErrors] = useState<{ min?: string; max?: string }>({});

  const currentYear = new Date().getFullYear();

  const validateRange = useCallback((minVal: number, maxVal: number) => {
    const newErrors: { min?: string; max?: string } = {};

    if (minVal >= maxVal) {
      newErrors.min = "Min must be less than max";
      newErrors.max = "Max must be greater than min";
    }

    if (minVal < -1000000 || maxVal < -1000000) {
      if (minVal < -1000000)
        newErrors.min = "Value too small (min: -1,000,000)";
      if (maxVal < -1000000)
        newErrors.max = "Value too small (min: -1,000,000)";
    }

    if (minVal > 1000000 || maxVal > 1000000) {
      if (minVal > 1000000) newErrors.min = "Value too large (max: 1,000,000)";
      if (maxVal > 1000000) newErrors.max = "Value too large (max: 1,000,000)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, []);

  const handleMinChange = useCallback(
    (value: string) => {
      const numValue = parseInt(value, 10) || 0;
      setMin(numValue);
      validateRange(numValue, max);
    },
    [max, validateRange],
  );

  const handleMaxChange = useCallback(
    (value: string) => {
      const numValue = parseInt(value, 10) || 0;
      setMax(numValue);
      validateRange(min, numValue);
    },
    [min, validateRange],
  );

  const generateRandomNumber = useCallback(async () => {
    if (!validateRange(min, max)) return;

    setIsGenerating(true);
    setRandomNumber(null);

    // Animation delay to create suspense
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(result);
    setIsGenerating(false);
  }, [min, max, validateRange]);

  const hasErrors = Object.keys(errors).length > 0;
  const canGenerate = !isGenerating && !hasErrors && min < max;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Random Number Generator
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Generate random numbers within your custom range
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-8 sm:p-12 backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 shadow-2xl border-0 ring-1 ring-slate-200/50 dark:ring-slate-700/50">
          {/* Range Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <Label
                htmlFor={minId}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Minimum Value
              </Label>
              <Input
                id={minId}
                type="number"
                value={min}
                onChange={(e) => handleMinChange(e.target.value)}
                className={`text-lg font-mono transition-all duration-200 ${
                  errors.min
                    ? "border-red-400 ring-red-200 dark:ring-red-800"
                    : "border-slate-300 dark:border-slate-600 focus:ring-blue-200 dark:focus:ring-blue-800"
                }`}
                placeholder="Enter minimum"
              />
              {errors.min && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.min}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor={maxId}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Maximum Value
              </Label>
              <Input
                id={maxId}
                type="number"
                value={max}
                onChange={(e) => handleMaxChange(e.target.value)}
                className={`text-lg font-mono transition-all duration-200 ${
                  errors.max
                    ? "border-red-400 ring-red-200 dark:ring-red-800"
                    : "border-slate-300 dark:border-slate-600 focus:ring-blue-200 dark:focus:ring-blue-800"
                }`}
                placeholder="Enter maximum"
              />
              {errors.max && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.max}
                </p>
              )}
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center mb-12">
            <Button
              onClick={generateRandomNumber}
              disabled={!canGenerate}
              size="lg"
              className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Shuffle
                className={`w-5 h-5 mr-2 ${isGenerating ? "animate-spin" : ""}`}
              />
              {isGenerating ? "Generating..." : "Generate Random Number"}
            </Button>
          </div>

          {/* Number Display */}
          <div className="text-center">
            <div className="h-32 sm:h-40 flex items-center justify-center">
              {isGenerating ? (
                <div className="space-y-4">
                  <div className="inline-flex space-x-1">
                    <div
                      className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                      style={{
                        animationDelay: "0s",
                        animationDuration: "1s",
                      }}
                    />
                    <div
                      className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                      style={{
                        animationDelay: "0.2s",
                        animationDuration: "1s",
                      }}
                    />
                    <div
                      className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                      style={{
                        animationDelay: "0.4s",
                        animationDuration: "1s",
                      }}
                    />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 animate-pulse">
                    Calculating your random number...
                  </p>
                </div>
              ) : randomNumber !== null ? (
                <div className="space-y-2 animate-in fade-in-0 zoom-in-95 duration-500">
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-700">
                    {randomNumber.toLocaleString()}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Range: {min.toLocaleString()} → {max.toLocaleString()}
                  </p>
                </div>
              ) : (
                <div className="text-slate-400 dark:text-slate-600">
                  <Shuffle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">
                    Click generate to get your random number
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-slate-500 dark:text-slate-500 text-sm">
          Copyright &copy; {currentYear} Xanonymous. All rights reserved.
        </div>
      </div>
    </div>
  );
}
