import { companyName } from '../../ts/companyInfo';
import { WelcomeCompProps } from '../../ts/customTypes'

const WelcomeComp = ({ heading, text, ...rest }: WelcomeCompProps) => (
    <div {...rest}>
        <h1 className='h1'>{heading} {companyName}.com</h1>
        <p>{text}</p>
    </div>
)

export default WelcomeComp;