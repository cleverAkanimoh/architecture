import { BsChevronUp, BsHouseExclamationFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { togglePlans } from "../../features/menu/menuSlice";
import activeStyle from "../../ts/activeStyle";
import NavDropDown from "./NavDropDown";

export default function NavLinkComp() {
  const { isPlansPressed } = useSelector((state: any) => state.menu);
  const dispatch = useDispatch();
  const togglePlansFn = () => dispatch(togglePlans());

  return (
    <>
      <div className="nav-link-div">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={"."}
          end
          className="flex items-center"
        >
        <BsHouseExclamationFill className="inline text-base mr-1" />
          <span>home</span>
        </NavLink>
      </div>

      <div className="nav-link-div group">
        <button
          onClick={togglePlansFn}
          className="nav-link-div-btn group hover:text-blue-400"
        >
          <h3 className="capitalize pr-[.2rem]">house plans</h3>
          <span
            className={`${
              isPlansPressed ? "" : "rotate-180"
            } md:group-hover:rotate-180 transition-all duration-300`}
          >
            <BsChevronUp />
          </span>
        </button>

        <div
          className={`${isPlansPressed ? "h-full" : "h-0 md:h-full"} transition-custom`}
        >
          <div
            className={`${
              isPlansPressed
                ? "translate-y-0"
                : "translate-y-[-105%] md:translate-y-0"
            } navLink-style`}
          >
            <NavDropDown />
          </div>
        </div>
      </div>

      <div className="nav-link-div">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={"about"}
        >
          about us
        </NavLink>
      </div>
      <div className="nav-link-div">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={"contact"}
        >
          contact us
        </NavLink>
      </div>
      <div className="nav-link-div">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={"blog"}
        >
          blog
        </NavLink>
      </div>
    </>
  );
}
