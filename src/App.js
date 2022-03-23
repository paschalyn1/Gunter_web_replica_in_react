import "./styles.css";
import Navbar from "./nav.js";
import Hero from "./hero.js";
import Box from "./box.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className="boxes">
        <Box
          title="Email Marketing"
          message="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit."
        />

        <Box
          title="Market Analysis"
          message="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit."
        />

        <Box
          title="Keyword Research"
          message="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}
