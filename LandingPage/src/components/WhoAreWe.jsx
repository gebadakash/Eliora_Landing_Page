import "./WhoAreWe.css";


const WhoAreWe = () => {
  const services = [
    "Responsive Web Design",
    "Up to 7 Pages",
    "Clean User Interface",
    "Search Engine Friendly",
    "Dynamic Website",
    "Social Media Integration"
  ];

  return (
    <section className="section about position-relative">
      <div className="bg-about"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6 offset-md-0">
            <div className="about-item">
              <span className="h6 text-color">What we are</span>
              <h2 className="mt-3 mb-4 position-relative content-title">We are a dynamic team of creative people</h2>
              <div className="about-content">
                <h4 className="mb-3 position-relative">We are Perfect Solution</h4>
                <ul className="services-list">
                  {services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <a href="#cta" className="btn btn-main btn-round-full">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
