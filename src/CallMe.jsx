import email from "./assets/send.png";
import phone from "./assets/phone.png";
import facebook from "./assets/facebook-brands-solid.svg";
import youtube from "./assets/youtube-brands-solid.svg";
import github from "./assets/github-brands-solid.svg";
import twitter from "./assets/x-twitter-brands-solid.svg";
import dv from "./assets/DV.jpg";
import cv from "./assets/My CV.pdf";
import whatsapp from "./assets/whatsapp.png";
function Call() {
  return (
    <div id="contact" className="contact">
      <div className="contact-elements">
        <h1>Contact Me</h1>
        <div className="email">
          <img src={email} alt="" />
          <p>azizullahkakar711@gmail.com</p>
        </div>
        <div className="phone">
          <img src={phone} alt="" />
          <p>+93 786756190</p>
        </div>
        <div className="social-icons">
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={youtube} alt="" />
          </a>
          <a href="">
            <img src={github} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={whatsapp} alt="" />
          </a>
        </div>
        <div>
          <button className="btn">
            <a href={cv}></a>
            <i className="animation"></i>Download CV
            <i className="animation"></i>
          </button>
        </div>
      </div>
      <div className="contact-image">
        <img src={dv} alt="" />
      </div>
    </div>
  );
}

export default Call;
