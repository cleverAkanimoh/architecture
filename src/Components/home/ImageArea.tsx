import { Link } from "react-router-dom";
import { ImageAreaProps } from "../../ts/customTypes";

const BoxContainer = ({ to, src, title, ...rest }: ImageAreaProps) => (
  <div {...rest} className="w-full overflow-hidden">
    <Link to={to}>
      <div className="w-full h-[30vw] relative items-center justify-center">
        <img
          src={src}
          alt={title}
          className="w-full h-full hover:scale-[1.1] transition-all duration-200"
        />

        <div className="absolute rounded-l-full bottom-0 right-0 py-1 px-3 bg-gray-900 text-white font-sans">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default BoxContainer;
