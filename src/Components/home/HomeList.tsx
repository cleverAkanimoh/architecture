import { VscPassFilled } from "react-icons/vsc";
import { HomeListProps } from "../../ts/customTypes";

const HomeList = ({ text, underline }: HomeListProps) => (
  <p
    className={`${
      underline ? "border-b border-gray-dim" : ""
    } flex items-center text-lg py-3 md:py-2`}
  >
    <VscPassFilled className="mr-1 text-yellow-300" />
    {text}
  </p>
);

export default HomeList;
