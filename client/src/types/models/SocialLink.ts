import { FC } from 'react';

export interface SocialLink {
	id: number;
	Icon: FC<React.SVGProps<SVGSVGElement>>;
	path: string;
}