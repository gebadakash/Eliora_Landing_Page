import "./ContactForm.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
    return (
        <>
        <h2 className="mt-3 content-title text-dark" style={{textAlign:"center"}}>Contact Us</h2>
        <section className="contact-form-wrap section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <form id="contact-form" className="contact__form" method="post" action="index.html">
                            <h3 className="text-md mb-4">Contact Form</h3>
                            <div className="form-group">
                                <input name="name" type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input name="contact" type="text" className="form-control" placeholder="Contact Number" required />
                            </div>
                            <div className="form-group-2 mb-4">
                                <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
                            </div>
                            <button className="btn btn-main" name="submit" type="submit">Send Message</button>
                        </form>
                    </div>

                    <div className="col-lg-5 col-sm-12">
                        <div className="contact-content pl-lg-5 mt-5 mt-lg-0" style={{paddingLeft:"3rem"}}>
                            <span className="text-muted">We are Professionals</span>
                            <h2 className="mb-5 mt-2">Don’t Hesitate to contact with us for any kind of information</h2>

                            <ul className="address-block list-unstyled">
                                <li>
                                 <MdOutlineLocationOn/> Trimurtee Nagar, Nagpur, Maharashtra 440022
                                </li>
                                <li>
                                 <MdOutlineMail/> Email: info@elioratechno.com
                                </li>
                                <li>
                                    <FaMobileAlt/> Phone: +91 8668681466
                                </li>
                            </ul>

                            <ul className="social-icons list-inline mt-5">
                                <li className="list-inline-item me-2">
                                    <a href="https://www.facebook.com/elioraitservices?mibextid=ZbWKwL" target="_blank"><FaFacebookF style={{fontSize:"30px"}}/></a>
                                </li>
                                <li className="list-inline-item me-2">
                                    <a href="https://instagram.com/eliora_website?igshid=MzRlODBiNWFlZA==" target="_blank"><FaSquareInstagram style={{fontSize:"30px"}}/></a>
                                </li>
                                <li className="list-inline-item me-2">
                                    <a href="https://www.linkedin.com/company/eliora-it-services/" target="_blank"><FaLinkedin style={{fontSize:"30px"}}/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default ContactForm;
