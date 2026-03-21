import {
  InstagramLogo,
  YoutubeLogo,
  Article,
  GithubLogo,
  UserCircle,
} from "@phosphor-icons/react";
import { ElementType } from "react";

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  Icon?: ElementType;
}

export const DUMMY_LINKS: LinkItem[] = [
  {
    id: "link-1",
    title: "Instagram",
    url: "https://instagram.com",
    Icon: InstagramLogo,
  },
  {
    id: "link-2",
    title: "YouTube",
    url: "https://youtube.com",
    Icon: YoutubeLogo,
  },
  {
    id: "link-3",
    title: "Blog",
    url: "https://blog.example.com",
    Icon: Article,
  },
  {
    id: "link-4",
    title: "GitHub",
    url: "https://github.com",
    Icon: GithubLogo,
  },
  {
    id: "link-5",
    title: "Portfolio",
    url: "https://portfolio.example.com",
    Icon: UserCircle,
  },
];
