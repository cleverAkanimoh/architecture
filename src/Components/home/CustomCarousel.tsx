import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"
import ImageArea from "./ImageArea"

import defaultImage from "../../assets/images/defaultimage.jpg";
import defaultImage2 from "../../assets/images/defaultimage2.jpg";
import defaultImage3 from "../../assets/images/defaultimage3.jpg";
import defaultImage4 from "../../assets/images/defaultimage4.jpg";

type Props = {}

export default function CustomCarousel({}: Props) {
  return (
    <div className="w-full h-[32vw] relative hidden sm2:flex overflow-y-hiden">
        <button className="btn-caro-style left-[0] rounded-r-full">
          <VscChevronLeft />
        </button>
        <button className="btn-caro-style right-[0] rounded-l-full">
          <VscChevronRight />
        </button>

        <div>
          <div>
            <ImageArea
              to="modern_home"
              src={defaultImage}
              title="Modern home plan - ID 24606"
            />
            <ImageArea
              to="designer_house"
              src={defaultImage2}
              title="Designer house - ID 12201"
            />
            <ImageArea
              to="3-bedroom-house"
              src={defaultImage3}
              title="3 Bedroom house plan - ID 13225"
            />
            <ImageArea
              to="6-bedroom-house"
              src={defaultImage4}
              title="6 Bedroom house plan - ID 26401"
            />
          </div>
        </div>
      </div>
  )
}