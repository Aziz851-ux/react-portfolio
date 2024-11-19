import code from "./assets/codespn.png";
import crop from "./assets/croppng.png";
import appstore from "./assets/appstore.png";

function Services() {
  return (
    <>
      <div id="services" className="services-header">
        <h1>Services</h1>
      </div>
      <div className="cards">
        <div className="card card1">
          <img src={code} alt="" />
          <h2>Web Design</h2>
          <p>
            in this section you can order me every kind of websites to develope
            for you, no matter if that is related to the frontend or backend.
          </p>
          <button>
            <span className="text">Learn More</span>
          </button>
        </div>

        <div className="card card2">
          <img src={crop} alt="" />
          <h2>UI/UX Design</h2>
          <p>
            this section is related to the Graphic Design, if you want to order
            for Logo, Banner, ID Card, Business Card and any other Graphic
            Designs that you want i can.
          </p>
          <button>
            <span className="text">Learn More</span>
          </button>
        </div>

        <div className="card card3">
          <img src={appstore} alt="" />
          <h2>App Design</h2>
          <p>
            in app Developing section you can order me for any kind of social
            media, Business, School, Course and any other kind of apps to create
            for you.
          </p>
          <button>
            <span className="text">Learn More</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;
