export type NavLinkProps = {
  path: string;
  children: string;
} & React.ComponentProps<"li">;

export type DropDownheadingProps = {
  text: string;
};

export type HomeListProps = {
  text: string;
  line: boolean;
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
  heading?: string
  text: string
  path: string
  border?: boolean | undefined
};

export type HomePlansProps = {
  text01: string
  text02: string
  text03: string
  text04: string
  text05: string
  text06: string
  text07: string
  path01: string
  path02: string
  path03: string
  path04: string
  path05: string
  path06: string
  path07: string
}
