import "./CtaSection.css";

const CtaSection = () => {
  return (
    <section className="section cta" id="cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="cta-item bg-white p-5 rounded">
              <span className="h6 text-color">We create for you</span>
              <h2 className="mt-2 mb-4">Entrust Your Project to Our Best Team of Professionals</h2>
              <p className="lead mb-4">Have any project on mind? For immediate support:</p>
              <h3><i className="ti-mobile mr-3 text-color"></i>+91 8668681466</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
