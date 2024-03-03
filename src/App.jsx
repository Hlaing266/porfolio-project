import Topbar from "./Components/topbar/Topbar";
import Portfolio  from "./Components/portfolio/Portfolio";
import Work from "./Components/works/Work";
import Testimonial from "./Components/testimonials/Testimonals";
import Intro from "./Components/into/Intro";
import Contact from "./Components/contact/Contact";
import "./app.css";
import { useState } from "react";


function App() {
  const  [openmenu,closemenu]=useState(false);
  return (
    <div className="app">
     <Topbar openmenu={openmenu} closemenu={closemenu}/>
     <div className="sections">
      <Intro />
      <Portfolio />
      <Work />
      <Testimonial />
      <Contact />
     </div>
    </div>
  );
}

export default App;
