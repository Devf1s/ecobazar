import { socialLinks } from '@/consts/social';
import { SocialLink } from '@/types/models/SocialLink';
import { Facebook, Twitter, Pinterest, Instagram } from '@images/components';

export const socialItems: SocialLink[] = [
	{
		id: 1,
		Icon: Facebook,
		path: socialLinks.FACEBOOK
	},
	{
		id: 2,
		Icon: Twitter,
		path: socialLinks.TWITTER
	},
	{
		id: 3,
		Icon: Pinterest,
		path: socialLinks.PINTEREST
	},
	{
		id: 4,
		Icon: Instagram,
		path: socialLinks.INSTAGRAM
	}
];