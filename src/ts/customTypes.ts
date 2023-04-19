export type NavLinkProps = {
    path: string
    children: string
} & React.ComponentProps<"li">

export type DropDownheadingProps = {
    text: string
}

export type BoxContainerProps = {
    src: string
    title: string
    desc: string
}

export type ImageAreaProps = {
    src: string
    title: string
} 

export type WelcomeCompProps = {
    heading: string
    text: string
} & React.ComponentProps<"div">