import { Link } from "react-router-dom";
import { NewHouseCompProps } from "../../ts/customTypes";

const NewHouseComp = ({ path, src, title, price, desc1, desc2, desc3, desc4, desc5, desc6, ...rest }: NewHouseCompProps) => (
    <div
        {...rest}
        className="res-caurosel h-[32vw] relative items-center justify-center overflow-hidden"
    >
        <Link to={`products/${path}`}>
            <div>
                <p>{title}</p>
            </div>
            <img
                src={src}
                alt={title}
                className="w-full h-full hover:opacity-75 hover:animate-pulse transition-transform duration-500 motion-reduce:transition-none"
            />

            <div className="absolute rounded-l-full bottom-0 right-0 py-1 px-3 bg-gray-900 text-white font-sans">
                <p>{price}</p>
            </div>

            <div>
                <p>{desc1}</p>
                <p>{desc2}</p>
                <p>{desc3}</p>
                <p>{desc4}</p>
                <p>{desc5}</p>
                <p>{desc6}</p>
            </div>
        </Link>
    </div>
);

export default NewHouseComp;