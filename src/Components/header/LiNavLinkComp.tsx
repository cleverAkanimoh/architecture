import { NavLink } from "react-router-dom";
import activeStyle from "../../ts/activeStyle";
import { NavLinkProps } from "../../ts/customTypes";

const LiNavLinkComp = ({ path, children, ...rest }: NavLinkProps) => (
  <li className="md:py-2 md:text-[1.05rem]" {...rest}>
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      to={path}
    >
      {children}
    </NavLink>
  </li>
);

export default LiNavLinkComp;
