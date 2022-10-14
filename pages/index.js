import styles from "../styles/Home.module.css";
import NavbarComponent from "../components/NavbarComponent";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <Content />
      <Footer />
    </>
  );
}
