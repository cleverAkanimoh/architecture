import { VscPassFilled } from "react-icons/vsc";
import { HomeListProps } from "../../ts/customTypes";

const HomeList = ({ text, underline }: HomeListProps) => (
  <p
    className={`${
      underline ? "border-b border-gray-dim" : ""
    } flex items-center text-lg`}
  >
    <VscPassFilled className="mr-1 text-yellow-500" />
    {text}
  </p>
);

export default HomeList;
