import { NavLink } from "react-router-dom";
import activeStyle from "../../ts/activeStyle";
import { NavLinkProps } from "../../ts/customTypes";

const LiNavLinkComp = ({ path, text, ...rest }: NavLinkProps) => (
  <li className="md:py-2 md:text-[1.05rem]" {...rest}>
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      to={path}
    >
      {text}
    </NavLink>
  </li>
);

export default LiNavLinkComp;
