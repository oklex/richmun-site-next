import { Persona, RegistrationPeriod, ConferenceConfig } from './types';

const getDateLabel = ({ tentative, tentativeDateLabel, date }: any): string => {
	// in the future: take in dates and props and dynamically generate
	if (!date) return tentativeDateLabel;
	return tentative ? tentativeDateLabel : date;
};
const getRegistrationLabel = ({
	registrationPeriod,
}: any | RegistrationPeriod): string => {
	// get today's date and update the prompt
	// gatsby's static site generation means that this is only dynamic at build time
	return 'Registration Coming Soon';
};

export const ITERATION_EIGHT: ConferenceConfig = {
	iteration: 8,
	dateLabel: getDateLabel({
		tentative: false,
		tentativeDateLabel: 'Early June',
		date: 'June 10 - 11',
	}),
	secretaryGeneral: {
		firstName: 'Claire',
		lastName: 'Li',
		role: 'secretariat',
		position: 'Secretary General',
		contactEmail: 'claire@richmun.ca',
		linkedinUsr: 'claire--li',

		portraitKey: 'Claire',
		biography: `Claire is a senior student at Steveston-London Secondary school who enjoys curating playlists based on niche character archetypes, spending all her money on film stock, and chasing pigeons on the streets. Being the final conference in her four beloved years of Model UN, she hopes to make long-lasting memories with everyone at RichMUN 2023. If you have any questions or just want to say hi, feel free to find Claire any time!`,

		school: 'Steveston-London Secondary',
		grade: 12,
	},
	secretariat: [
		{
			firstName: 'Kellie',
			lastName: 'Ho',
			role: 'secretariat',
			position: 'USG Delegate Affairs',
			contactEmail: 'kellie@richmun.ca',
			linkedinUsr: 'kellieho',

			portraitKey: 'Kellie',
			biography: `Kellie is a junior at Hugh Boyd Secondary who is in love with learning more about the world everyday. She can be found succumbing to a reading session of philosophy novels, listening to the next podcast of Modern Wisdom, and learning new tricks to coding! Whether it is seeking ways to peacefully resolve clashing views or giving in to the exciting debate, she values the experiences that have shaped her within the committee rooms. She hopes this iteration of RichMUN will leave lasting memories for all delegates as it has done for her!`,

			school: 'Hugh Boyd Secondary School',
			grade: 11,
		},
		{
			firstName: 'Amber',
			lastName: 'Yang',
			role: 'secretariat',
			position: 'USG Conference',
			contactEmail: 'amber@richmun.ca',

			portraitKey: 'Amber',
			biography: `Amber is a sophomore at Semiahmoo Secondary School who loves listening and playing classical and anime music, trying to dance while failing, and baking various sweet and devious treats. Starting her MUN career by being thrown into a conference, Amber is sure that RichMUN VIII will be filled with excitement and memories that will make all delegates fall in love with MUN even more. Go find Amber, online or in-person, to chat about absolutely anything: she's always there!`,

			school: 'Semiahmoo Secondary',
			grade: 10,
		},
		{
			firstName: 'William',
			lastName: 'He',
			role: 'secretariat',
			position: 'USG Committees',
			contactEmail: 'william@richmun.ca',

			portraitKey: 'William',
			biography: `William is a grade 11 student at Steveston-London Secondary School who is (secretly) a nerd, procrastinating the slides for his debate club, cooking suspicious stews, or playing OMORI at 3AM. He has worked in practically every level with RichMUN but secretly hopes he can delegate there one day. William wishes to spice up your committee, working endlessly to ensure that this iteration remains novel and practical. William's goal is that everyone leaves RichMUN having learnt something new, surrounded by new friends and having learned something new. If you have any questions about the committees at RichMUN, or would like to destroy him on chess.com, feel free to find him at any time!`,

			school: 'Steveston-London Secondary',
			grade: 11,
		},
		{
			firstName: 'Tilika',
			lastName: 'Kulkarni',
			role: 'secretariat',
			position: 'USG IT',
			contactEmail: 'tilika@richmun.ca',

			portraitKey: 'Tilika',
			biography: `Tilika is a junior at Steveston London Secondary School who likes watching a variety of TV shows, eating good (healthy) food, and pushing herself to take on challenging curricula. She attended her first MUN conference in grade 9 and appreciated the networking and various global perspectives in MUN. Having attended the previous two iterations of RichMUN as both a delegate and a staff member, Tilika can relate to the various experiences people have at RichMUN, and she hopes everyone has a unique, memorable, and rewarding experience at RichMUN 2023!`,

			school: 'Steveston-London Secondary',
			grade: 11,
		},
		{
			firstName: 'Chris',
			lastName: 'Yan',
			role: 'secretariat',
			position: 'USG Marketing',
			contactEmail: 'chris@richmun.ca',

			portraitKey: 'Chris',
			biography: `Chris is a grade 11 student at Steveston-London secondary school. He can be seen spending his time watching a wide plethora of shows on various sites and liking jeans that are new. Starting MUN in grade 10, he still considers himself a beginner and is excited to see all the new and nervous delegates.`,

			school: 'Steveston-London Secondary',
			grade: 11,
		},
	] as Persona[],

	committees: [
		{
			shortName: 'UNHRC',
			fullName: 'U.N. Human Rights Council',
			staff: [
				{
					firstName: 'Celina',
					lastName: 'Qu',
					role: 'staff',
					position: 'Director',
					biography:
						'A sophomore at Semiahmoo Secondary, Celina is elated to serve as the Director of UNHRC at RichMUN 2023. Between meeting pandas in the Senate and poisoning pineapples in the Historical Cabinet, she has grown familiar with wading through chandelier-lit ballrooms and lagging Zoom meetings alike—has grown to love the nuanced political discussion and intricate policy exploration that MUN stands for. When not writing her next directive, Celina can be found pretending to understand Akkadian, making fun of the Founding Fathers, or stealing onion rings from her brother. She looks forward to meeting all delegates in June!',
					school: 'Semiahmoo Secondary',
					grade: 10,
				},
				{
					firstName: 'Matthew',
					lastName: 'Wong',
					role: 'staff',
					position: 'Chair',
					biography:
						'Matthew is a Grade 12 student at Burnaby North Secondary School and is delighted to be serving as Flex Staff for this iteration of Richmond Model United Nations. Despite being relatively new to the world of Model United Nations, Matthew has found himself enthralled by the fast paced and contentious environment, and is excited to delve headfirst into his next committee! Some of his interests include gaming, reading, long walks throughout the evening, and long philosophical conversations that lead to nothing at all. Matthew is hopeful that your Model United Nations experience will be fruitful, and the lessons you learn will last a lifetime. With eager anticipation, Matthew looks forward to meeting you all at RICHMUN 2023.',
					school: 'Burnaby North Secondary',
					grade: 12,
				},
				{
					firstName: 'Alex',
					lastName: 'Liu',
					role: 'staff',
					position: 'Assistant Director',
					biography:
						'Alex is a grade 10 student at Steveston London and is beyond ecstatic to be the chair of UNESCO at RICHMUN. He was initially forced into MUN (by the USG Committees and Director of NATO) but fell in love with the hilarious committee moments, making humorous speeches, and winning countless honourable mentions. Above all else, he constantly fails his rizz during delegate socials. Outside MUN, he finds joy in lifting heavy circular objects, and procrastinating on anything possible. Alex looks forward to meeting all the delegates in June!',
					school: 'Steveston-London Secondary',
					grade: 10,
				},
			],
			mentors: [],
			description: [
				`The United Nations Human Rights Council (UNHRC) was established in 2006 to promote and protect human rights internationally—since its inception, the UNHRC has been based out of Geneva, Switzerland, where the committee concerns itself in all matters of pertinent rights issues, including but not limited to wartime civilian protection, gender equality, LGBTQ+ safety, non-discrimination, and fundamental freedoms such as that of expression.`,
				`Resource extraction in Africa—particularly low-risk and high-reward illicit mines—has perpetuated transnational conflicts for decades and is often accompanied by serious human rights violations. From child labour in oil drilling to illicit flora and fauna trading, Africa’s natural resource sector is both a symptom and an outcome of deeper socioeconomic troubles that UNHRC must uncover. As such, to combat the ever-increasing threat, delegates must look towards international cooperation and regulatory frameworks that address the root of the issue.`,
			],
			contactEmail: 'unhrc@richmun.ca',

			topicA: 'Resource Extraction in Africa',
			backgrounderLink:
				'https://drive.google.com/file/d/1IQwwauKgmBHrzxfDHhTFcJK0re16IqMo/view?usp=sharing',
			countryMatrixLink:
				'https://docs.google.com/spreadsheets/d/1yadEDG0JyA055cv1z27KT6bMV6v_LXcp1kNooeSUBJ0#gid=1390477948',
		},
		{
			shortName: 'SCO',
			fullName: 'Shanghai Cooperation Organisation',
			staff: [
				{
					firstName: 'Jimmy',
					lastName: 'Wang',
					role: 'staff',
					position: 'Director',
					biography:
						'A rising junior at Southpointe, Jimmy is distinctly honoured to serve as the director of SCO. Ever since attending his first conference at the start of Grade 8, Jimmy has been deeply immersed within the whirlwind of enriching experiences offered by Model United Nations - from political discourse to debate to international relationship. Outside of MUN, Jimmy can be spotted intensely following the NBA, fueling his anime addiction, and hanging out with friends (virtually). Jimmy eagerly anticipates RICHMUN and has no doubt that it will be the most remarkable iteration yet.',
					school: 'Southpointe Academy',
					grade: 11,
				},
				{
					firstName: 'Kevin',
					lastName: 'Zhou',
					role: 'staff',
					position: 'Chair',
					biography:
						'An experienced Model United Nations delegate, Kevin is a sophomore attending Port Moody Secondary School and has found a calling in the world of Model United Nations. Kevin is honoured to serve as the chair of the Shanghai Cooperation Organization for this year. After mysteriously finding himself in the committee room of the World Health Organization, Kevin has developed a brightly burning passion for Model United Nations. Outside of the rich tapestry of diplomacy, debate, and global cooperation, Kevin can be found testing his strategic skills in the game Hearts of Iron IV, suffering through assignments, or catching up on much-needed rest. Kevin looks forward to the thought-provoking discussion and riveting debates at RichMUN 2023!',
					school: 'Port Moody Secondary',
					grade: 9,
				},
				{
					firstName: 'Tyler',
					lastName: 'Sun',
					role: 'staff',
					position: 'Assistant Director',
					biography: `A sophomore enrolled in the Pre-International Baccalaureate program at R.E Mountain Secondary School, Tyler is beyond jubilant to serve as the Assistant Director of SCO for RichMUN 2023. Since his timid years of navigating through the intricate substrata of MUN in an online conference, Tyler has fostered a deep fervent passion for the rigorous activity that has augmented his worldviews and established himself as an exemplary citizen. Now, he plans to replicate an environment where delegates can render their participation in MUN⁠—to be the zenith of their adolescence. Outside of MUN, Tyler is visible in his desperate endeavours of rehoning his swimming skills, indulging in occasional walks around his community, or practicing his instrument for his school's Jazz Band. Tyler hopes RichMUN 2023 will be a hallmark of delegates' peak serotonin levels and anticipates everyone's arrival at the conference.`,
					school: 'R.E. Mountain Secondary',
					grade: 10,
				},
			],
			mentors: [],
			description: [
				`The Shanghai Cooperation Organization (SCO) is a Eurasian political, economic, international security, and defense organization. Since its inception in 2001, the SCO has focused its external policy on the principles of non-alignment, non-targeting, and openness. There are currently eight member states; several countries are engaged as observers or dialogue partners as well.`,
				`After the fall of the Soviet Union, Central Asia has been plagued with government corruption and political instability. 2023 saw large-scale domestic unrest in three of the region’s five countries - Kazakhstan, Tajikistan and Uzbekistan. Many of these events follow similar patterns: growing tensions among citizens lead to protests, which are met with a violent response, fueling further mistrust between authorities and the population. `,
			],
			contactEmail: 'sco@richmun.ca',

			topicA: 'Instability in Central Asia',
			backgrounderLink:
				'https://drive.google.com/file/d/1MbS16TQW6yLG-yQV7lgzRabmB2ux0f_g/view',
			countryMatrixLink:
				'https://docs.google.com/spreadsheets/d/1yadEDG0JyA055cv1z27KT6bMV6v_LXcp1kNooeSUBJ0#gid=605272303',
		},
		{
			shortName: 'NATO',
			fullName: 'North Atlantic Treaty Organization',
			staff: [
				{
					firstName: 'Max',
					lastName: 'Chen',
					role: 'staff',
					position: 'Director',
					biography:
						'A sophomore at Steveston London Secondary School, Max is honoured to serve as the director of the North Atlantic Treaty Organization at RICHMUN 2023. After he first entered a committee room – which also happened to be a NATO committee – he became allured by the fruitful discussions, distinctive delegates, and constantly entertaining conference weekends. When not in committee, Max can be found expanding his cologne collection, wandering around cluelessly listening to his poorly-organized playlists, or at a bubble tea store trying desperately to get an Amazing Bubble Gaga. Max is excited to meet everyone and looks forward to a memorable weekend at RICHMUN!',
					school: 'Steveston-London Secondary',
					grade: 10,
				},
				{
					firstName: 'Tiffany',
					lastName: 'Lee',
					role: 'staff',
					position: 'Chair',
					biography:
						'Currently a junior at Steveston-London Secondary School, Tiffany is thrilled to be chair of NATO at RichMUN 2023. Ever since attending her first conference in 10th grade, Tiffany has been captivated by the fruitful discussions and fiery speeches each committee has to offer. Outside of Model UN, you can find Tiffany sharing her life story on her close friends Instagram story or pursuing her goal of becoming a professional chef (cooking instant noodles). Tiffany hopes to make long-lasting memories with everyone and wishes the best of luck to all delegates!',
					school: 'Steveston-London Secondary',
					grade: 11,
				},
				{
					firstName: 'Michael',
					lastName: 'Weng',
					role: 'staff',
					position: 'Assistant Director',
					biography:
						'A grade 10 student at Steveston-London Secondary School, Michael is elated to serve as the Assistant Director for the North Atlantic Treaty Organisation. As RICHMUN was his first conference one year ago, he hopes to provide the same enthralling experience to all delegates who wish to start or expand their MUN journey at RICHMUN. In his spare time, Michael can be found playing (and losing) at chess, engaging in nefarious behavior in numerous online video games, and occasionally committing a little tomfoolery with his friends. He eagerly anticipates a weekend of fruitful debate, and wishes all delegates the best of luck.',
					school: 'Steveston-London Secondary',
					grade: 10,
				},
			],
			mentors: [],
			description: [
				'Formed during an era of unprecedented turmoil during the global political clash against communism, the North Atlantic Treaty Organization (NATO) was established in 1949 to counter Soviet aggression in the Cold War. From the Berlin Wall to the War on Terror, NATO has been at the forefront of the most significant events in modern history and has had to evolve over the years to adapt to a variety of mutual security challenges ranging from terrorism to cyber-attacks. It has been crucial in shaping the security landscape of its members for over seven decades.',
				'But today, the NATO Council faces a complicated challenge in dealing with the Russian invasion of Ukraine. As the war rages on, NATO finds itself in a precarious position. With Russian forces continuing to advance deep into Ukrainian territory, NATO must decide whether to intervene and risk all-out war with Russia that may turn nuclear, or to stand by idly and watch Ukraine’s democracy fall. The stakes have never been higher as the fate of millions, the fate of the region, and the credibility of this security alliance hangs in the balance. Will NATO muster the strength to defend its allies, or will it fall prey to Russian aggression? Will NATO member states lose faith in the organization itself? Will Russia be allowed to continue expanding its sphere of influence in their “near abroad”?  The committee must act with utmost urgency to prevent further escalation of the conflict and to find a lasting solution to the conflict before they must resort to war.',
			],
			contactEmail: 'nato@richmun.ca',

			topicA: 'The Russo-Ukrainian War',
			backgrounderLink:
				'https://drive.google.com/file/d/1YKuzHk4f7vO69LxN6lP7Wn7PYF34iaPT/view?usp=sharing',
			countryMatrixLink:
				'https://docs.google.com/spreadsheets/d/1yadEDG0JyA055cv1z27KT6bMV6v_LXcp1kNooeSUBJ0#gid=1581586383',
		},
		{
			shortName: 'HCC',
			fullName: 'Historical Crisis Committee',
			staff: [
				{
					firstName: 'Adele',
					lastName: 'Agenes',
					role: 'staff',
					position: 'Director',
					biography:
						'As a Rockridge High School Grade 10 student, Adele Agenes is incredibly thrilled and pleased to be serving as a director of the Historical Crisis Committee at RichMUN 2023. She was first exposed to Model UN in Grade 8, and although she was originally shy to speak in front of large crowds, she later developed a love for the lively and quick-paced committee discussions. Adele will never forget the yelling and sword-banging she did during her first speech in front of a large committee. In addition to Model UN, Adele has a strong interest in math and science. In her free time, she can be found in labs looking at brains under a microscope. Adele is really intrigued in what exciting debate the Historical Crisis Committee will start.',
					school: 'Rockridge Secondary',
					grade: 10,
				},
				{
					firstName: 'Matthew',
					lastName: 'Yeo',
					role: 'staff',
					position: 'Chair',
					biography:
						'A senior from Burnaby North Secondary School, Matthew is deeply honored to serve as Chair for HCC. After joining the Model UN club somewhat begrudgingly, he soon found himself enamored of the riveting debate and nuanced discussions. He hopes to surpass expectations and forge a mutually rewarding conference for delegates and staff alike. Outside of Model UN, Matthew enjoys learning capybara facts, quoting Osamu Dazai’s writing, and providing long expositions on random philosophical principles. He eagerly awaits an unforgettable conference filled with eloquent speeches, piles of directives, and “the ardor of youth”.',
					school: 'Burnaby North Secondary',
					grade: 12,
				},
				{
					firstName: 'Luke',
					lastName: 'Shu',
					role: 'staff',
					position: 'Assistant Director',
					biography:
						'As a 10th grader at Richmond High School, Luke Shu is happy to be serving as the Assistant Director for the Historical Crisis Committee. Since going to his first ever MUN conference in grade 9, Luke has developed a great interest in politics and improving his public speaking skills. He loves the speedy and passionate debate each committee session brings, and is beyond excited to be part of the team fostering valuable discussions at RichMUN. Outside of MUN, Luke can be found on the court trying to perfect his three point shot, cycling around his neighbourhood, and trying his best to sleep as early as possible. Luke is eagerly waiting for a weekend filled with fruitful debate, and wishes the best of luck to all delegates.',
					school: 'Richmond Secondary',
					grade: 10,
				},
			],
			mentors: [],
			description: [
				`HCC (Historical Crisis Committee) is an advanced ensemble of delegations collaborating to solve and debate complex historical topics and obstacles. The decisions and actions of delegates ultimately lead to a reshaping of the course of the world.`,
				`It is 1519. In Hispaniola, the Spaniards, led by Hernan Cortes, have decided to embark on the conquest of a lifetime. He and his men want to conquer the Aztec Empire. After months of planning possible alliances, supplies, and preparing ships, they arrived in Mexico. It is up to you, delegates, to decide how to defend your empire in order to fight off the Spanish before it is ripped away from you.`,
			],
			contactEmail: 'hcc@richmun.ca',

			topicA: 'Spanish Conquest of the Americas (Aztec Perspective)',
			backgrounderLink:
				'https://drive.google.com/file/d/1mY6t4ajH_zTZZ0nm0qhwny9IGMIoxbWg/view?usp=sharing',
			countryMatrixLink:
				'https://docs.google.com/spreadsheets/d/1yadEDG0JyA055cv1z27KT6bMV6v_LXcp1kNooeSUBJ0#gid=63509160',
		},
		{
			shortName: 'IPC+',
			fullName: 'International Press Corps Plus',
			staff: [
				{
					firstName: 'Richard',
					lastName: 'Min',
					role: 'staff',
					position: 'Co-Director',
					biography:
						'Richard (R) Min identifies as a graduating student from Burnaby North and as someone royally overjoyed to serve as your staff for RichMUN’s IPC this summer. He started his Model UN journey on November 16, 2019—a hopeful delegate with hopeful dreams. Like many of his peers, he eventually found his way in the vibrantly jumbled community, meeting friends and second families. For him, there’s nothing more enjoyable than feeling the spark of companionship when interacting with people from all walks of this sport, forging lifelong memories. In his incredibly abundant free time, Rmin can be found encouraging his peers to learn today so they can lead tomorrow™, thinking about his grandchildren, and dabbling in fun money-making ventures. This will be his last conference in high school, so expect him to make the committee memorable for you.				',
					school: 'Burnaby North Secondary',
					grade: 12,
				},
				{
					firstName: 'Owen',
					lastName: 'Hu',
					role: 'staff',
					position: 'Co-Director',
					biography:
						'Owen is a Grade 12 at Burnaby North and is quite pleased to be staffing the IPC at RichMUN 2023. His Model UN journey began 4 years ago, and Owen is honoured to be able to end this eventful ride here. Outside of MUN, Owen may be found researching ancient Polynesian literature or learning useless trivia. Owen looks forward to RichMUN and editing more IPC articles!                                                           				',
					school: 'Burnaby North Secondary',
					grade: 12,
				},
			],
			mentors: [],
			description: [
				`The International Press Corp Plus is a unique Model United Nations experience offered exclusively at RichMUN 2023, featuring five news teams composed of journalists, producers, and editors. Rather than debating in caucuses or passing directives, delegates in IPC+ move between committee rooms, capturing key moments of discussion and contention. Unlike traditional IPCs, this iteration will feature a triple-delegation format, where all news outlets must produce a well-written article, filmed interview, and edited video for each of the other committees at RichMUN. Whether it be adhering strictly to an agency’s philosophy, finding the perfect scenes to shoot, or acting the part of a news anchor, we wish you the very best of luck with IPC+!`,
			],
			contactEmail: 'ipc@richmun.ca',

			topicA: '',
			topicB: '',
			backgrounderLink:
				'https://drive.google.com/file/d/1i3r7Jg-6hGvG8QSmzQXWZ8O6bXRODX9a/view?usp=sharing',
			countryMatrixLink:
				'https://docs.google.com/spreadsheets/d/1yadEDG0JyA055cv1z27KT6bMV6v_LXcp1kNooeSUBJ0#gid=69747747',
		},
	],
	flexStaff: [
		{
			firstName: 'Sin',
			lastName: 'Li',
			role: 'staff',
			position: 'Flex Staff',
			biography:
				'Sin is a grade 9 student at Semiahmoo Secondary who finds delight in the small things in life, such as the prospect of world peace. All jokes aside, MUN has become a part of Sin’s life in a pretty significant way. Regardless of his questionable commitment to watching the LCK, staying up to hours when others would be waking up to read manhwa/manhua, or reading random things online, he is always open to a friendly chat with any delegates and looks forward to his first time staffing at RichMUN 2023!',
			school: 'Semiahmoo Secondary',
			grade: 9,
		},
	],
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
export const CONFERENCE_METADATA = ITERATION_EIGHT;
