import styled from 'styled-components/native';

import Layout from '../constans/Layout';
import Colors from '../constans/Colors';
import { ScrollView } from 'react-native';


//add flex
export const CustomView = styled.View`
	backgroundColor: red;
	margin-top: ${Layout.statusBar}px;
	height: ${Layout.window.height}px;
`;

export const CustomText = styled.Text`
	display: flex;
	alignItems: center;
	text-align: center;
	color: ${Colors.black};
	font-size: 20px;
`;

export const ListView = styled.ScrollView.attrs( () => ({
	contentContainerStyle: {
		alignItems: 'center',
	},
}))`
	margin-top: ${Layout.statusBar}px;
`;//bottom margin here

export const SingleElListView = styled.View`
	border: 1px solid black;
	width: 100px;
	margin: 0 0 10px 0;
	padding: 2px;
`;