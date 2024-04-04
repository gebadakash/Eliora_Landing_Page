import "./PricingSection.css";

const PricingSection = () => {
  const pricingPlans = [
    { id: 1, name: "Static Website", price: "$0", perUser: "Per User / Month", features: ["5 Pages Website", "1 Year Free Domain", "1 Year Free Hosting", "5 Free Email IDs","Contact Form","SSL Certificate","Animations", "Inquiry form Pop Up","Seo Friendly website","100% Responsive","Call Button Integration","Database Connectivity"], buttonLabel: "Buy Now" },
    { id: 2, name: "Dynamic Website", price: "$12", perUser: "Per User / Month", features: ["12 Pages Website", "1 Year Free Domain", "1 Year Free Hosting", "20 Free Email IDs","Contact Form","SSL Certificate","Animations","Inquiry form Pop Up","Seo Friendly website","100% Responsive","Call Button Integration","Database Connectivity"], buttonLabel: "Buy Now" },
    { id: 3, name: "E-Commerce", price: "$39", perUser: "Per User / Month", features: ["12 Pages Website", "1 Year Free Domain", "1 Year Free Hosting", "20 Free Email IDs","Contact Form","SSL Certificate","Animations","Payment Getway","Online Booking","100% Responsive","Add to Cart Option","Support for 3 Months","Admin Panel"], buttonLabel: "Buy Now" }
  ];

  return (
    <section className="section pricing bg-gray position-relative" id="pricing" >
      <div className="hero-img bg-overlay h70"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="section-title">
              <span className="h6 text-dark">Our Pricing</span>
              <h2 className="mt-3 content-title text-dark">No hidden Charges.Choose Your Perfect Plan</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {pricingPlans.map(plan => (
            <div key={plan.id} className="col-md-4">
              <div className="card text-center mb-md-0 mb-3">
                <div className="card-body py-5">
                  <div className="pricing-header mb-5">
                    <h5 className="font-weight-normal mb-3">{plan.name}</h5>
                    {/* <h1 style={{color:"tomato"}}>{plan.price}</h1> */}
                    {/* <p className="text-muted">{plan.perUser}</p> */}
                  </div>
                  <strong>Includes:</strong>
                  <ul className="list-unstyled lh-45 mt-3 text-black">
                    {plan.features.map((feature, index) => (
                      <li key={index}>- {feature}</li>
                    ))}
                  </ul>
                  <a href="#BuyNow" className={`btn btn-small ${plan.name === "Basic" ? "btn-main" : "btn-solid-border"} mt-3 btn-round-full`}>{plan.buttonLabel}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="cta-block mt-5 p-5 rounded">
          <div className="row justify-content-center align-items-center ">
            <div className="col-lg-7 text-center text-lg-left">
              <span className="text-color">For Every type business</span>
              <h2 className="mt-2 text-white">Entrust Your Project to Our Best Team of Professionals</h2>
            </div>
            <div className="col-lg-4 text-center text-lg-right mt-4 mt-lg-0">
              <a href="#contact" className="btn btn-main btn-round-full">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
