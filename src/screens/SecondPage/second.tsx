import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Button} from 'react-native';

import * as Global from '../../components/GlobalStyle';

interface ISecondPage {}

const Second: FC<ISecondPage> = () => {
	const nav = useNavigation();
	return (
		<Global.CustomView>
			<Text> Druga strona </Text>
			<Button title="Home screen" onPress={() => {
				nav.navigate('Welcome');
			}}
			/>
		</Global.CustomView>
	);
};

export default Second;