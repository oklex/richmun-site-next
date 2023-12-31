import { ReactElement, useState } from 'react';

import { Header, Text } from '@src/ui-library';
import styled from 'styled-components';

import { NavItemType } from '@src/lib/navigationMeta/types';

type FlyoutNavigationProps = {
	// navItems
	links: NavItemType[];
};

export const FlyoutNavigation = ({
	links,
}: FlyoutNavigationProps): ReactElement => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => setOpen((prev) => !prev);

	return (
		<div className="relative">
			<button
				type="button"
				className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
				aria-expanded="false"
				onClick={() => toggleOpen()}
			>
				<svg
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			{open && (
				<div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
					<div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 pt-2">
						{links.map((linkMtd) => (
							<div className="py-1 px-4" key={linkMtd.label}>
								<div className="relative gap-x-6 rounded-lg px-4 pb-2 pt-3 hover:bg-gray-50">
									<NavItemHeader>{linkMtd.label}</NavItemHeader>
									<NavItemSubtitle>{linkMtd.subtitle}</NavItemSubtitle>
								</div>
							</div>
						))}
						<div className="mt-2 divide-x divide-gray-900/5 bg-gray-50">
							<a
								href="#"
								className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
							>
								contact
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const NavItemHeader = styled(Header).attrs(() => {
	level: 4;
})`
	font-size: 18px;
`;

const NavItemSubtitle = styled(Text)`
	font-size: 16px;
`;
