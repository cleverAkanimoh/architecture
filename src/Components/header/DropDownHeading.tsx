import { DropDownheadingProps } from "../../ts/customTypes"

const DropDownHeading = ({ text }: DropDownheadingProps) => (
    <div className='line-div'>
        <h3>{text}</h3>
        <div className='line'></div>
    </div>
)

export default DropDownHeading