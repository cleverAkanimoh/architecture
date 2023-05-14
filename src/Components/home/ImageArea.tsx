import { Link } from "react-router-dom";
import { ImageAreaProps } from "../../ts/customTypes";

const ImageArea = ({ to, src, title, ...rest }: ImageAreaProps) => (
  <div
    {...rest}
    className="res-caurosel h-[32vw] relative items-center justify-center overflow-hidden transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
  >
    <Link to={`collections/${to}`}>
      <img
        src={src}
        alt={title}
        className="w-full h-full hover:scale-[1.1] transition-all duration-200"
      />

      <div className="absolute rounded-l-full bottom-0 right-0 py-1 px-3 bg-gray-900 text-white font-sans">
        <p>{title}</p>
      </div>
    </Link>
  </div>
);

export default ImageArea;
