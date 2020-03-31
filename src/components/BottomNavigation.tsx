import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../screens/Welcome/index';
import Second from '../screens/SecondPage/second';
import Third from '../screens/ThirdPage/third';

const Tab = createBottomTabNavigator();

const BottomNav: FC = () => {
	return (
		<Tab.Navigator
			initialRouteName="Welcome"
		>
			<Tab.Screen
				name="Welcome"
				component={Welcome}
				options={{
					tabBarLabel: 'Home'
				}}
			/>
			<Tab.Screen
				name="Second"
				component={Second}
				options={{
					tabBarLabel: 'Second Page'
				}}
			/>
			<Tab.Screen
				name="Third"
				component={Third}
				// options={{ 
				// 	tabBarLabel: 'Third Page' //optional display name
					//tabBarIcons TODO
				// }}
			/>
		</Tab.Navigator>
	);
};


export default BottomNav;