import styled from 'styled-components/native';

import Layout from '../constans/Layout';
import Colors from '../constans/Colors';


//add flex
export const CustomView = styled.View`
	margin-top: ${Layout.statusBar}px;
	height: ${Layout.window.height}px;
`;

export const CustomText = styled.Text`
	display: flex;
	text-align: center;
	color: ${Colors.black};
	font-size: 20px;
`;