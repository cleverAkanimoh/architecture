import { Link } from "react-router-dom";

type Props = {};

const HomePlansComp = (props: Props) => (
  <div className="w-full capitalize">
    <h1>Home Plan Collections</h1>
    <div className="flex flex-col w-full border-t-2 py-3">
      <Link to={""}>Small house plans</Link>
      <Link to={""}>modern house plans</Link>
      <Link to={""}>comtemporary house plans</Link>
      <Link to={""}>hostel & lodges plans</Link>
      <Link to={""}>apartment floor plans</Link>
      <Link to={""}>traditional house plans</Link>
      <Link to={""}>beach house plans</Link>
    </div>
  </div>
);
