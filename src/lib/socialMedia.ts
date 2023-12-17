type SocialMediaLink = {
	for: 'instagram' | 'facebook' | 'twitter' | 'email' | 'youtube' | 'linkedin';
	to: string;
	label?: string;
};

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
	{
		for: 'instagram',
		to: 'https://www.instagram.com/richmondmodelun/',
		label: '@richmondmodelun',
	},
	{
		for: 'facebook',
		to: 'https://www.facebook.com/RichmondModelUN/',
		label: 'RichmondModelUN',
	},
	{
		for: 'youtube',
		to: 'https://www.youtube.com/@richmondmodelun331',
		label: 'videos',
	},
	{
		for: 'linkedin',
		to: 'https://www.linkedin.com/company/4792808',
		label: 'linkedin',
	},
	{
		for: 'email',
		to: 'mailto:secretariat@richmun.ca?subject=Question from webiste',
		label: 'email us',
	},
];
