import Article from "../Components/about/Article";
import useWindowTitle from "../hooks/useWindowTitle";
import { companyEmail, companyName, companyNumber, companyWhatsapp } from "../ts/companyInfo";

import '../css/about.css'

export default function About() {
  useWindowTitle("About Us | Rollands.com");

  return (
    <section className="about-section-style">

      <div className="py-2">
        <h1 className="about-h1-style">about us</h1>
      </div>
      <div>

        <Article
          heading="WHO WE ARE"
          text={`${companyName} LLC is an International Business incorporated in the USA with Company number ${companyNumber}. With a main focus on the African market we are specialized in creating all types of house plans (construction drawings) since 2014. We consist of a diversified team of professionals working remotely from different countries across the globe but mostly based in Africa. We work with several Architects, Engineers, Quantity Surveyors, Draftsmen, and 3D Visual Artists to bring you the best and cheapest house plans and other building documents specifically designed for the African market.`} />

        <Article
          heading={`WHY ${companyName} IS SO CHEAP?`}
          text="Well, all designs have been designed for clients based on their specific requirements - this means that any drawing sold here has already paid itself back by the time you get to download it. So in a way you can say we are recycling the designs. And yes, it is legal. All copyrights belong to the architects who designed the buildings, otherwise we would not be selling the drawings. For custom designs we negotiate with our clients and only publish designs that we have full rights to." />

        <Article
          heading="READY MADE HOUSE PLANS"
          text={`We have a large selection of ready made house plans that you can purchase and download directly to your computer. Each house plan comes with its own unique set of drawings therefore we clearly list all the available drawings so that you are well informed of the contents before you purchase any drawing set. If you have any doubts or questions in regards to what is included in the drawing set you wish to purchase please contact ${companyName}.`} />

        <Article
          heading="CUSTOM DESIGNED HOUSE PLANS"
          text="We also offer the service of making custom designed house plans based on your exact needs and requirements. Please note, however, that this option is more expensive as all drawings will be made from scratch specifically for you. You will receive regular updates of plans and elevations to give you an exact picture of how the plans will function and how the building will look like. Note that copyright terms also apply to custom designed plans." />

        <Article
          heading="ANY OTHER QUESTIONS?"
          text={`If you have any other questions please check out our FAQs here or feel free to contact us through ${companyEmail} or on Whatsapp ${companyWhatsapp}`} />

      </div>

      <p>When you reach out to us through any channel all your inquiries will be attended to by our dedicated customer support team available from Monday to Friday 9.00am - 4.00pm GMT +3. Sometimes we work overtime because we love our clients So do not hesitate to reach out as our team will always respond when online.</p>

    </section>
  )
}
