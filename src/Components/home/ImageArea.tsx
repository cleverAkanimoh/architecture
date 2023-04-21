import { ImageAreaProps } from "../../ts/customTypes";

export default function BoxContainer({ src, title, ...rest }: ImageAreaProps) {
    return (
        <div {...rest} className="w-full h-[30vw] relative items-center justify-center">
          
            <img
              src={src}
              alt={"title"}
              className="w-full h-full hover:scale-[1.1] transition-all duration-200"
            />

            <div className="absolute rounded-l-full bottom-0 right-0 py-1 px-3 bg-gray-900 text-white font-sans">
              <p>{title}</p>
            </div>
          </div>
    )
}
