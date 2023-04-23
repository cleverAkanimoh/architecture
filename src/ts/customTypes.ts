export type NavLinkProps = {
  path: string;
  children: string;
} & React.ComponentProps<"li">;

export type DropDownheadingProps = {
  text: string;
};

export type HomeListProps = {
  text: string;
  underline: boolean;
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

export type PlansCompProps = {
  heading: string;
  text: string;
  path: string;
};
