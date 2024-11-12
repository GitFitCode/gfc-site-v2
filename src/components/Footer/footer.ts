import {
  FaYoutube,
  FaXTwitter,
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

interface NavItem {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  Icon: IconType;
  href: string;
}

export const navItems: NavItem[] = [
  {
    name: "Blog",
    href: "#blog",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Book A Call",
    href: "#book-a-call",
  },
  {
    name: "careers",
    href: "#",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Youtube",
    Icon: FaYoutube,
    href: "https://www.youtube.com/channel/UCUSEpzBu80ePCy-q9wpc9Ag",
  },
  {
    name: "TikTok",
    Icon: FaTiktok,
    href: "https://www.tiktok.com/@gitfitcode?lang=en",
  },
  {
    name: "X",
    Icon: FaXTwitter,
    href: "https://x.com/GitFitCode",
  },

  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/company/gitfitcode-llc/?viewAsMember=true",
  },
  {
    name: "Facebook",
    Icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61566150429103",
  },
  //   {
  //     name: "Instagram",
  //     Icon: FaInstagram,
  //     href: "https://www.linkedin.com/in/joelmwendwa",
  //   },
];
