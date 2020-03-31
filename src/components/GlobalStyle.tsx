import styled from 'styled-components/native';

import Layout from '../constans/Layout';
import Colors from '../constans/Colors';

const CustomView = styled.View`
	margin-top: ${Layout.statusBar}px;
	height: ${Layout.window.height}px;
`;

export default CustomView;