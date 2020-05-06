import styled from 'styled-components/native';

import Layout from '../constans/Layout';
import Colors from '../constans/Colors';

//add flex
export const CustomView = styled.View`
	backgroundColor: white;
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

export const FlatView = styled.FlatList.attrs( () => ({
	contentContainerStyle: {
		alignItems: 'center'
	},
}))`
	width: ${Layout.window.width}px;
`;

export const ListView = styled.ScrollView.attrs( () => ({
	contentContainerStyle: {
		alignItems: 'center',
	},
}))`
	margin-top: ${Layout.statusBar}px;
`;//bottom margin here

export const SingleElListView = styled.View`
	border-radius: 25px;
	border: 1px solid black;
	width: 150px;
	margin: 0 0 10px 0;
	background: white;
	padding: 15px;
`;