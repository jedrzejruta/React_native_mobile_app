import React, { FC } from 'react';
import { useScrollToTop } from '@react-navigation/native';

import { SafeView, ListView, AboutPageView, AboutImage, AboutPageText, CustomText } from '../../components/GlobalStyle';
import styled from 'styled-components';

import foto2 from '../../assets/foto2.png';

interface IAboutPage { }

const TextWrapper = styled.View`
	flex: 1;
	justifyContent: center;
	borderBottomWidth: 1px;
`;

const About: FC<IAboutPage> = () => {

	const ref = React.useRef(undefined);
	useScrollToTop(ref);

	return (
		<SafeView>
			<ListView ref={ref}>
				<CustomText>App information</CustomText>
				<AboutPageView>
					<AboutImage source={foto2}/>
					<TextWrapper>
						<AboutPageText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula rhoncus libero posuere venenatis. In eros tellus, laoreet sit amet eleifend id, blandit ac lectus. Vivamus non facilisis lacus, a dictum ligula. Sed quis tempor tellus. Aenean purus sem, eleifend a nisi vel, euismod luctus tortor. </AboutPageText>
					</TextWrapper>
				</AboutPageView>
				<AboutPageView>
					<TextWrapper>
						<AboutPageText>Nunc varius aliquam elit, eget lacinia risus viverra at. Phasellus placerat porta nisl, nec feugiat sapien ullamcorper ac. Donec molestie gravida velit a egestas. Ut vitae diam sit amet mi luctus hendrerit. Nulla facilisi. Nunc quis pulvinar nisi. Nullam sit amet maximus massa. </AboutPageText>
					</TextWrapper>
					<AboutImage source={foto2} style= {{transform: [{ rotate: '90deg'}] }} />
				</AboutPageView>
				<AboutPageView>
					<AboutImage source={foto2} style={{transform: [{ rotate: '180deg'}]}} />
					<TextWrapper>
						<AboutPageText>Vivamus sed imperdiet lorem, vel pulvinar lacus. Pellentesque euismod, odio a ornare varius, enim neque ornare nunc, ac tristique quam justo et nulla. Fusce lobortis mi felis. </AboutPageText>
					</TextWrapper>
					</AboutPageView>
				<AboutPageView>
					<TextWrapper>
						<AboutPageText>Sed sed diam dui. Cras eros erat, vehicula nec gravida eget, bibendum eu quam. Proin et elit nunc. Sed convallis nibh vitae felis suscipit, ut luctus nisi tincidunt. Duis finibus porttitor tellus vestibulum laoreet.</AboutPageText>
					</TextWrapper>
					<AboutImage source={foto2} style={{transform: [{ rotate: '-90deg'}]}} />
				</AboutPageView>
			</ListView>
		</SafeView>
	);
};

export default About;