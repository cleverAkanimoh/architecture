import { ButtonType } from "../ts/customTypes"

const CustomButton = ({ text, ...rest }: ButtonType) => <button {...rest} type="submit">
    <span>{text}</span>
    <span className='bg-white bg-opacity-0 text-[.92rem] w-full h-full absolute top-[100%] left-0 group-hover:top-0 group-hover:bg-opacity-20 transition-all duration-500 motion-reduce:transition-none'></span>
</button>

export default CustomButton