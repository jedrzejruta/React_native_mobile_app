import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useScrollToTop } from '@react-navigation/native';

import Colors from '../constans/Colors';
import { MaterialIcons } from '@expo/vector-icons';

import { IState } from '../reducers/index';
import { IToDoListReducer  } from '../reducers/toDoListReducer';

import { ISingleElList } from '../interfaces/ISingleElList';

import { SafeView, FlatView, SingleElListView, ListTextEl, AddTaskButton, AddButtonImg} from '../components/GlobalStyle';
import { removeListElem } from '../actions/ToDoListActions';

import button from '../assets/button.png';

type removeListElem = ReturnType<typeof removeListElem>;

const TextViewWrap = styled.View`
	flex: 3;
`;

const TextWrapper = styled.View`
	padding: 20px;
	borderRadius: 5px;
	backgroundColor: ${Colors.notsodarkblue};
`;

const Touch = styled.TouchableOpacity`
	borderRadius: 5px;
	backgroundColor: ${Colors.lightskyblue};
	flex: 1;
	justifyContent: center;
	alignItems: center;
`;

const ToDoList: FC<{switchView(formView: boolean)}> = props => {

	const ToDoListState = useSelector<IState , IToDoListReducer>(state => state.ToDoList);

	const goToForm = () => {
		props.switchView(true);
	};

	const dispatch = useDispatch();

	const removeData = (id: number) => {
		dispatch<removeListElem>(removeListElem(id));
	};

	const ref = React.useRef(undefined);
	useScrollToTop(ref);

	return (
		<SafeView>
			<FlatView
			ref={ref}
			keyExtractor = {(item: ISingleElList, index: number) => index.toString()}
			data={ToDoListState.ToDoList}
			renderItem={ ( {item}: {item: ISingleElList} ) =>
				<SingleElListView>
					<TextViewWrap>
						<TextWrapper style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
							<ListTextEl>{item.name}</ListTextEl>
						</TextWrapper>
						<TextWrapper>
							<ListTextEl>{item.description}</ListTextEl>
						</TextWrapper>
					</TextViewWrap>
					<Touch onLongPress={() => removeData(item.id)}>
						<MaterialIcons name='delete' size={36} color={Colors.darkblue}/>
					</Touch>
				</SingleElListView>
			}
			/>
				<AddTaskButton style={{position: 'absolute', top: 400, right: 30}} onPress={goToForm}>
					<AddButtonImg source={button}/>
				</AddTaskButton>
		</SafeView>
	);
};

export default ToDoList;