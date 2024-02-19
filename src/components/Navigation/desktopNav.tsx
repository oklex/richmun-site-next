import React, { ReactElement, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react';

import { I9_NAV_CONFIG } from '@lib/navigationMeta/i9'; // make into a prop later
import { Button, Div, Icon, TextStyle } from '@ui-library';
import {
	Nav,
	NavContainer,
	NavFront,
	NavItem,
	NavSubItem,
	NavSubItemContainer,
	Links,
} from './nav-ui';
import { DropdownNavigation } from './dropdownNavigation';
import { HamburgerButton } from '../HamburgerButton';
import { LocalImage } from '../Image';
import { NavItemType } from '@src/lib/navigationMeta/types';

const LOGO_PATH = '/images/branding/fullLogo.png';

type NavigationProps = {
	pathname: string;
};
export const DesktopNavigation = ({
	pathname,
}: NavigationProps): ReactElement => {
	const { home, main: MainLinks, secondary: SecondaryLinks } = I9_NAV_CONFIG;
	const [showDropdownNav, setShowDropdownNav] = useState(false);
	const [navTouched, setNavTouched] = useState(false);

	const toggleDropdownNav = () => {
		setShowDropdownNav((prev) => !prev);
		setNavTouched(true);
	};

	return (
		<Nav>
			<NavContainer>
				<NavFront>
					<Div
						responsiveness="desktop-hide"
						flex
						justifyContent="center"
						flexDirection="col"
						margin="auto 1rem 0px"
					>
						<HamburgerButton
							toggled={showDropdownNav}
							toggle={toggleDropdownNav}
						/>
					</Div>
					<Div flex justifyContent="center" flexDirection="col">
						<Link to={home.route}>
							<LocalImage
								src={LOGO_PATH}
								alt="richmond model un"
								width={212}
								height={43}
								id="nav-brand"
							/>
						</Link>
					</Div>
					<Div
						responsiveness="mobile-only"
						margin="auto 1rem 0px"
						padding="0px 2rem"
					>
						{/* exists to balance UI on mobile */}
					</Div>
				</NavFront>
				<Links responsiveness="desktop-only">
					{MainLinks.map((link) => (
						<NavItemRender
							key={JSON.stringify(link) + 'desktop-only'}
							navItem={link}
							pathname={pathname}
						/>
					))}
				</Links>
				<Links secondary responsiveness="mobile-hide">
					{SecondaryLinks.map((link) => (
						<NavItemRender
							key={JSON.stringify(link) + 'mobile-hide'}
							navItem={link}
							pathname={pathname}
						/>
					))}
				</Links>
			</NavContainer>
			<DropdownNavigation
				showDropdownNav={showDropdownNav}
				pathname={pathname}
			/>
		</Nav>
	);
};

type NavItemRenderType = {
	navItem: NavItemType;
	pathname: string;
};
const NavItemRender = ({
	navItem,
	pathname,
}: NavItemRenderType): ReactElement => {
	const [showPopover, setShowPopover] = useState(false);

	if (navItem.isCta) {
		return (
			<Div flex flexDirection="col" margin="-2px 0px 0px">
				<Link key={`${navItem.label}-${navItem.route}`} to={navItem.route}>
					<Button variant="primary" size="regular">
						{navItem.label.toLocaleUpperCase()}{' '}
					</Button>
				</Link>
			</Div>
		);
	}
	if (navItem.childPages && navItem.childPages.length > 0)
		return (
			<div className="relative" key={`${navItem.label}-${navItem.route}`}>
				<Popover onMouseLeave={() => setShowPopover(false)}>
					<div className="inline" onMouseEnter={() => setShowPopover(true)}>
						<NavItem selected={pathname.includes(navItem.route)}>
							<Link to={navItem.route}>
								{navItem.label}
								<Icon
									icon={showPopover ? 'chevron-down' : 'chevron-up'}
									color={
										pathname.includes(navItem.route) ? 'brand' : 'med-contrast'
									}
								/>
							</Link>
						</NavItem>
					</div>
					{showPopover && (
						<Popover.Panel static>
							<div>
								<NavSubItemContainer>
									{navItem.childPages.map(({ label, route }) => (
										<NavSubItem
											key={`${navItem.label}-${navItem.route}-${route}`}
										>
											<Link to={route}>
												<TextStyle
													forceSingleLine
													color={pathname.includes(route) ? 'brand' : undefined}
												>
													{label}
												</TextStyle>
											</Link>
										</NavSubItem>
									))}
								</NavSubItemContainer>
							</div>
						</Popover.Panel>
					)}
				</Popover>
			</div>
		);

	return (
		<Link to={navItem.route}>
			<NavItem selected={pathname.includes(navItem.route)}>
				{navItem.label}
			</NavItem>
		</Link>
	);
};
