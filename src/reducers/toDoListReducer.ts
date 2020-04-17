import * as actionTypes from '../actions/types/ToDoListTypes';
import  { ISingleElList } from '../interfaces/ISingleElList';

export interface IToDoListReducer {
    ToDoList: ISingleElList[];
}

const defaultState = (): IToDoListReducer => ({
    ToDoList: [{
		name: 'Pierwszy',
		description: 'Pierwszy description'
	},
	{
		name: 'Drugi',
		description: 'Drugi description'
	}]
});

export default (state = defaultState(), action: any): IToDoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                ToDoList: [...state.ToDoList, action.newElem]
            };
        }
        default: {
            return state;
        }
    }
};