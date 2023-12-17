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
};
export const CONFERENCE_METADATA = ITERATION_NINE;
