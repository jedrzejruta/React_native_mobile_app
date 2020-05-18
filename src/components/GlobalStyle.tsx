import styled from 'styled-components/native';

import Layout from '../constans/Layout';
import Colors from '../constans/Colors';

// add flex
export const CustomView = styled.View`
	align-items: center;
	justify-content: center;
	backgroundColor: white;
	margin-top: ${Layout.statusBar}px;
	height: ${Layout.window.height}px;
`;

// make common style for textinput and text button
export const CustText2 = styled.Text`
	text-align: center;
	font-size: 15px;
	border: 1px solid black;
	padding: 10px;
	width: 100px;
	margin: 2px;
	color: ${Colors.deepskyblue};
`;

export const CustomText = styled.Text`
	display: flex;
	alignItems: center;
	text-align: center;
	color: ${Colors.black};
	font-size: 20px;
`;

export const FlatView = styled.FlatList.attrs({
	contentContainerStyle: {
		alignItems: 'center'
	}
})`
	width: ${Layout.window.width}px;
`;

export const ListView = styled.ScrollView.attrs({
	contentContainerStyle: {
		alignItems: 'center'
	}
})`
	margin-top: ${Layout.statusBar}px;
`; // bottom margin here

export const CustomTextInput = styled.TextInput.attrs({
	placeholderTextColor: Colors.lightskyblue
})`
	border: 1px solid black;
	width: 100px;
	padding: 10px;
	margin: 2px;
	color: ${Colors.darkblue};
`;

export const SingleElListView = styled.View`
	border-radius: 25px;
	border: 1px solid black;
	width: 150px;
	background: white;
	padding: 20px;
`;