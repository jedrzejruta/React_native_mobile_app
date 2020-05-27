import React, { FC } from 'react';
import {Image, Text, View, Button, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { SafeView, CustomText, DeviceHeight} from '../../components/GlobalStyle';
import foto from '../../assets/foto.png';

interface IWelcomeProps {
	myProps: string;
}

const HomeImage = styled.Image`
	width: ${DeviceHeight / 5}px;
	height: ${DeviceHeight / 5}px;
`;

const HomeText = styled.Text`
	fontSize: 28px;
	padding: 5px 0 5px 0;
`;
const LegendText = styled(HomeText)`
	fontSize: 20px;
`;

const HomeView = styled.View`
	minHeight: 100%;
	backgroundColor: #ecf0f1;
	padding: 15px;
`;

const TextWrapper = styled.View`
	paddingBottom: 5px;
	borderBottomWidth: 1px;
	width: 85%;
`;

const HomeNameView = styled.View`
	padding: 0 0 20px 0;
`;

const Home: FC<IWelcomeProps> = props => {
	return (
		<SafeView>
			<HomeView>
				<HomeImage source={foto}/>
				<HomeNameView>
					<HomeText>Jędrzej Ruta</HomeText>
					<Text>WSEI student</Text>
				</HomeNameView>
				<Text style={{fontSize: 25}}>Legend for app navigation</Text>
				<TextWrapper>
					<LegendText>Home {'\u261F'}</LegendText>
					<Text>Welcome screen</Text>
				</TextWrapper>
				<TextWrapper>
					<LegendText>ToDo List {'\u261F'}</LegendText>
					<Text>Tasks list with name and description</Text>
				</TextWrapper>
				<TextWrapper>
					<LegendText>About {'\u261F'}</LegendText>
					<Text>Photos plotting with text</Text>
				</TextWrapper>
			</HomeView>
		</SafeView>
	);
};

export default Home;