import { RandomNumberGenerator } from "@/components/RandomNumberGenerator.tsx";
import { useTheme } from "@/hooks/use-theme.ts";

function App() {
  // Initialize auto dark/light mode detection with modern useSyncExternalStore
  useTheme();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        precedence="high"
      />

      <RandomNumberGenerator />
    </>
  );
}

export default App;
