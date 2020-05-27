import styled from 'styled-components';

import Layout from '../constans/Layout';
import Colors from '../constans/Colors';

export const DeviceWidth: number = Layout.window.width;
export const DeviceHeight: number = Layout.window.height;

export const SafeView = styled.SafeAreaView`
	backgroundColor: ${Colors.darkblue};
	paddingTop: ${Layout.statusBar}px;
`;

export const CustomView = styled.View`
	paddingTop: 20px;
	alignItems: center;
	backgroundColor: white;
	height: ${Layout.window.height}px;
`;

export const CustText2 = styled.Text`
	textAlign: center;
	color: ${Colors.white};
`;

export const CustomText = styled.Text`
	display: flex;
	alignItems: center;
	textAlign: center;
	color: ${Colors.black};
	font-size: 25px;
`;

export const DeleteButton = styled.TouchableOpacity`
	backgroundColor: ${Colors.deepskyblue};
	margin: 2px;
	padding: 10px;
	border-radius: 5px;
`;

export const FormAddTask = styled(DeleteButton)`
	backgroundColor: ${Colors.notsodarkblue};
	minWidth: 60%;
`;

export const ListTextEl = styled(CustText2)`
	textAlign: left;
	color: ${Colors.white};
`;

export const FlatView = styled.FlatList.attrs({
	contentContainerStyle: {
		paddingBottom: 10,
		paddingTop: 10 // to avoid flatlist hiding behind bottom tab
	}
})`
	minHeight: 100%;
	backgroundColor: #ecf0f1;
	width: ${Layout.window.width}px;
`;

export const ListView = styled.ScrollView.attrs({
	contentContainerStyle: {
		padding: 15
	}
})`
	minHeight: 100%;
	backgroundColor: #ecf0f1;
`;

export const CustomTextInput = styled.TextInput.attrs({
	placeholderTextColor: Colors.ghostwhite
})`
	backgroundColor: #2a86bf;
	minWidth: 60%;
	padding: 10px;
	margin-top: 2px;
`;

export const SingleElListView = styled.View.attrs({
	contentContainerStyle: {
		alignItems: 'center'
	}
})`
	margin: 0 20px 0 20px;
	padding: 10px 20px 0 20px;
	flexWrap: wrap;
	flexDirection: row;
`;

export const AddTaskButton = styled.TouchableOpacity`
	position: absolute;
	top: 400px;
	right: 30px;
`;

export const AddButtonImg = styled.Image`
	width: 70px;
	height: 70px;
`;
export const AboutPageView = styled.View`
	flexDirection: row;
	alignItems: center;
	padding: 10px 0 10px 0;
`;
export const AboutPageText = styled.Text`
	padding: 10px;
	flexWrap: wrap;
`;

export const AboutImage = styled.Image`
	flex: 1;
	margin: 0 5px 0 5px;
	resizeMode: contain;
`;