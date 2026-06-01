import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import VideoSection from "./components/VideoSection/VideoSection";
import PlanetGrid from "./components/PlanetGrid/PlanetGrid";
import FactsTable from "./components/FactsTable/FactsTable";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <VideoSection />
      <PlanetGrid />
      <FactsTable />
      <ContactForm />
      <Footer />
    </>
  );
}
export default App;