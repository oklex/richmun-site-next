type route = `/${string}`

export type PageType = {
	label: string;
	route: route;
	isCta?: boolean
};
export interface NavItemType extends PageType {
	childPages?: PageType[];
}

export type NavConfig = {
	root: route // i.e. /c9/
	home: Omit<PageType, 'icon'>;
	main: NavItemType[];
	secondary: NavItemType[];
};
