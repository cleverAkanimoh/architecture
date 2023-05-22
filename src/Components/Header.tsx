import { useSelector } from "react-redux";
import useScrollFixedNav from "../hooks/useScrollFixedNav";
import NavLinkComp from "./header/NavLinkComp";
import NavSection from "./header/NavSection";
import TopSection from "./header/TopSection";

export default function Header() {
  const { isMenuPressed } = useSelector((state: any) => state.menu);

  const navFixedState = useScrollFixedNav(50);

  return (
    <header className={`${navFixedState ? "fixed" : ""} header-style`}>
      <TopSection />

      <nav className="nav-style">
        <div className="nav-substyle">
          <NavSection />

          <div
            className={`${
              isMenuPressed ? "h-full" : "h-0"
            } w-full md:max-w-[500px] flex justify-center transition-custom md:h-full`}
          >
            <div
              className={`${
                isMenuPressed
                  ? "translate-y-[0%]"
                  : "translate-y-[-100%] md:translate-y-[0%]"
              } nav-link-comp-container`}
            >
              <NavLinkComp />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
