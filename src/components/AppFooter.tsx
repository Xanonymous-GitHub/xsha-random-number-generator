import { memo } from "react";

export type AppFooterProps = {
  readonly year?: number;
  readonly author?: string;
};

export const AppFooter = memo<AppFooterProps>(
  ({ year = new Date().getFullYear(), author = "Xanonymous" }) => {
    return (
      <footer className="text-center text-slate-500 dark:text-slate-500 text-sm">
        Copyright &copy; {year} {author}. All rights reserved.
      </footer>
    );
  },
);
