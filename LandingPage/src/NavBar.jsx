import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import elioralogo from "../public/Images/elioralogo.png";


const NavBar = () => {
  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Pricing", link: "#pricing" },
    { id: 3, label: "Services", link: "#services" },
    { id: 4, label: "Contact", link: "#contact" },
  ];

  return (
    <header className="navigation">
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* Social Links */}
            <div className="col-lg-2 col-md-4">
              <div className="header-top-socials text-center text-lg-left text-md-left">
                <a href="https://www.facebook.com/elioraitservices?mibextid=ZbWKwL" target="_blank" aria-label="facebook">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com/eliora_website?igshid=MzRlODBiNWFlZA==" target="_blank" aria-label="twitter">
                  <FaSquareInstagram />
                </a>
                <a href="https://www.linkedin.com/company/eliora-it-services/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            {/* Contact Info */}
            <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
              <div className="header-top-info mb-2 mb-md-0">
                <a href="tel:+91 8668681466">
                  Call Us : <span>+91 8668681466</span>
                </a>
                <a href="mailto:info@elioratechno.com">
                <MdOutlineMailOutline /> <span>info@elioratechno.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div id="navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg px-0 py-4">
                {/* Logo */}
                <a
                  className="navbar-brand"
                  href="https://elioratechno.com/"
                  target="_blank"
                >
                  <img
                    className="navBarImage"
                    src={elioralogo}
                    alt="Logo"
                  />
                </a>
                {/* Navbar Toggler */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <FaBars className="text-white"/>
                </button>
                {/* Navbar Collapse */}
                <div
                  className="collapse navbar-collapse text-center justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    {/* Menu Items */}
                    {menuItems.map((item) => (
                      <li key={item.id} className="nav-item">
                        <a className="nav-link" href={item.link}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
