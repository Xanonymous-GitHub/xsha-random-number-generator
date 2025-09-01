import { RandomNumberGenerator } from "@/components/RandomNumberGenerator";
import { useTheme } from "@/hooks/use-theme";

function App() {
  // Initialize auto dark/light mode detection
  useTheme();

  return <RandomNumberGenerator />;
}

export default App;
