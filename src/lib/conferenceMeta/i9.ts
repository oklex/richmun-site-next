import { Persona, RegistrationPeriod, ConferenceConfig } from './types';

const getDateLabel = ({ tentative, tentativeDateLabel, date }: any): string => {
	if (!date) return tentativeDateLabel;
	return tentative ? tentativeDateLabel : date;
};
const getRegistrationLabel = ({
	registrationPeriod,
}: any | RegistrationPeriod): string => {
	return 'Registration Coming Soon';
};

export const ITERATION_NINE: ConferenceConfig = {
	iteration: 9,
	dateLabel: getDateLabel({
		tentative: false,
		tentativeDateLabel: 'Early June',
		date: 'June 8 - 9',
	}),
	secretaryGeneral: {
		firstName: 'Kellie',
		lastName: 'Ho',
		role: 'secretariat',
		position: 'Secretary General',
		contactEmail: 'kellie@richmun.ca',
		linkedinUsr: 'kellieho',

		portraitKey: 'Kellie',
		biography: ``,

		school: 'Hugh Boyde Secondary',
		grade: 12,
	},
	secretariat: [
		{
			firstName: 'Amber',
			lastName: 'Yang',
			role: 'secretariat',
			position: 'Director General',
			contactEmail: 'amber@richmun.ca',

			portraitKey: 'Amber',
			biography: `Amber is a sophomore at Semiahmoo Secondary School who loves listening and playing classical and anime music, trying to dance while failing, and baking various sweet and devious treats. Starting her MUN career by being thrown into a conference, Amber is sure that RichMUN VIII will be filled with excitement and memories that will make all delegates fall in love with MUN even more. Go find Amber, online or in-person, to chat about absolutely anything: she's always there!`,

			school: 'Semiahmoo Secondary',
			grade: 11,
		},
	] as Persona[],

	committees: [],
	flexStaff: [],
	registrationLabel: getRegistrationLabel({}),
	mainContact: 'secretariat@richmun.ca',
	schedule: {
		Day1: [
			{
				title: 'Check-in & Registration',
				type: 'wave',
				time: '8:40 am',
				description:
					'delegates can pick up their nametags and sign-in during this time',
			},
			{ title: 'Opening Ceremony', type: 'event', time: '9:30 am' },
			{
				title: 'make your way to committee rooms',
				type: 'break',
				time: '10:00 am',
			},
			{
				title: 'Committee Session 1',
				type: 'session',
				time: '10:15 am',
				description: 'discussion on Topic A begins',
			},
			{
				title: 'Lunch Break',
				type: 'lunch',
				time: '12:00 pm',
				description: 'delegates will get a 1 hour 10 minute lunch break',
			},
			{ title: 'Committee Session 2', type: 'session', time: '1:10 pm' },
			{ title: '15 min break', type: 'break', time: '2:45 pm' },
			{ title: 'Committee Session 3', type: 'session', time: '3:00 pm' },
			{ title: 'End of Day', type: 'wave', time: '4:30 pm' },
		],
		Day2: [
			{
				title: 'Committee Session 4',
				type: 'session',
				time: '9:30 am',
				description:
					'discussion on Topic A wraps up if needed and Crisis begins',
			},
			{ title: '15 min break', type: 'break', time: '10:45 am' },
			{ title: 'Committee Session 5', type: 'session', time: '11:00 pm' },
			{
				title: 'Lunch Break',
				type: 'lunch',
				time: '12:00 pm',
				description: 'delegates will get a 1 hour 10 minute lunch break',
			},
			{ title: 'Committee Session 6', type: 'session', time: '1:10 pm' },
			{ title: '15 min break', type: 'break', time: '2:45 pm' },
			{ title: 'Committee Session 7', type: 'session', time: '3:00 pm' },
			{
				title: 'make your way to the ceremony room',
				type: 'break',
				time: '4:30 pm',
			},
			{
				title: 'Closing Ceremony',
				type: 'event',
				time: '4:45 pm',
				description: 'award winners will be announced!',
			},
			{ title: 'End of Day', type: 'wave', time: '5:30 pm' },
		],
	},
};
export const CONFERENCE_METADATA = ITERATION_NINE;
