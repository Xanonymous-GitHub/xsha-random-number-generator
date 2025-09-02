import { RandomNumberGenerator } from "@/components/RandomNumberGenerator";
import { useTheme } from "@/hooks/use-theme";

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
