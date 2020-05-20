import React, { FC } from 'react';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { Text, Image, View, Button, ScrollView } from 'react-native';

import * as Global from '../../components/GlobalStyle';

import foto2 from '../../assets/foto2.png';

interface IThirdPage { }

const Third: FC<IThirdPage> = () => {
	const nav = useNavigation();
	const ref = React.useRef(undefined);
	useScrollToTop(ref);
	return (
		<Global.ListView ref={ref}>
			<Text>Trzecia strona</Text>
			<Image source={foto2} style={{width: 200, height: 140}} />
			<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula rhoncus libero posuere venenatis. In eros tellus, laoreet sit amet eleifend id, blandit ac lectus. Vivamus non facilisis lacus, a dictum ligula. Sed quis tempor tellus. Aenean purus sem, eleifend a nisi vel, euismod luctus tortor. Fusce a pharetra neque, eget auctor risus. Nulla vel aliquam sem. In fringilla, mi et commodo aliquam, lectus nisl dapibus nisi, eu dignissim dui nisl ac ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ultricies vitae dolor at porttitor.</Text>
			<Image source={foto2} style={{width: 200, height: 140, transform: [{ rotate: '90deg'}] }} />
			<Button title='Home screen' onPress={() => {
				nav.navigate('Welcome');
			}}
			/>
			<Text>Nunc varius aliquam elit, eget lacinia risus viverra at. Phasellus placerat porta nisl, nec feugiat sapien ullamcorper ac. Donec molestie gravida velit a egestas. Ut vitae diam sit amet mi luctus hendrerit. Nulla facilisi. Nunc quis pulvinar nisi. Nullam sit amet maximus massa. Mauris tempor dui non neque mollis, quis porttitor massa aliquet. Nam fermentum sit amet est id lacinia. Suspendisse sagittis posuere viverra. </Text>
			<Image source={foto2} style={{width: 200, height: 140, transform: [{ rotate: '-90deg'}]}} />
			<Text>Sed sed diam dui. Cras eros erat, vehicula nec gravida eget, bibendum eu quam. Proin et elit nunc. Sed convallis nibh vitae felis suscipit, ut luctus nisi tincidunt. Duis finibus porttitor tellus vestibulum laoreet. Maecenas pharetra pellentesque aliquam. Etiam sit amet molestie velit, in interdum dolor. Quisque aliquam metus non felis scelerisque tincidunt. Cras in malesuada dui. Nunc consectetur cursus fringilla. Ut fermentum erat a molestie aliquam. Vivamus suscipit luctus lectus at rhoncus. Vivamus efficitur velit nisi, id dignissim lacus convallis et. Aliquam semper venenatis augue et bibendum. Vivamus vehicula, nulla ultricies mattis consectetur, nisl libero sollicitudin diam, sed interdum ligula ligula in odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
			<Image source={foto2} style={{width: 200, height: 140, transform: [{ rotate: '180deg'}] }} />
		</Global.ListView>
	);
};

export default Third;