import React, { ReactNode, ReactElement, useEffect } from 'react';
import styled from 'styled-components';

// import { Navigation, Footer } from '@components';
import { BaseContainer } from './containers';
import { Navigation } from '@src/components/FlyoutMenu';
import { I9_NAV_CONFIG } from '@src/lib/navigationMeta/i9';

type Props = {
	location?: Location;
	children: ReactNode;
};
export const PageLayout = ({ location, children }: Props): ReactElement => {
	const pathname = location ? location.pathname : undefined;

	useEffect(() => {
		console.log('viewing page: ', pathname);
	}, [pathname]);

	// add background image support
	return (
		<AppBackground>
			<PageBackground id={pathname}>
				<Navigation NavConfig={I9_NAV_CONFIG} />
				<PageContainer>{children}</PageContainer>
				{/* <Footer /> */}
			</PageBackground>
		</AppBackground>
	);
};

const AppBackground = styled.div`
	max-width: 100vw;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.cardLowContrastBackground};
`;

const PageBackground = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.colors.globalBackgroundColor};
`;

const PageContainer = styled(BaseContainer)`
	margin-top: 1rem;
`;
