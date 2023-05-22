import {
  BsClock,
  BsEnvelopeFill,
  BsMessenger,
  BsTelephoneFill,
  BsWhatsapp,
} from "react-icons/bs";

import {
  companyAddress,
  companyEmail,
  companyName,
  companyOfficeHours,
  companyPhoneNumber,
} from "../../ts/companyInfo";

const Address = () => (
  <div className="address-div">

    <header className="header">
      <h1>
        Let's build something <big>GREAT</big> today
      </h1>
      <p>
        Fill up the form and our Team will get back to you as soon as possible.
      </p>

    </header>

    <div className="information-div">

      <a href={`tel:${companyPhoneNumber}`}><BsTelephoneFill className="inline" /> {companyPhoneNumber}</a>

      <a href={`mailto:${companyEmail}`}><BsEnvelopeFill className="inline" /> {companyEmail}</a>

      <span><BsClock className="inline" /> {companyOfficeHours}</span>
    </div>

    <div className="our-address">
      <header className="header">
        <h1 className="capitalize">our address:</h1>
        <p>{companyAddress}</p>
      </header>

      <div>
        <span className="text-white text-lg">You can also reach us through your favorite channel.</span>

        <aside className="contact-aside">
          <a
            className="contact-social"
            href={`https://api.whatsapp.com/send?phone=${companyPhoneNumber}`}
          >
            <BsWhatsapp />
          </a>

          <a className="contact-social" href={`http://m.me/${companyName}`}>
            <BsMessenger />
          </a>
        </aside>
      </div>
    </div>
  </div>
);

export default Address;
