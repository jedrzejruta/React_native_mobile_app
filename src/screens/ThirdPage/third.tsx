import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Button} from 'react-native';

interface IThirdPage {}

const Third: FC<IThirdPage> = () => {
	const nav = useNavigation();
	return (
		<View>
			<Text> Trzecia strona </Text>
			<Button title="Home screen" onPress={() => {
				nav.navigate('Welcome');
			}}
			/>
		</View>
	);
};

export default Third;