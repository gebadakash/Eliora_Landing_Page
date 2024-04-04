import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget">
              <h4 className="text-capitalize mb-4">Company</h4>
              <ul className="list-unstyled footer-menu lh-35">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget">
              <h4 className="text-capitalize mb-4">Quick Links</h4>
              <ul className="list-unstyled footer-menu lh-35">
                <li><a href="/">Home</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mx-auto">
            <div className="widget">
              <h4 className="text-capitalize mb-4">Let's Build Your Website</h4>
              <p>Contact us to get started on your website development journey.</p>
              <form action="#" className="sub-form">
                <input type="text" className="form-control mb-3" placeholder="Contact Now ..." />
                <a href="#" className="btn btn-main btn-small">SEND</a>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="widget">
              <div className="logo mb-4">
                <h3>Eliora Technologies</h3>
              </div>
              <h6><a href="mailto:info@elioratechno.com">info@elioratechno.com</a></h6>
              <a href="tel:+91 8668681466"><span className="text-color h4">+91 8668681466</span></a>
              <br></br>
              <a href="tel:+91 8956101181"><span className="text-color h4">+91 8956101181</span></a>
            </div>
          </div>
        </div>
        <div className="footer-btm pt-4 mt-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright">
                Copyright © 2020, Designed &amp; Developed by <a href="https://elioratechno.com/" target="_blank">Eliora Technologies Pvt. Ltd.</a>
              </div>
            </div>
            <div className="col-lg-6 text-left text-lg-right">
              <ul className="list-inline footer-socials">
                <li className="list-inline-item"><a href="https://www.facebook.com/elioraitservices?mibextid=ZbWKwL" target="_blank"><FaFacebookF/> Facebook</a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/company/eliora-it-services/" target="_blank"><FaLinkedin/> LinkedIn</a></li>
                <li className="list-inline-item"><a href="https://instagram.com/eliora_website?igshid=MzRlODBiNWFlZA==" target="_blank"><FaInstagram/> Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
