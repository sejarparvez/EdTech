import Courses from "./components/Courses/Courses";
import Hero from "./components/Hero/Hero";
import Action from "./components/Home/Action";
import Companies from "./components/Home/Companies";
import Footer from "./components/Home/Footer";
import Help from "./components/Home/Help";
import WhyUs from "./components/Home/WhyUs";
import Testimonials from "./components/Testimonials/Testimonials";

export default function App() {
  return (
    <div>
      <Hero />
      <Companies />
      <Courses />
      <Help />
      <WhyUs />
      <Testimonials />
      <Action />
      <Footer />
    </div>
  );
}
