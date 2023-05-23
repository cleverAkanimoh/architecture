export type NavLinkProps = {
  path: string;
  text: string;
} & React.ComponentProps<"li">;

export type ButtonType = {
  text: string;
} & React.ComponentProps<"button">;

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

export type NewHouseCompProps = {
  path: string;
  src: string;
  title: string;
  price: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  desc6: string;
} & React.ComponentProps<"div">;

export type WelcomeCompProps = {
  heading: string;
  text: string;
} & React.ComponentProps<"div">;

export type PlansCompProps = {
  heading?: string;
  text: string;
  path: string;
  border?: boolean | undefined;
};

export type HomePlansProps = {
  text01: string;
  text02: string;
  text03: string;
  text04: string;
  text05: string;
  text06: string;
  text07: string;
  path01: string;
  path02: string;
  path03: string;
  path04: string;
  path05: string;
  path06: string;
  path07: string;
};
