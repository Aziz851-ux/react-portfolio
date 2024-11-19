import logo from "./assets/logo.png";
function Header() {
  return (
    <>
      <div id="home" className="super">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="menus">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-main_content">
          <p>React Developer</p>
          <h1>
            Hi, I am <span> Aziz Allah </span> <br /> Kakar From Afghanistan
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
