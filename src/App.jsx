import "./App.css";
import {
  Home,
  About,
  Professionals,
  FAQs,
  Blog,
  ProfileSetup,
  ProfileDashBoard,
} from "./pages";
import { AboutSection, Reviews } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/profilesetup" element={<ProfileSetup />} />
        <Route path="/profiledashboard" element={<ProfileDashBoard />}>
          <Route path="aboutsection" element={<AboutSection />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </div>
  );
}

export default App;
