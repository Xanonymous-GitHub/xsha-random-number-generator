import { memo } from "react";

export type AppHeaderProps = {
  readonly title?: string;
  readonly subtitle?: string;
};

export const AppHeader = memo<AppHeaderProps>(
  ({
    title = "Random Number Generator",
    subtitle = "Generate random numbers within your custom range",
  }) => {
    return (
      <header className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">{subtitle}</p>
      </header>
    );
  },
);
