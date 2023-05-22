import React from "react";
import { BsMessenger, BsSearch, BsWhatsapp } from "react-icons/bs";
import { Form, Link } from "react-router-dom";
import { VscClose, VscHome } from "react-icons/vsc";
import { companyName, companyPhoneNumber } from "../../ts/companyInfo";

export default function TopSection() {
  const [toggleSearch, setToggleSearch] = React.useState(false);

  const toggleSearchFn = () => setToggleSearch((prevState) => !prevState);

  return (
    <div className="topsection">
      <section className="topsection-section">
        <Link to={"."} className="flex items-center">
          <VscHome className="text-[30px] sm:text-[50px] md:text-[60px] text-blue-300 mr-1" />
          <h4 className="topsection-logo">
            <span className="architecture">{companyName}</span>
            <span className="com">.com</span>
          </h4>
        </Link>

        <div className="w-[180px] sm:w-[180px] md:w-[420px] flex items-center justify-between">
          <div className="topsection-div">
            <a
              href={`http://m.me/${companyName}`}
              target="_blank"
              rel="noreferrer"
              className="social-style"
            >
              <BsMessenger />
            </a>
            <span className="flex items-center ml-2 font-sans cursor-pointer">
              <a
                href={`https://api.whatsapp.com/send?phone=${companyPhoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="social-style"
              >
                <BsWhatsapp />
              </a>

              <span className="text-white pl-1 text-sm">+{companyPhoneNumber}</span>
            </span>
          </div>

          <div className="flex items-center justify-center">
            <button className="md:hidden" onClick={toggleSearchFn}>
              {toggleSearch ? <VscClose /> : <BsSearch />}
            </button>

            <Form action="search" className={`${toggleSearch ? 'fixed right-1 top-[38px] sm:top-[58px] md:flex' : 'hidden md:flex'} h-[30px]  text-gray-dark flex z-50`}>
              <input
                type="text"
                className="rounded-l-sm outline-none px-2"
                placeholder="search plans"
                required
              />

              <button type="submit" className="px-2 rounded-none bg-gray-dark text-white">
                <BsSearch />
              </button>
            </Form>

          </div>
        </div>
      </section>
    </div>
  );
}
