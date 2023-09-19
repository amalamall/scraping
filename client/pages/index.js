
import Testimonials from 'components/shared/Testimonials';
import Features from 'components/Features';
import Products from 'components/Products';
import Hero from "components/Hero"
import Contact from 'components/Contact';


export default function Home() {
  return (
    <div className="bootstrap-wrapper" > 
    <Hero />
    <Products />
    <Features />
    <Testimonials />
    <Contact />
    </div>
  );
}
