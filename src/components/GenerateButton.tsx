import { Shuffle } from "lucide-react";
import { memo } from "react";
import { Button } from "@/components/ui/button.tsx";

export type GenerateButtonProps = {
  readonly isGenerating: boolean;
  readonly disabled: boolean;
  readonly onClick: () => void;
};

export const GenerateButton = memo<GenerateButtonProps>(
  ({ isGenerating, disabled, onClick }) => {
    return (
      <Button
        onClick={onClick}
        disabled={disabled}
        size="lg"
        className="px-12 py-4 text-lg font-semibold bg-gradient-to-r dark:text-white cursor-pointer from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        aria-label={
          isGenerating ? "Generating random number" : "Generate random number"
        }
      >
        <Shuffle
          className={`w-5 h-5 mr-2 ${isGenerating ? "animate-spin" : ""}`}
          aria-hidden="true"
        />
        {isGenerating ? "Generating..." : "Generate Random Number"}
      </Button>
    );
  },
);
