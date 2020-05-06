import * as actionTypes from './types/ToDoListTypes';
import { ISingleElList } from '../interfaces/ISingleElList';

export const addNewListElem = (newElem: ISingleElList) => ({
	type: actionTypes.SET_NEW_ELEM,
	newElem
})

export const removeListElem = (id: number) => ({
	type: actionTypes.DEL_ELEM,
	id
})