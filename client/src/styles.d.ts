/**WARNING: these definitions are required because typescript can't resolve import for non-ts/js files */
declare module "*.scss" {
	const content: { [className: string]: string };
	export default content;
}

declare module "*.css" {
	const content: { [className: string]: string };
	export default content;
}

declare module "*.svg" {
	import * as React from 'react';

	// Named export for React component
	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

	// Default export for string (e.g., for <img> src)
	const content: string;
	export default content;
} 

declare module "*.png" {
	const content: string;
	export default content;
}

declare module "*.jpg" {
	const content: string;
	export default content;
}