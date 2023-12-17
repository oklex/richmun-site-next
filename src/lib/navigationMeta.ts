import { CONFERENCE_METADATA } from './conferenceMeta';

type NavItemType = {
	label: string;
	route: string;
	cta?: true;
	pages?: {
		label: string;
		route: string;
		priority?: 1 | 2 | 3;
	}[];
};
type NavConfig = {
	logoLink: NavItemType;
	main: NavItemType[];
	secondary: NavItemType[];
};
export const NAV_CONFIG: NavConfig = {
	logoLink: {
		label: 'Homepage',
		route: '/',
	},
	main: [
		{
			label: 'the Team',
			route: '/team',
			pages: [],
		},
		{
			label: 'Conference',
			route: '/conference',
			pages: [],
		},
		{
			label: 'Committees',
			route: '/committees',
			pages: CONFERENCE_METADATA.committees.map((committee) => {
				return {
					label: committee.fullName,
					route: `/c${
						CONFERENCE_METADATA.iteration
					}/${committee.shortName.toLowerCase()}`,
					priority: 2,
				};
			}),
		},
		{
			label: 'Resources',
			route: '/resources',
			pages: [
				{
					label: 'Position Paper Guide',
					route: '/resources/position-paper-guide',
				},
				{
					label: 'Rules of Procedure Guide',
					route: '/resources/rules-of-procedure',
				},
			],
		},
	],
	secondary: [
		{
			label: 'Contact',
			route: '/contact',
		},
		// {
		//   label: 'Register',
		//   route: '/register',
		//   cta: true
		// },
		{
			label: 'Apply',
			route: '/apply',
			cta: true,
		},
	],
};
