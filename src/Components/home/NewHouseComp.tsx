import { Link } from "react-router-dom";
import { NewHouseCompProps } from "../../ts/customTypes";

const NewHouseComp = ({ path, src, title, price, desc1, desc2, desc3, desc4, desc5, desc6, ...rest }: NewHouseCompProps) => (
    <div
        {...rest}
        className="property-card"
    >
        <Link className='hover:text-white text-[0.5rem]' to={`products/${path}`}>
            <div className="comp-title-style">
                <p>{title}</p>
            </div>

            <img
                src={src}
                alt={title}
                className="comp-img-style"
            />

            <div className="comp-price-style">
                <p>{price}</p>
            </div>

            <div className="comp-desc-style">
                <p className="">{desc1}</p>
                <p className="">{desc2}</p>
                <p className="border-r-transparent">{desc3}</p>
                <p className="border-b-transparent">{desc4}</p>
                <p className="border-b-transparent">{desc5}</p>
                <p className="border-b-transparent border-r-transparent">{desc6}</p>
            </div>
        </Link>
    </div>
);

export default NewHouseComp;