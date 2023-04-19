import { BoxContainerProps } from "../../ts/customTypes";

export default function BoxContainer({ src, title, desc }: BoxContainerProps) {
    return (
        <div className="border-b-4 border-b-black">
            <div className="flex md:flex-col items-center justify-center bg-black py-2">
                <img src={src} alt="" className="w-12 mr-2" />
                <h2>{title}</h2>
            </div>
            <div className="py-8 px-1 bg-gray-semi">
                <p>{desc}</p>
            </div>
        </div>
    )
}
