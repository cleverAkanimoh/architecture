import { NavLink } from "react-router-dom"
import activeStyle from "../../ts/activeStyle"
import { NavLinkProps } from "../../ts/customTypes"

export default function LiNavLinkComp({ path, children, ...rest }: NavLinkProps) {
  return <li {...rest}><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to={path}>{children}</NavLink></li>
}