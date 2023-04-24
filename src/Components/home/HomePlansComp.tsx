import { Link } from "react-router-dom";
import { HomePlansProps, PlansCompProps } from "../../ts/customTypes";

export const HomePlansLink = ({ text, path, border }: PlansCompProps) => (
  <li className={`${border ? "border-b border-gray-dim" : ""} py-2`}>
    <Link
      to={path}
    >
      {text}
    </Link>
  </li>
);

const HomePlansComp = ({
  text01,
  text02,
  text03,
  text04,
  text05,
  text06,
  text07,
  path01,
  path02,
  path03,
  path04,
  path05,
  path06,
  path07,
}: HomePlansProps) => (
  <ul className="home-plans-style">
    <HomePlansLink path={path01} text={text01} border={true} />
    <HomePlansLink path={path02} text={text02} border={true} />
    <HomePlansLink path={path03} text={text03} border={true} />
    <HomePlansLink path={path04} text={text04} border={true} />
    <HomePlansLink path={path05} text={text05} border={true} />
    <HomePlansLink path={path06} text={text06} border={true} />
    <HomePlansLink path={path07} text={text07} border={false} />
  </ul>
);

export default HomePlansComp;
