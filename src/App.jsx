import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { CullFaceFrontBack } from "three";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className='relative z-0'>
          <Hero />
        </div>
        </div>
        <About />
        <Experience />
        <Works />
      </div>
    </BrowserRouter>
  );
}

export default App;
