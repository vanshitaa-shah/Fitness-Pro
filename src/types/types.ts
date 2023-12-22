import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface FitnessClassProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  tagline: string;
  color: string;
  selected: boolean;
}

export interface StepProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  step: string;
  title: string;
  desc: string;
  color: string;
}

export interface PlatformProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  tag?: string;
  color: string;
  hasAction: boolean;
}

export interface SectionImgProps {
  src: string;
  alt: string;
}

export interface SectionContentProps {
  title?: string;
  heading: string;
  tagline: string;
  btnPrimary?: string;
  btnDefault?: string;
  list?: string[];
  input?: ReactNode;
  hr?: boolean;
}

export interface SectionHeadingProps {
  TitleLogo?: string;
  title?: string;
  heading: string;
  tagline?: string;
}

export interface ServiceProps {
  number: string;
  title: string;
  tagline: string;
  color: string;
}

export interface TrainerProps {
  img: string;
  name: string;
  role: string;
}

export interface TrainerType {
  img: string;
  name: string;
  role: string;
}

export interface FeatureProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  tagline: string;
}

export type ThemeType = "light" | "dark";
