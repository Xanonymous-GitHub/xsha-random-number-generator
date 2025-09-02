import { memo, useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type RangeInputProps = {
  readonly label: string;
  readonly value: number;
  readonly error: string | undefined;
  readonly placeholder?: string;
  readonly onChange: (value: string) => void;
};

export const RangeInput = memo<RangeInputProps>(
  ({ label, value, error, placeholder, onChange }) => {
    const inputId = useId();

    return (
      <div className="space-y-2">
        <Label
          htmlFor={inputId}
          className="text-sm font-semibold text-slate-700 dark:text-slate-300"
        >
          {label}
        </Label>
        <Input
          id={inputId}
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`text-lg font-mono transition-all duration-200 ${
            error
              ? "border-red-400 ring-red-200 dark:ring-red-800"
              : "border-slate-300 dark:border-slate-600 focus:ring-blue-200 dark:focus:ring-blue-800"
          }`}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);
