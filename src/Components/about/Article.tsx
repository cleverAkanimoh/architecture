import { WelcomeCompProps } from "../../ts/customTypes"


const Article = (props: WelcomeCompProps) => <article className="w-full  my-3 border-b border-gray-dark">
    <h1 className="w-full my-2 text-white uppercase">{props.heading}</h1>
    <p>{props.text}</p>
</article>

export default Article