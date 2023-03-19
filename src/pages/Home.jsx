import { Hero, CrisisBanner } from "../components";
import { About, Professionals } from "../pages";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Professionals />
      <CrisisBanner />
    </main>
  );
};

export default Home;
