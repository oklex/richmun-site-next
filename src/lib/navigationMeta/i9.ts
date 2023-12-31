import { CONFERENCE_METADATA } from '../conferenceMeta';
import { NavConfig } from './types';

export const I9_NAV_CONFIG: NavConfig = {
	home: {
		label: 'Homepage',
		route: '/', // change to i9 or smth
	},
	main: [
		{
			label: 'the Team',
			subtitle: 'Meet the Secretariat and Staff',
			route: '/team',
		},
		{
			label: 'Conference',
			subtitle: 'Our location, itinerary, and more ',
			route: '/conference',
		},
		{
			label: 'Committees',
			route: '/committees',
			subtitle: 'Learn about the Committee programme',
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
	],
	cta: {
		label: 'Apply',
		route: '/apply',
	},
};
