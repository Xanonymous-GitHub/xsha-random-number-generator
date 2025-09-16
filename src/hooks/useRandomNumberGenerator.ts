import { useCallback, useMemo, useState } from "react";

export type RandomNumberRange = {
  readonly min: number;
  readonly max: number;
};

export type ValidationErrors = {
  readonly min: string | undefined;
  readonly max: string | undefined;
};

export type RandomNumberState = {
  readonly range: RandomNumberRange;
  readonly randomNumber: number | null;
  readonly isGenerating: boolean;
  readonly errors: ValidationErrors;
};

export type RandomNumberActions = {
  readonly updateMin: (value: string) => void;
  readonly updateMax: (value: string) => void;
  readonly generateRandomNumber: () => Promise<void>;
  readonly canGenerate: boolean;
  readonly hasErrors: boolean;
};

const RANGE_LIMITS = {
  MIN: -1_000_000,
  MAX: 1_000_000,
} as const;

const validateRange = (min: number, max: number): ValidationErrors => {
  const errors: ValidationErrors = {
    min: undefined,
    max: undefined,
  };

  if (min >= max) {
    return {
      min: "Min must be less than max",
      max: "Max must be greater than min",
    };
  }

  if (min < RANGE_LIMITS.MIN) {
    return {
      ...errors,
      min: `Value too small (min: ${RANGE_LIMITS.MIN.toLocaleString()})`,
    };
  }

  if (max < RANGE_LIMITS.MIN) {
    return {
      ...errors,
      max: `Value too small (min: ${RANGE_LIMITS.MIN.toLocaleString()})`,
    };
  }

  if (min > RANGE_LIMITS.MAX) {
    return {
      ...errors,
      min: `Value too large (max: ${RANGE_LIMITS.MAX.toLocaleString()})`,
    };
  }

  if (max > RANGE_LIMITS.MAX) {
    return {
      ...errors,
      max: `Value too large (max: ${RANGE_LIMITS.MAX.toLocaleString()})`,
    };
  }

  return errors;
};

const generateSecureRandom = (min: number, max: number): number => {
  const range = max - min + 1;
  const randomBuffer = new Uint32Array(1);
  crypto.getRandomValues(randomBuffer);

  // Convert to float in range [0, 1) and scale to desired range
  const firstByte = randomBuffer[0];
  if (firstByte === undefined) {
    throw new Error("Failed to generate secure random number");
  }
  const randomFloat = firstByte / (0xffffffff + 1);
  return Math.floor(randomFloat * range) + min;
};

export const useRandomNumberGenerator = (
  initialMin = 1,
  initialMax = 100,
): [RandomNumberState, RandomNumberActions] => {
  const [range, setRange] = useState<RandomNumberRange>({
    min: initialMin,
    max: initialMax,
  });
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const errors = useMemo(
    () => validateRange(range.min, range.max),
    [range.min, range.max],
  );

  const hasErrors = useMemo(
    () => errors.min !== undefined || errors.max !== undefined,
    [errors],
  );

  const canGenerate = useMemo(
    () => !isGenerating && !hasErrors && range.min < range.max,
    [isGenerating, hasErrors, range.min, range.max],
  );

  const updateMin = useCallback((value: string) => {
    const numValue = Number.parseInt(value, 10) || 0;
    setRange((prev) => ({ ...prev, min: numValue }));
  }, []);

  const updateMax = useCallback((value: string) => {
    const numValue = Number.parseInt(value, 10) || 0;
    setRange((prev) => ({ ...prev, max: numValue }));
  }, []);

  const generateRandomNumber = useCallback(async () => {
    const currentErrors = validateRange(range.min, range.max);
    if (currentErrors.min !== undefined || currentErrors.max !== undefined)
      return;

    setIsGenerating(true);
    setRandomNumber(null);

    // Animation delay for user experience
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const result = generateSecureRandom(range.min, range.max);
    setRandomNumber(result);
    setIsGenerating(false);
  }, [range.min, range.max]);

  const state: RandomNumberState = {
    range,
    randomNumber,
    isGenerating,
    errors,
  };

  const actions: RandomNumberActions = {
    updateMin,
    updateMax,
    generateRandomNumber,
    canGenerate,
    hasErrors,
  };

  return [state, actions];
};

// in-source testing

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("validate the validateRange is good good", () => {
    expect(validateRange(66, 44)).toStrictEqual({
      min: "Min must be less than max",
      max: "Max must be greater than min",
    });
    expect(validateRange(55, 55)).toStrictEqual({
      min: "Min must be less than max",
      max: "Max must be greater than min",
    });

    // expect(validateRange()).toStrictEqual()
    // expect(validateRange()).toStrictEqual()
    // expect(validateRange()).toStrictEqual()
    // expect(validateRange()).toStrictEqual()
    // expect(validateRange()).toStrictEqual()
  });
}
