import Logo from "./footer/Logo";
import FooterInfo from "./footer/FooterInfo";

import { companyName } from "../ts/companyInfo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 pb-5 w-full capitalize flex flex-col items-center justify-center border-t-2 border-gray-dim">
      <section className="p-3 my-14 m-w-[300px] w-[99%] max-w-[1300px] flex flex-col xl:flex-row">

        <Logo />

        <FooterInfo />

      </section>

      <p className="lowercase text-center underline text-sm sm:text-base hover:text-white">
        Copyright © {year} {companyName}.com
      </p>
    </footer>
  );
}
