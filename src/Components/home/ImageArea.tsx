import { ImageAreaProps } from "../../ts/customTypes";

export default function BoxContainer({ src, title }: ImageAreaProps) {
    return (
        <div className="border-b border-b-black">
            <div className="flex items-center justify-center bg-black py-2">
                <img src={src} alt="img" className="w-12 mr-2" />
            </div>
            <div className="py-8 px-1 bg-gray-semi">
                <p>{title}</p>
            </div>
        </div>
    )
}
