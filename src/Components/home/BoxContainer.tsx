import { BoxContainerProps } from "../../ts/customTypes";

const BoxContainer = ({ src, title, desc }: BoxContainerProps) => (
  <div className="flex flex-col justify-center items-center border-b-4 border-b-black">
    <div className="w-full flex md:flex-col items-center justify-center bg-black py-2">
      <img src={src} alt="" className="w-12 mr-2" />
      <h2>{title}</h2>
    </div>
    <div className="w-full h-full py-6 px-2 bg-gray-semi bg-opacity-70">
      <p>{desc}</p>
    </div>
  </div>
);

export default BoxContainer;
