import * as actionTypes from '../actions/types/ToDoListTypes';
import  { ISingleElList } from '../interfaces/ISingleElList';

export interface IToDoListReducer {
	ToDoList: ISingleElList[];
}

const defaultState = (): IToDoListReducer => ({
	ToDoList: [
	{
		name: 'Pierwszy',
		description: 'Pierwszy description',
		id: 1
	},
	{
		name: 'Drugi',
		description: 'Drugi description',
		id: 2
	},
	{
		name: 'Trzeci',
		description: 'Trzeci description',
		id: 3
	}
]
});

// add action to delete element
export default (state = defaultState(), action: any): IToDoListReducer => {
	switch (action.type) {
		case actionTypes.SET_NEW_ELEM: {
			return {
				...state,
				ToDoList: [...state.ToDoList, action.newElem]
			};
		}
		case actionTypes.DEL_ELEM: {
			return {
				...state,
				ToDoList: state.ToDoList.filter(el => el.id !== action.id)
			};
		}
		default: {
			return state;
		}
	}
};