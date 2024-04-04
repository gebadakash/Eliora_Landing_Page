import "./Header.css";


const Header = () => {
  return (
    <section className="slider mt-5" id="BuyNow">
      <div className="container">
        <div className="row g-2">
          <div className="col-lg-6 col-md-10">
            <div className="block">
              <span className="d-block mb-3 mt-4 text-dark text-capitalize">Prepare for new future</span>
              <h1 className="animated fadeInUp mb-5">Create your Business Website</h1>
              <span className="d-block mb-3 mt-4 text-dark text-capitalize">Are you trying to make a mark online? You're in luck! At Eliora Technologies,<br></br> we're experts in creating attractive and easy-to-use websites<br></br> that make your brand look great</span>
              <h1 className="animated fadeInUp mb-5 animate-charcter">₹6999 /- Only</h1>
              <a href="#contact" className="btn btn-main animated fadeInUp btn-round-full" aria-label="Get started">Contact us<i className="btn-icon fa fa-angle-right ml-2"></i></a>
            </div>
          </div>

          <div className="col-lg-6 text-center text-lg-end">
                <img className="img-fluid animated zoomIn" style={{maxWidth:"90%"}} src="Images/abt.png" alt="" />
            </div>


        </div>
      </div>
    </section>
  );
};

export default Header;
