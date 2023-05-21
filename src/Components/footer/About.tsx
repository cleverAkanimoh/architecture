import H3 from './H3'
import { HomePlansLink } from '../home/HomePlansComp'

const About = () => (
    <div className="max-w-[350px]">
        <H3 text="about company" />
        <ul>
            <HomePlansLink path="about" text="about us" border />
            <HomePlansLink path="contact" text="contact us" border />
            <HomePlansLink path="blog" text="blog" />
        </ul>
    </div>
)

export default About