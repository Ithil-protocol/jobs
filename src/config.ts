import type { SocialsObject } from "./types";

export const SITE = {
  website: "https://jobs.ithil.fi",
  desc: "Job board with open positions for the Ithil protocol",
  title: "Ithil",
  ogImage: "default-bg.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialsObject = [
  {
    name: "Mail",
    href: "mailto",
    active: false,
  },
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    active: true,
  },
  {
    name: "Linkedin",
    href: "https://github.com/satnaing/astro-paper",
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    active: false,
  },
];
