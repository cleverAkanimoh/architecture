import H3 from './H3'
import { HomePlansLink } from '../home/HomePlansComp'

type Props = {}

const Support = (props: Props) => (
    <div className="max-w-[350px] w-full">
        <H3 text="support" />
        <ul>
            <HomePlansLink
                path="faqs"
                text="Frequently Asked Questions"
                border
            />
            <HomePlansLink
                path="conditions"
                text="Terms and Conditions"
                border
            />
            <HomePlansLink path="privacy" text="Privacy Policy" border />
            <HomePlansLink path="terms" text="Terms of Service" border />
            <HomePlansLink path="refund_policy" text="Refund policy" />
        </ul>
    </div>
)

export default Support