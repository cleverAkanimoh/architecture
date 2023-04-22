import { Link } from "react-router-dom";
import { PlansCompProps } from "../../ts/customTypes";

const PlansComp = ({ heading, text, path }: PlansCompProps) => (
  <div className="plansComp-style">
    <aside className="aside-style">
      <h1 className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem]">{heading}</h1>
      <p>{text}</p>
    </aside>

    <div className="w-fit flex self-end md:self-center">
      <Link
        to={path}
        className="bg-blue-400 hover:bg-opacity-70 text-white rounded-l-full py-2 px-10"
      >
        View All
      </Link>
    </div>
  </div>
);

export default PlansComp;
