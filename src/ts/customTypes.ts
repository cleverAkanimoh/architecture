export type NavLinkProps = {
  path: string;
  children: string;
} & React.ComponentProps<"li">;

export type DropDownheadingProps = {
  text: string;
};

export type BoxContainerProps = {
  src: string;
  title: string;
  desc: string;
};

export type ImageAreaProps = {
  to: string;
  src: string;
  title: string;
} & React.ComponentProps<"div">;

export type WelcomeCompProps = {
  heading: string;
  text: string;
} & React.ComponentProps<"div">;
