import React, { FC, useState } from 'react';
import { TextInput, Text, View, Button, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';

import { addNewListElem } from '../actions/ToDoListActions';
import { ISingleElList } from '../interfaces/ISingleElList';

import { SafeView, CustomView, CustomText, CustomTextInput, CustText2, FormAddTask} from '../components/GlobalStyle';
import Colors from '../constans/Colors';

type addNewListElem = ReturnType<typeof addNewListElem>;

const Form: FC<{ switchView(formView: boolean) }> = props => {

	const dispatch = useDispatch();
	const [nameInput, setNameInput] = useState<string>('');
	const [descInput, setDescInput] = useState<string>('');
	const nameValueChange = (txt: { nativeEvent: { text: React.SetStateAction<string>; }; }) => {
		setNameInput(txt.nativeEvent.text);
	};
	const descValueChange = (txt: { nativeEvent: { text: React.SetStateAction<string>; }; }) => {
		setDescInput(txt.nativeEvent.text);
	};

	const comeBack = () => {
		props.switchView(false);
	};

	const saveData = () => {
		dispatch<addNewListElem>(addNewListElem({
			name: nameInput,
			description: descInput,
			id: Date.now()
		} as ISingleElList
		));
		comeBack();
	};

	return (
		<SafeView>
			<CustomView>
				<CustomText>Add new task</CustomText>
				<CustomTextInput value={nameInput} onChange={nameValueChange} placeholder='Name' />
				<CustomTextInput value={descInput} onChange={descValueChange} placeholder='Description' />
				<FormAddTask onPress={saveData}>
					<CustText2>Dodaj</CustText2>
				</FormAddTask>
				<TouchableOpacity onPress={comeBack} style={{width: 150, height: 100, alignItems: 'center'}}>
					<Entypo name='back' size={42} color={Colors.deepskyblue}/>
				</TouchableOpacity>
			</CustomView>
		</SafeView>
	);
};

export default Form;