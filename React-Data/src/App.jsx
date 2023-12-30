import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/theme-slice";

function App() {
  const currentTheme = useSelector(selectTheme);
  return (
    <div className={`${currentTheme}`}>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
