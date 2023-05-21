import { VscHome } from "react-icons/vsc"

const Logo = () => (
    <div className="flex flex-col items-center w-full sm2:col-span-3 max-w-[350px] min-h-[130px] text-blue-400 font-extrabold mb-2 sm2:mb-4 self-center lg:self-start border sm:border-none transition-all duration-300">

        <div className="flex items-center border sm2:border-none w-full transition-all duration-300">
            <VscHome className="w-[100px] h-20 sm2:h-24 border md:border-none transition-all duration-300" />
            <h1 className="flex flex-col">
                <span className="text-3xl sm2:text-5xl">Rollands</span>
                <span className="self-end lowercase mt-[-0.7rem] text-xl sm2:text-2xl">.com</span>
            </h1>
        </div>
        <p className="text-center text-gray-light uppercase font-normal">Professional House plans</p>
    </div>
)

export default Logo