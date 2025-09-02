import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function createThemeStore() {
  let theme: Theme = "light";
  const listeners = new Set<() => void>();

  // Initialize from system preference
  if (typeof window !== "undefined") {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    theme = mediaQuery.matches ? "dark" : "light";

    // Apply initial theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Listen for system changes
    mediaQuery.addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";
      if (newTheme !== theme) {
        theme = newTheme;

        // Update DOM
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        // Notify listeners
        for (const listener of listeners) {
          listener();
        }
      }
    });
  }

  return {
    getSnapshot: () => theme,
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    setTheme: (newTheme: Theme) => {
      if (newTheme !== theme) {
        theme = newTheme;

        if (typeof document !== "undefined") {
          if (theme === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }

        for (const listener of listeners) {
          listener();
        }
      }
    },
  };
}

const themeStore = createThemeStore();

export function useTheme() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    () => "light",
  );

  const toggleTheme = useCallback(() => {
    themeStore.setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return { theme, toggleTheme };
}
