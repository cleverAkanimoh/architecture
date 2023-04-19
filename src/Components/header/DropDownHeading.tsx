import { DropDownheadingProps } from "../../ts/customTypes"

const DropDownHeading = ({ text }: DropDownheadingProps) => (
    <div className='underline-div'>
        <h3>{text}</h3>
        <div className='underline'></div>
    </div>
)

export default DropDownHeading