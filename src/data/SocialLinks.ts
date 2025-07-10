import { ReactComponent as FiverrIcon } from '../assets/fiverr.svg';
import { ReactComponent as GitHubIcon } from '../assets/github.svg';
import { ReactComponent as IndeedIcon } from '../assets/indeed.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';
import { ReactComponent as UpworkIcon } from '../assets/upwork.svg';
import { SocialLinkUrl } from "../enums/SocialLinkURL";
import SocialLink from "../types/SocialLink";

export const SocialLinks: SocialLink[] = [
  { href: SocialLinkUrl.INDEED, Icon: IndeedIcon },
  { href: SocialLinkUrl.LINKEDIN, Icon: LinkedInIcon },
  { href: SocialLinkUrl.UPWORK, Icon: UpworkIcon },
  { href: SocialLinkUrl.FIVERR, Icon: FiverrIcon },
  { href: SocialLinkUrl.GITHUB, Icon: GitHubIcon }
];