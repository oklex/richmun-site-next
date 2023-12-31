import type { IconKey } from '@src/ui-library/Icon';

export type PageType = {
	icon?: IconKey;
	label: string;
	subtitle?: string;
	route: string;
};
export interface NavItemType extends PageType {
	pages?: PageType[];
}
export type NavConfig = {
	home: Omit<PageType, 'icon'>;
	main: NavItemType[];
	cta: NavItemType;
};
