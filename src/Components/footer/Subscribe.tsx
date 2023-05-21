import { Form } from 'react-router-dom'

import H3 from './H3'

const Subscribe = () => (
    <div className="lowercase">
        <H3 text="subscribe to our newsletter!" />
        <Form action="#" className="my-4 flex md:flex-row flex-col">
            <input
                type="email"
                className="w-full rounded-none px-2 h-9 font-sofia outline-none text-gray-dark"
                placeholder="Email"
            />
            <button className="capitalize bg-blue-500 hover:bg-opacity-70 text-white w-full rounded mt-3 md:mt-0 h-9 xl:text-sm">
                join now
            </button>
        </Form>
    </div>
)

export default Subscribe