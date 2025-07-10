import { SocialLinkUrl } from "../enums/SocialLinkURL";

type SocialLink = {
    href: SocialLinkUrl,
    Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

export default SocialLink;