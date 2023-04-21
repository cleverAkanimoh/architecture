import { WelcomeCompProps } from '../../ts/customTypes'

const WelcomeComp = ({ heading, text, ...rest }: WelcomeCompProps) => (
    <div {...rest}>
        <h1>{heading}</h1>
        <p>{text}</p>
    </div>
)

export default WelcomeComp;