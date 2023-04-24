import H3 from "./footer/H3";
import { HomePlansLink } from "./home/HomePlansComp";

export default function Footer() {
  return (
    <footer className="min-h-screen flex flex-col items-start sm2:items-center justify-center">
      <div className="uppercase">
        <h1 className="h1">logo here</h1>
      </div>
      <div className="capitalize">
        <H3 text='about company' />
        <ul>
          <HomePlansLink path="about" text="about us" border />
          <HomePlansLink path="contact" text="contact us" border  />
          <HomePlansLink path="blog" text="blog" />
        </ul>
      </div>
    </footer>
  );
}
