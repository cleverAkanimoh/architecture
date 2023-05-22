import { Form } from 'react-router-dom'

import H3 from './H3'
import CustomButton from '../CustomButton'

const Subscribe = () => (
    <div className="lowercase">
        <H3 text="subscribe to our newsletter!" />
        <Form action="subscribe" className="my-4 flex md:flex-row flex-col md:bg-white ">
            <input
                type="email"
                className="w-full rounded-none px-2 h-9 font-sofia outline-none text-gray-dark md:bg-transparent"
                placeholder="Email"
                required
            />

            <CustomButton text='subscribe' className="lowercase bg-blue-500 text-white w-full md:rounded-l-full mt-3 md:mt-0 md:w-1/2 md:text-[.75rem] h-10 xl:text-sm overflow-hidden relative group" />
        </Form>
    </div>
)

export default Subscribe