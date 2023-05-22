import React from "react";
import { Form } from "react-router-dom";
import { companyNumber } from "../../ts/companyInfo";
import CustomButton from "../CustomButton";

const ContactForm = () => {
    const [userInfo, setUserInfo] = React.useState({
        fname: "",
        last: "",
        email: "",
        phone: "",
        message: ``,
        inquiry: false,
        modification: true,
        custom: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        
        setUserInfo({
            ...userInfo,
            [name]: checked,
        })
    };

    return (
        <Form className="custom-form">
            <div>
                <label htmlFor="fname">First Name</label>
                <input
                    required
                    onChange={handleChange}
                    placeholder="Clever"
                    type="text"
                    name="fname"
                    id="fname"
                    value={userInfo.fname}
                />
            </div>

            <div>
                <label htmlFor="last">Last Name</label>
                <input
                    required
                    onChange={handleChange}
                    placeholder="Doe"
                    type="text"
                    name="last"
                    id="last"
                    value={userInfo.last}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    required
                    onChange={handleChange}
                    placeholder="cleverdoe@mailer.com"
                    type="email"
                    name="email"
                    id="email"
                    value={userInfo.email}
                />
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input
                    required
                    onChange={handleChange}
                    placeholder={`+${companyNumber}`}
                    type="text"
                    name="phone"
                    id="phone"
                    value={userInfo.phone}
                />
            </div>

            <div>
                <legend>
                    Choose one below so we can direct your inquiry to the right team.
                </legend>
                <aside>
                    <input
                        type="checkbox"
                        name="inquiry"
                        id="inquiry"
                        checked={userInfo.inquiry}
                        onChange={handleCheckChange}
                    />
                    <label htmlFor="inquiry"> General Inquiry</label>
                </aside>

                <aside>
                    <input
                        type="checkbox"
                        name="modification"
                        id="modification"
                        checked={userInfo.modification}
                        onChange={handleCheckChange}
                    />
                    <label htmlFor="modification"> Modification to Design</label>
                </aside>

                <aside>
                    <input
                        type="radio"
                        name="custom"
                        id="custom"
                        checked={userInfo.custom}
                        onChange={handleCheckChange}
                    />
                    <label htmlFor="custom"> Custom Design</label>
                </aside>
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message..."
                    value={userInfo.message}
                    required
                    onChange={handleChange}
                />
            </div>

            <CustomButton
                text="send message"
                className="uppercase bg-blue-500 text-white w-60 h-10 mt-3 mb-5 overflow-hidden relative group"
            />
        </Form>
    );
};

export default ContactForm;
