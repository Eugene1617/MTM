import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import FindUs from './components/FindUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Stats />
        <Gallery />
        <FindUs />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
