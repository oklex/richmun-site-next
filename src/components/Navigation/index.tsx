// optimize for the mobile navigation first

import { ReactElement } from 'react';
import { FlyoutNavigation } from './FlyoutMenu';
import { Div } from '@src/ui-library';

export const Navigation = (): ReactElement => {
	return (
		<Div flex justifyContent="between">
			<span>Logo</span>
			<FlyoutNavigation />
			<span>Apply</span>
		</Div>
	);
};
