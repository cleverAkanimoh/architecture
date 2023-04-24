import { Form } from "react-router-dom";
import H3 from "./footer/H3";
import { HomePlansLink } from "./home/HomePlansComp";

export default function Footer() {
  return (
    <footer className="mt-14 w-full capitalize flex items-start sm2:items-center justify-center border-t-2 border-gray-dim">
      <section className="p-3 mb-14 w-full max-w-[1200px]">
        <div className="uppercase flex items-center bg-blue-500 w-2/3 max-w-[350px] h-[120px]">
          <h1 className="h1 text-white animate-pulse">logo here</h1>
        </div>

        <div className="my-3">
          <H3 text="about company" />
          <ul>
            <HomePlansLink path="about" text="about us" border />
            <HomePlansLink path="contact" text="contact us" border />
            <HomePlansLink path="blog" text="blog" />
          </ul>
        </div>

        <div>
          <H3 text="support" />
          <ul>
            <HomePlansLink
              path="faqs"
              text="Frequently Asked Questions"
              border
            />
            <HomePlansLink
              path="conditions"
              text="Terms and Conditions"
              border
            />
            <HomePlansLink path="privacy" text="Privacy Policy" border />
            <HomePlansLink path="terms" text="Terms of Service" border />
            <HomePlansLink path="refund_policy" text="Refund policy" />
          </ul>
        </div>

        <div className="lowercase my-3">
          <H3 text="subscribe to our newsletter!" />
          <Form className="my-4 flex hover:border-l-4 border-orange-500 p-4 md:flex-row flex-col">
            <input
              type="email"
              className="w-full rounded-none px-2 h-9 outline-none"
              placeholder="Email"
            />
            <button className="capitalize bg-blue-500 hover:bg-opacity-80 text-white w-full rounded-none mt-3 md:mt-0 h-9">
              join now
            </button>
          </Form>
        </div>
      </section>
    </footer>
  );
}
