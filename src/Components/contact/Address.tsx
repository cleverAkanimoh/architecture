import { BsClockFill, BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs"
import { companyAddress, companyEmail, companyPhoneNumber } from "../../ts/companyInfo"

type Props = {}

const Address = (props: Props) => <div>
  <div>
    <h1>let's build something <big>BIG</big> today</h1>
    <p>Fill up the form and our Team will get back to you as soon as possible.</p>
  </div>

  <div>

    <div>
      <BsTelephoneFill />
      <a href={`tel:${companyPhoneNumber}`}>{companyPhoneNumber}</a>
    </div>


    <div>
      <BsEnvelopeFill />
      <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
    </div>


    <div>
      <BsClockFill />
      <span>Office hours: Mon - Fri 9.00 am - 4.00 pm GMT +3</span>
    </div>

  </div>

  <div>
    <div>
      <h1>our address:</h1>
      <p>{companyAddress}</p>
    </div>
  </div>
</div>

export default Address