import Address from "../Components/contact/Address";
import ContactForm from "../Components/contact/ContactForm";
import useWindowTitle from "../hooks/useWindowTitle";

import '../css/contact.css'

export default function Contact() {
    useWindowTitle("Contact us | Rollands.com");
    return (
        <section>
            <Address />

            <ContactForm />
        </section>
    )
}
