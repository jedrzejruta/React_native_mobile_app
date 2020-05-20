import React, { FC, useState } from 'react';
import { TextInput, Text, View, Button, TouchableOpacity} from 'react-native';

import { useDispatch } from 'react-redux';

import { addNewListElem } from '../actions/ToDoListActions';
import { ISingleElList } from '../interfaces/ISingleElList';

import * as Global from '../components/GlobalStyle';

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

	const saveData = () => {
		dispatch<addNewListElem>(addNewListElem({
			name: nameInput,
			description: descInput,
			id: Date.now()
		} as ISingleElList
		));
		props.switchView(false);
	};

	return (
		<Global.CustomView>
			<Global.CustomTextInput value={nameInput} onChange={nameValueChange} placeholder='Name' />
			<Global.CustomTextInput value={descInput} onChange={descValueChange} placeholder='Description' />
			<TouchableOpacity style={{	borderWidth: 1, marginTop: 2, padding: 10, width: 100}} onPress={saveData}>
				<Global.CustText2>Dodaj</Global.CustText2>
			</TouchableOpacity>
		</Global.CustomView>
	);
};

export default Form;