import { Cursor } from "./components/Cursor";
import { Masthead } from "./components/Masthead";
import { Hero } from "./components/Hero";
import { CurrentlyBuilding } from "./components/CurrentlyBuilding";
import { SelectedWork } from "./components/SelectedWork";
import { About } from "./components/About";
import { TheStack } from "./components/TheStack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useInvertEasterEgg } from "./hooks/useInvertEasterEgg";

export default function App() {
  useInvertEasterEgg();

  return (
    <>
      <Cursor />
      <Masthead />
      <main className="wrap">
        <Hero />
        <CurrentlyBuilding />
        <SelectedWork />
        <About />
        <TheStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
