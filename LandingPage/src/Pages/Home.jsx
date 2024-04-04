import SectionIntro from '../components/SectionIntro';
import Header from '../components/Header';
import WhoAreWe from '../components/WhoAreWe';
import CounterSection from '../components/CounterSection';
import ServiceSection from '../components/ServiceSection';
import CtaSection from '../components/CtaSection';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import ContactForm from '../components/ContactForm';
import GoogleForm from '../components/GoogleForm';
import WhatsApp from '../components/WhatsApp';

const Home = () => {
  return (
    <>
    <Header/>
    <SectionIntro/>
    <WhoAreWe/>
    <CounterSection/>
    <ServiceSection/>
    <CtaSection/>
    <TestimonialSection/>
    <PricingSection/>
    <GoogleForm/>
    <ContactForm/>
    <WhatsApp/>
    </>
  )
}

export default Home
