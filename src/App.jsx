import "./App.css";
import { NavBar, Footer } from "./components";
import { Home, About, Professionals, FAQs, Blog } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
