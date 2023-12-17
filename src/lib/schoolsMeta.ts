export type KnownSchoolsType =
	| 'Steveston-London Secondary'
	| 'Hugh Boyde Secondary'
	| 'Semiahmoo Secondary'
	| 'R.E. Mountain Secondary'
	| 'Southpointe Academy'
	| 'Port Moody Secondary'
	| 'Rockridge Secondary'
	| 'Burnaby North Secondary'
	| 'Richmond Secondary';

export type RegionsTypes =
	| 'Richmond'
	| 'West Vancouver'
	| 'Vancouver'
	| 'Burnaby'
	| 'Port Moody'
	| 'Surrey & White Rock'
	| 'Delta';

export const RegionalSchoolsMap: Record<RegionsTypes, KnownSchoolsType[]> = {
	Richmond: [
		'Steveston-London Secondary',
		'Hugh Boyde Secondary',
		'Richmond Secondary',
	],
	'West Vancouver': ['Rockridge Secondary'],
	Vancouver: [],
	Burnaby: ['R.E. Mountain Secondary', 'Burnaby North Secondary'],
	'Port Moody': ['Port Moody Secondary'],
	'Surrey & White Rock': ['Semiahmoo Secondary'],
	Delta: ['Southpointe Academy'],
};
