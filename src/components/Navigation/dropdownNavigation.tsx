import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {  Div, Icon } from '@ui-library';
import { I9_NAV_CONFIG } from '@lib/navigationMeta/i9'; // make into a prop later
import {
	DropdownNav,
	NavItem,
	NavSubItemContainer,
	NavSubItem,
} from './nav-ui';

type DropdownNavType = {
	showDropdownNav: boolean;
	pathname: string;
};
export const DropdownNavigation = ({
	showDropdownNav,
	pathname,
}: DropdownNavType): ReactElement => {
	const {
		home,
		main: MainLinks,
		secondary: SecondaryLinks,
	} = I9_NAV_CONFIG;

	return (
		<>
			{showDropdownNav && (
				<DropdownNav>
					{MainLinks.map((navItem, index) => (
						<div key={`${navItem.route}-d${index}`}>
							<NavItem mobile selected={pathname.includes(navItem.route)}>
								<Link to={navItem.route}>{navItem.label}</Link>
							</NavItem>
							{/* {navItem.pages && navItem.pages.length > 0 && (
                <NavSubItemContainer key={`/${navItem.route}-sub`} mobile>
                  {navItem.pages.map((link) => (
                    <NavSubItem mobile key={link.route}>
                      <Link to={link.route}>{link.label}</Link>
                    </NavSubItem>
                  ))}
                </NavSubItemContainer>
              )} */}
						</div>
					))}
					<Div responsiveness="mobile-only">
						{SecondaryLinks.map((navItem, index) => {
							return (
								<NavItem
									key={`${navItem.route}-m${index}`}
									mobile
									selected={pathname.includes(navItem.route)}
									secondary
								>
									<Link to={navItem.route}>{navItem.label}</Link>
								</NavItem>
							);
						})}
					</Div>
				</DropdownNav>
			)}
		</>
	);
};
