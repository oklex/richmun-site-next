// optimize for the mobile navigation first

import { ReactElement } from 'react';
import { FlyoutNavigation } from './FlyoutMenu';
import { Div } from '@src/ui-library';
import { NavConfig } from '@src/lib/navigationMeta/types';

type NavigationProps = {
	NavConfig: NavConfig;
};

export const Navigation = ({ NavConfig }: NavigationProps): ReactElement => {
	return (
		<Div flex justifyContent="between">
			<span>Logo</span>
			<FlyoutNavigation links={NavConfig.main} />
			<span>Apply</span>
		</Div>
	);
};
