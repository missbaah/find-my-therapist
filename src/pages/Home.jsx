import { NavBar, Footer, Hero, CrisisBanner, BlogSpace } from "../components";
import { About, Professionals, FAQs } from "../pages";

const Home = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Professionals />
      <CrisisBanner />
      <BlogSpace />
      <FAQs />
      <Footer />
    </main>
  );
};

export default Home;
