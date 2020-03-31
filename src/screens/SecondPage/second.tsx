import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Button} from 'react-native';

interface ISecondPage {}

const Second: FC<ISecondPage> = () => {
	const nav = useNavigation();
	return (
		<View>
			<Text> Druga strona </Text>
			<Button title="Home screen" onPress={() => {
				nav.navigate('Welcome');
			}}
			/>
		</View>
	);
};

export default Second;