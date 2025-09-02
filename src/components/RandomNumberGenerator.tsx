import { memo, useDeferredValue, useRef } from "react";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { GenerateButton } from "@/components/GenerateButton";
import { NumberDisplay } from "@/components/NumberDisplay";
import { RangeInput } from "@/components/RangeInput";
import { Card } from "@/components/ui/card";
import { useRandomNumberGenerator } from "@/hooks/useRandomNumberGenerator";

export const RandomNumberGenerator = memo(() => {
  const [state, actions] = useRandomNumberGenerator(1, 100);

  const deferredState = useDeferredValue(state);

  const mainRef = useRef<HTMLElement>(null);

  const handleMainRef = (element: HTMLElement | null) => {
    if (element) {
      mainRef.current = element;
      return () => {
        mainRef.current = null;
      };
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <AppHeader />

        <main ref={handleMainRef} aria-label="Random number generator controls">
          <Card className="p-8 sm:p-12 backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 shadow-2xl border-0 ring-1 ring-slate-200/50 dark:ring-slate-700/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <RangeInput
                label="Minimum Value"
                value={deferredState.range.min}
                error={deferredState.errors.min}
                placeholder="Enter minimum"
                onChange={actions.updateMin}
              />
              <RangeInput
                label="Maximum Value"
                value={deferredState.range.max}
                error={deferredState.errors.max}
                placeholder="Enter maximum"
                onChange={actions.updateMax}
              />
            </div>

            <div className="text-center mb-12">
              <GenerateButton
                isGenerating={state.isGenerating}
                disabled={!actions.canGenerate}
                onClick={actions.generateRandomNumber}
              />
            </div>

            <NumberDisplay
              randomNumber={state.randomNumber}
              isGenerating={state.isGenerating}
              range={state.range}
            />
          </Card>
        </main>

        <AppFooter />
      </div>
    </div>
  );
});

RandomNumberGenerator.displayName = "RandomNumberGenerator";
