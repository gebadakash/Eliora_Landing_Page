import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TfiLayers } from "react-icons/tfi";
import { FaChartLine } from "react-icons/fa";
import { TfiVector } from "react-icons/tfi";
import { IoLogoAndroid } from "react-icons/io";
import { RxPencil2 } from "react-icons/rx";

const ServiceSection = () => {
  const services = [
    { id: 1, icon: <HiOutlineComputerDesktop style={{fontSize:"50px", color:"tomato"}} className="i"/>, title: "Web development.", description: "Our expert team crafts responsive and dynamic websites tailored to your business needs, ensuring a seamless user experience across all devices." },
    { id: 2, icon: <TfiLayers style={{fontSize:"50px", color:"tomato"}}/>, title: "Interface Design.", description: "We specialize in creating visually appealing and intuitive user interfaces that enhance user engagement and satisfaction." },
    { id: 3, icon: <FaChartLine  style={{fontSize:"50px", color:"tomato"}}/>, title: "Business Consulting.", description: "Leverage our expertise in business consulting to optimize your operations, streamline processes, and achieve sustainable growth." },
    { id: 4, icon: <TfiVector style={{fontSize:"50px", color:"tomato"}}/>, title: "Branding.", description: "Let us help you build a strong brand identity that resonates with your target audience and sets you apart from the competition." },
    { id: 5, icon: <IoLogoAndroid style={{fontSize:"50px", color:"tomato"}}/>, title: "App development.", description: "We develop high-quality mobile applications for iOS and Android platforms, combining functionality with an exceptional user experience." },
    { id: 6, icon: <RxPencil2 style={{fontSize:"50px", color:"tomato"}}/>, title: "Content creation.", description: "Our creative team produces compelling and engaging content across various mediums to effectively convey your brand message and drive customer engagement." }
  ];

  return (
    <section className="section service border-top" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="section-title">
              <span className="h6 text-color">Our Services</span>
              <h2 className="mt-3 content-title">We provide a wide range of creative services</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services.map(service => (
            <div key={service.id} className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                {service.icon}
                <h4 className="mb-3">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
