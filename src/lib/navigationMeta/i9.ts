import { CONFERENCE_METADATA } from '../conferenceMeta';
import { NavConfig } from './types';

export const I9_NAV_CONFIG: NavConfig = {
	root: '/c9',
	home: {
		label: 'Homepage',
		route: '/',
	},
	main: [
		{
			label: 'the Team',
			route: '/team',
		},
		{
			label: 'Conference',
			route: '/conference',
		},
		{
			label: 'Committees',
			route: '/committees',
			childPages: CONFERENCE_METADATA.committees.map((committee) => {
				return {
					label: committee.fullName,
					route: `/c${
						CONFERENCE_METADATA.iteration
					}/${committee.shortName.toLowerCase()}`,
					priority: 2,
				};
			}),
		},
	],
	secondary: [
		{
			label: 'Apply',
			route: '/apply',
			isCta: true
		},
	],
};
