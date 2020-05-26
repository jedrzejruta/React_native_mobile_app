import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home/index';
import List from '../screens/ToDoScreen/list';
import About from '../screens/About/about';

import colors from '../constans/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const BottomNav: FC = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				// tabBarLabel: {} add label global
				tabBarIcon: ({focused, color, size}) => {
					let iconName: string;

					if (route.name === 'Home') {
						iconName = 'ios-home';
					} else if (route.name === 'List')
						iconName = focused ? 'ios-list-box' : 'ios-list';
					else if (route.name === 'About') {
						iconName = focused
						? 'ios-information-circle'
						: 'ios-information-circle-outline';
					}
					return <Ionicons name={iconName} size={size} color={color}/>;
				}
			})}
			tabBarOptions={{
				activeBackgroundColor: `${colors.darkblue}`,
				activeTintColor: `${colors.white}`,
				inactiveTintColor: `${colors.darkblue}`,
				inactiveBackgroundColor: `${colors.white}`
			}}
		>
			<Tab.Screen
				name='Home'
				component={Home}
			/>
			<Tab.Screen
				name='List'
				component={List}
				options= {{
					tabBarLabel: 'ToDo List'
				}}
			/>
			<Tab.Screen
				name='About'
				component={About}
			/>
		</Tab.Navigator>
	);
};

export default BottomNav;