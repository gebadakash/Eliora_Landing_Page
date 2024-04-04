import "./TestimonialSection.css";
import { TfiQuoteLeft } from "react-icons/tfi";

const TestimonialSection = () => {
  const testimonials = [
    { id: 1, text: "From the initial consultation to the final delivery, Eliora showcased their expertise and commitment to excellence. They took the time to thoroughly understand my business objectives.", author: "Chintan", position:"Tripod Technologies" },
    { id: 2, text: "First and foremost, the design of the website was visually stunning. The layout was elegant and sophisticated, perfectly complementing the beauty of the sarees themselves.", author: "Mona Yadav.",position:" Hasthkala"},
    { id: 2, text: "We collaborated with Eliora Technologies, a top-notch website development company, to create our company website at Horn Excellence.", author: "Hassan Farah", position:"Horn Excellence Consultancy"},
    // Add more testimonials here as needed
  ];

  return (
    <section className="section testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-title">
              <span className="h6 text-color">Clients testimonial</span>
              <h2 className="mt-3 content-title">Check what's our clients say about us</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row testimonial-wrap">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-lg-4 col-md-6 col-sm-6">
              <div className="testimonial-item position-relative">
                {/* <i className="ti-quote-left text-color"></i> */}
                <TfiQuoteLeft className="ti-quote-left text-color" style={{fontSize:"30px"}}/>

                <div className="testimonial-item-content">
                  <p className="testimonial-text">{testimonial.text}</p>

                  <div className="testimonial-author">
                    <h5 className="mb-0 text-capitalize">{testimonial.author}</h5>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
