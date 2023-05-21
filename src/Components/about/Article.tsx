import { WelcomeCompProps } from "../../ts/customTypes"


const Article = (props: WelcomeCompProps) => <article>
    <h1 className="w-full">{props.heading}</h1>
    <p>
        {props.text}
    </p>
</article>

export default Article