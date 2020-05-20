import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Welcome from '../screens/Welcome/index';
import Second from '../screens/SecondPage/second';
import Third from '../screens/ThirdPage/third';

import colors from '../constans/Colors';

const Tab = createBottomTabNavigator();

const BottomNav: FC = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				// tabBarLabel: {} add label global
				tabBarIcon: ({focused, color, size}) => {
					let iconName: string;

					if (route.name === 'Welcome') {
						iconName = 'ios-home';
					} else if (route.name === 'Second')
						iconName = focused ? 'ios-list-box' : 'ios-list';
					else if (route.name === 'Third') {
						iconName = focused
						? 'ios-information-circle'
						: 'ios-information-circle-outline';
					}
					return <Ionicons name={iconName} size={size} color={color}/>;
				}
			})}
			tabBarOptions={{
				activeBackgroundColor: `${colors.ghostwhite}`,
				activeTintColor: `${colors.deepskyblue}`,
				inactiveTintColor: `${colors.black}`
			}}
		>
			<Tab.Screen
				name='Welcome'
				component={Welcome}
				options={{
					tabBarLabel: 'Home'
				}}
			/>
			<Tab.Screen
				name='Second'
				component={Second}
				options={{
					tabBarLabel: 'Second Page'
				}}
			/>
			<Tab.Screen
				name='Third'
				component={Third}
				options={{
					tabBarLabel: 'About' // optional disp name
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomNav;