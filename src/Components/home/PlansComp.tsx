import { Link } from "react-router-dom";
import { PlansCompProps } from "../../ts/customTypes";

const PlansComp = ({heading, text, path}:PlansCompProps) => (
  <div className="w-full h-[230px] my-4 flex flex-col md:flex-row items-center text-left justify-center md:justify-between">
    <aside className="h-[140px]">
      <h1 className="text-[1.3rem]">{heading}</h1>
      <p>{text}</p>
    </aside>

    <div className="w-fit flex self-end md:self-center">
      <Link
        to={path}
        className=" bg-blue-400 text-white rounded-r-full py-2 px-10"
      >
        View All
      </Link>
    </div>
  </div>
);

export default PlansComp;
