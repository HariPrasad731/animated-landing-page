import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import About from "./components/About";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <Header />

      {/* Page Content (offset for fixed header) */}
      <main className="pt-16">
        <Hero />
        <Logos />
        <About />
        <Features />
        <Steps />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
