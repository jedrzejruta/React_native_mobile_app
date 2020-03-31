import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomNav from './components/BottomNavigation';


interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (
		<NavigationContainer>
			<BottomNav/>
		</NavigationContainer>
    );
};

export default Main;