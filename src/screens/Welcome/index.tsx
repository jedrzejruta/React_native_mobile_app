import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constans/Colors';
import Layout from '../../constans/Layout';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

//make global view style for TOP margin
const HomeView = styled.View` 
	margin-top: ${Layout.statusBar}px;
`;

interface IWelcomeProps {
    myProps: string;
}

const Welcome: FC<IWelcomeProps> = props => {
	const navi = useNavigation();
    return (
        <HomeView>
			<Text>Witam witam </Text>
            <WelcomeText>Welcome {props.myProps}</WelcomeText>
			<Button title="Second Page" onPress={() => {
				navi.navigate('Second');
			}}
			/>
        </HomeView>
    );
};

export default Welcome;