import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LiaAwardSolid } from "react-icons/lia";
import { PiSquaresFourBold } from "react-icons/pi";

const SectionIntro = () => {
  const introItems = [
    { id: 1, icon: <HiOutlineComputerDesktop style={{fontSize:"100px", color:"tomato"}} />, title: "Modern & Responsive design", description: "Our modern and responsive designs ensure that your website looks stunning and functions flawlessly on all devices, providing a seamless user experience." },
    { id: 2, icon: <LiaAwardSolid style={{fontSize:"100px", color:"tomato"}} />, title: "Awarded licensed company", description: "As an award-winning company, we take pride in our exceptional services and dedication to client satisfaction. Trust us to deliver top-notch solutions for your business needs." },
    { id: 3, icon: <PiSquaresFourBold style={{fontSize:"100px", color:"tomato"}} />, title: "Build your website Professionally", description: "Let us build your website with professionalism and expertise. Our team ensures that your website not only looks great but also performs efficiently." }
  ];

  return (
    <section className="section intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-title">
              <span className="h6 text-color">We are creative & expert people</span>
              <h2 className="mt-3 content-title">We work with business & provide solution to client with their business problem</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {introItems.map(item => (
            <div key={item.id} className={`col-lg-4 col-md-6 col-12 ${item.id === 3 ? 'col-md-12' : ''}`}>
              <div className="intro-item mb-5 mb-lg-0">
                {item.icon}
                <h4 className="mt-4 mb-3">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
