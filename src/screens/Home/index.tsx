import React, { FC } from 'react';
import {Image, Text, View, Button, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation, useScrollToTop } from '@react-navigation/native';

import Colors from '../../constans/Colors';

import { SafeView, ListView, CustomText} from '../../components/GlobalStyle';
import foto from '../../assets/foto.png';

interface IWelcomeProps {
	myProps: string;
}

const Home: FC<IWelcomeProps> = props => {
	const navi = useNavigation();
	const ref = React.useRef(undefined);
	useScrollToTop(ref);
	return (
		<SafeView>
			<ListView ref={ref}>
				<Image source={foto} style={{width: 100, height: 100}}></Image>
				<CustomText>Jędrzej Ruta</CustomText>
				<Text>Zdjęcie ma być okrągłe, np. logo appki</Text>
				<CustomText>Trochę tekstu o aplikacji, strona startowa</CustomText>
				{/* <Button title='Second Page' onPress={() => {
					navi.navigate('List');
				}}
				/> */}
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula rhoncus libero posuere venenatis. In eros tellus, laoreet sit amet eleifend id, blandit ac lectus. Vivamus non facilisis lacus, a dictum ligula. Sed quis tempor tellus. Aenean purus sem, eleifend a nisi vel, euismod luctus tortor. Fusce a pharetra neque, eget auctor risus. Nulla vel aliquam sem. In fringilla, mi et commodo aliquam, lectus nisl dapibus nisi, eu dignissim dui nisl ac ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ultricies vitae dolor at porttitor.
				</Text>
			</ListView>
		</SafeView>
	);
};

export default Home;