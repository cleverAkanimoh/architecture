import { VscHome } from "react-icons/vsc"

const Logo = () => (
    <div className="flex flex-col items-center w-full sm2:col-span-3 max-w-[350px] h-full min-h-[150px] text-blue-400 font-extrabold mb-2">

        <div className="flex items-center w-full">
            <VscHome className="w-full h-32" />
            <h1 className="flex flex-col">
                <span className="text-5xl">Rollands</span>
                <span className="self-end lowercase mt-[-0.7rem] text-2xl">.com</span>
            </h1>
        </div>
        <p className="text-center text-gray-light uppercase font-normal">Professional House plans</p>
    </div>
)

export default Logo