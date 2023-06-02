import Courses from "./Components/Courses/Courses";
import Action from "./Components/Home/Action";
import Companies from "./Components/Home/Companies";
import Footer from "./Components/Home/Footer";
import Help from "./Components/Home/Help";
import Hero from "./Components/Hero/Hero";
import Testimonials from "./Components/Testimonials/Testimonials";
import WhyUs from "./Components/Home/WhyUs";

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
