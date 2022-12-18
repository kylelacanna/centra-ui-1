import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home.js";
import { About } from "./pages/About.js";
import { Services } from "./pages/Services.js";
import { Contact } from "./pages/Contact.js";
import { NavBar } from "./components/NavBar.js";
import { Footer } from "./components/Footer.js";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
