export default function WhatsApp() {

  const phoneNumber = "918555812798";

  const message =
    "Hi Zentryx Logic, I would like to know more about your services.";


  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (

    <a

      href={whatsappURL}

      target="_blank"

      rel="noopener noreferrer"

      className="whatsapp-button"

    >

      💬

    </a>

  );

}