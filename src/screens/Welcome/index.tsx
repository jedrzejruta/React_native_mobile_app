import React, { FC } from 'react';
import {Image, Text, View, Button, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation, useScrollToTop } from '@react-navigation/native';

import Colors from '../../constans/Colors';

import * as Global from '../../components/GlobalStyle';
import foto from '../../assets/foto.png';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

interface IWelcomeProps {
	myProps: string;
}

const Welcome: FC<IWelcomeProps> = props => {
	const navi = useNavigation();
	const ref = React.useRef(undefined);
	useScrollToTop(ref);
	return (
		<Global.ListView ref={ref}>
			<Image source={foto} style={{width: 100, height: 100}}></Image>
			<Global.CustomText>Jędrzej Ruta</Global.CustomText>
			<Text>Zdjęcie ma być okrągłe, np. logo appki</Text>
			<WelcomeText>Welcome {props.myProps}</WelcomeText>
			<Global.CustomText>Trochę tekstu o aplikacji, strona startowa</Global.CustomText>
			<Button title='Second Page' onPress={() => {
				navi.navigate('Second');
			}}
			/>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
			<Text>Lorem ipsum dorem itum dlalalalaa</Text>
		</Global.ListView>
	);
};

export default Welcome;