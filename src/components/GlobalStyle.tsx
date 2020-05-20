import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Layout from '../constans/Layout';
import Colors from '../constans/Colors';

// justify-content: center;
// add flex
export const SafeView = styled.SafeAreaView`
	backgroundColor: #40a3f5;
	paddingTop: ${Layout.statusBar}px;
`;

export const CustomView = styled.View`
	align-items: center;
	backgroundColor: white;
	paddingTop: ${Layout.statusBar}px;
	height: ${Layout.window.height}px;
`;

// make common style for textinput and text button
export const CustText2 = styled.Text`
	text-align: center;
	color: ${Colors.deepskyblue};
`;

export const CustomText = styled.Text`
	display: flex;
	alignItems: center;
	text-align: center;
	color: ${Colors.black};
	font-size: 20px;
`;

export const CustomButton = styled.TouchableOpacity`
	backgroundColor: red;
`;

export const FlatView = styled.FlatList.attrs({
	contentContainerStyle: {
		alignItems: 'center',
		paddingBottom: 10 // to awoid flatlist hiding behind bottom tab
	}
})`
	minHeight: 100%;
	backgroundColor: ${Colors.lightskyblue}
	width: ${Layout.window.width}px;
`;

export const ListView = styled.ScrollView.attrs({
	// contentContainerStyle: {
	// 	alignItems: 'center'
	// }
})`
	backgroundColor: red;
	margin-top: ${Layout.statusBar}px;
`; // bottom margin here

export const CustomTextInput = styled.TextInput.attrs({
	placeholderTextColor: Colors.lightskyblue
})`
	border: 1px solid black;
	width: 100px;
	padding: 10px;
	margin-top: 2px;
	color: ${Colors.darkblue};
`;

export const SingleElListView = styled.View`
	border: 1px solid black;
	margin-top: 10px;
	width: 150px;
	minHeight: 100px;
	background: white;
	padding: 10px;
`;