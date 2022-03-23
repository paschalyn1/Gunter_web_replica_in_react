import "./styles.css";
import pic from "../gunter_logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <div className="logo">
          <img src={pic} alt={"Logo"} />
        </div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">En</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
