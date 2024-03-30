import CenterContent from "./components/CenterContent";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import "./index.css"

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <CenterContent />
      <Footer />
    </>

  );
}
