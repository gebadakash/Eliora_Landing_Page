import whatsappLogo from "../../public/Images/WhatsApp.png";

const WhatsApp = () => {
  return (
    <div className='fixed-bottom right-100 p-3' style={{zIndex:"6", left:"initial", animation:'effect 5s infinite ease-in'}}>
    <a href='https://api.whatsapp.com/send?phone=+918956101181&text=Hello' target='_blank'>
        <img src={whatsappLogo} width="60" alt='whatsApp'/>
    </a>
      
    </div>
  )
}

export default WhatsApp
