import "./styles.css";
import pic2 from "../black man.jpg";

function Hero() {
  return (
    <div className="Hero">
      <section>
        <h1>
          Together we achieve!
          <span></span>
        </h1>
        <p>
          We study our clients interest from all possible ways so, we can assure
          that
          <br /> we catch all points to deliver with our offerings and work. Our
          team is
          <br /> experienced and focussed to make you happy!
        </p>
        <span>
          <button>Get Started</button>
          <button>Watch Video</button>
        </span>
      </section>
      <section>
        <img src={pic2} />
      </section>
    </div>
  );
}

export default Hero;
