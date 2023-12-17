import { KnownSchoolsType } from '../schoolsMeta';

export type ConferenceConfig = {
	iteration: number;
	dateLabel: string;
	secretaryGeneral: Persona;
	secretariat: Persona[];
	flexStaff?: Persona[];
	committees: Committee[];
	registrationLabel: string;
	registration?: RegistrationPeriod | undefined;
	mainContact: string;
	schedule: Record<`Day${1 | 2}`, ScheduleEvent[]>;
};

export type Persona = {
	firstName: string;
	lastName: string;
	portraitKey?: string;
	biography?: string;
	contactEmail?: string;
	linkedinUsr?: string;
} & (
	| {
			role: 'secretariat';
			position:
				| 'Secretary General'
				| 'Director General'
				| 'USG Conference'
				| 'USG Committees'
				| 'USG Marketing'
				| 'USG Delegate Affairs'
				| 'USG I.T.';

			school?: KnownSchoolsType;
			grade?: 8 | 9 | 10 | 11 | 12;

			// secretariat get special content
			personalizedNoteKey?: string;
			funFacts?: {
				label: string;
				answer: string;
			}[];
	  }
	| {
			role: 'staff';
			position:
				| 'Chair'
				| 'Director'
				| 'Co-Director'
				| 'Assistant Director'
				| 'Flex Staff';
			committee?: string;
			school?: KnownSchoolsType;
			grade?: 8 | 9 | 10 | 11 | 12;
	  }
	| {
			role:
				| 'board of directors'
				| 'mentor'
				| 'advisor'
				| 'speaker'
				| 'sponsor representative'
				| 'guest';
			position?: string;
			discipline?: string;
			grade?: 'first year' | 'second year' | 'third year' | 'fourth year';
	  }
);

export type ScheduledDate = {
	startDate: Date;
	endDate: Date;
	tentative: boolean;
	tentativeDateLabel?: string;
};
export type RegistrationPeriod = {
	earlyRegistration?: ScheduledDate;
	regularRegistration: ScheduledDate;
	lateRegistration?: ScheduledDate;
};

export type Committee = {
	shortName: string;
	fullName: string;
	staff: Persona[];
	description: string[];
	contactEmail: string;
	mentors?: Persona[];

	topicA?: string;
	topicB?: string;
	backgrounderLink?: string;
	countryMatrixLink?: string;
};

type HourUnit =
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12';
type MinFirstUnit = '0' | '1' | '2' | '3' | '4' | '5' | '6';
type MinSecondUnit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type TimeFormat = `${HourUnit}:${MinFirstUnit}${MinSecondUnit} ${'am' | 'pm'}`;

export type ScheduleEvent = {
	title: string;
	type: 'event' | 'break' | 'session' | 'wave' | 'lunch';
	description?: string;
	time: TimeFormat;
};
