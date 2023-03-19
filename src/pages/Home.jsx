import { Hero, CrisisBanner, BlogSpace } from "../components";
import { About, Professionals, FAQs } from "../pages";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Professionals />
      <CrisisBanner />
      <BlogSpace />
      <FAQs />
    </main>
  );
};

export default Home;
