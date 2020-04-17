import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Button} from 'react-native';

import * as Global from '../../components/GlobalStyle';

interface IThirdPage {}

const Third: FC<IThirdPage> = () => {
	const nav = useNavigation();
	return (
		<Global.CustomView>
			<Text>Trzecia strona</Text>
			<Text>Zdjęcia i tekst przeplatające się</Text>
			<Button title="Home screen" onPress={() => {
				nav.navigate('Welcome');
			}}
			/>
		</Global.CustomView>
	);
};

export default Third;