import styled, { css, keyframes } from 'styled-components';
import { Div, Button } from '@ui-library';

export const Nav = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	padding: 4.8rem 2em 3.8rem;
`;

export const NavContainer = styled.div`
	max-width: 110rem;
	margin: 0px auto;
	display: flex;
`;

export const NavFront = styled.div`
	width: auto;
	display: flex;
	margin-right: 3rem;

	a {
		min-width: 212px;
	}
	${css`
		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			width: 100%;
			justify-content: space-between;

			div:first-child {
				flex-grow: 0;
			}
			div:last-child(2) {
				flex-grow: 1;
			}
		}
	`}
`;

type LinksProps = {
	secondary?: true;
};
export const Links = styled(Div)<LinksProps>`
	justify-content: ${({ secondary }) => (secondary ? 'end' : 'start')};
	flex-grow: 1;
	display: flex;
	align-self: center;
`;

type NavItemProps = {
	selected?: boolean;
	mobile?: true;
	secondary?: true;
};

export const NavItem = styled('h4')<NavItemProps>`
	font-family: 'Josefin Sans', sans-serif;
	text-transform: uppercase;
	align-self: center;

	${({ mobile }) => {
		if (!mobile)
			return css`
				position: relative;
				margin: auto 0.75rem;
				padding: 1rem 0.5em;
				font-weight: 600;
				white-space: nowrap;
				overflow: hidden;
				font-size: 15px;
				display: flex;
				gap: 8px;
			`;
		if (mobile)
			return css`
				position: relative;
				z-index: 1000;
				text-align: center;
				align-self: center;
				margin: 15px auto;
				padding-top: auto;
				padding-bottom: auto;
				background-color: ${({ theme }) => theme.colors.globalBackgroundColor};
			`;
	}}
	${({ mobile, secondary }) => {
		if (mobile && secondary) return 'font-size: 18px;';
		if (mobile && !secondary) return 'font-size: 20px;';
		return null;
	}}

  ${({ selected, secondary, theme }) => {
		if (selected === true)
			return css`
				background: ${`-webkit-linear-gradient(
                     -90deg,
                     ${theme.palette.brand_gradient.top} 0%,
                                       ${theme.palette.brand_gradient.bottom} 100%
                 )`};
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			`;
		else if (secondary)
			return css`
				${css`
					color: ${theme.palette.text_med_contrast};
				`}
			`;
		return css`
			${`
            background: -webkit-linear-gradient(
                      -90deg,
                      ${theme.palette.mono_gradient.top},
                      ${theme.palette.mono_gradient.bottom}
                  );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;`}
		`;
	}}
`;

type NavSubItemProps = {
	mobile?: true;
};
export const NavSubItem = styled.div<NavSubItemProps>`
	font-size: 15px;
	padding: 0.75rem 1em;
	border-radius: ${({ theme }) => theme.radii};
	color: ${({ theme }) => theme.palette.greyDark2};
	margin: 0px auto;
	width: auto;

	&:hover {
		background-color: ${({ theme }) => theme.colors.cardLightOutline};
	}

	${({ mobile }) =>
		mobile &&
		css`
			display: inline;
			padding-left: 5rem;
			padding-right: 5rem;
		`}
`;

export const NavSubItemContainer = styled.div<NavSubItemProps>`
	z-index: 1000;
	position: absolute;
	min-width: 100%;
	width: auto;
	top: 4rem;
	padding: 5px;
	border: solid 1px;
	border-radius: ${({ theme }) => theme.radii};
	background-color: ${({ theme }) => theme.colors.globalBackgroundColor};
	border-color: ${({ theme }) => theme.colors.cardLightOutline};
	text-align: center;

	${({ mobile }) =>
		mobile &&
		css`
			display: flex;
			/* flex-direction: column; */
			flex-wrap: wrap;
			padding: 1rem 3.5rem 0;
			gap: 0.5rem;
			position: relative !important;
			top: -1rem;
			border: none;
		`}
`;
const growDown = keyframes`
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
`;
export const DropdownNav = styled.div`
	position: absolute;
	min-width: 100%;
	top: calc(100% - 3px); // hide background on animation
	left: 0px;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	transform-origin: top center;
	animation: ${growDown} 200ms ease-in-out forwards;
	background-color: ${({ theme }) => theme.colors.globalBackgroundColor};
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); // move to palette eventually
`;
