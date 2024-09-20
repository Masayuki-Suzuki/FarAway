import { Dispatch, useReducer } from 'react';
import { PackingItem, PackingItems, PackingListAction } from '../types/PackingList.ts'

export const initialItems: PackingItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 1, packed: false },
];

export const packingListReducer = (state: PackingItems, action: PackingListAction ): PackingItems => {
    if (!action.payload) {
        if (action.type === 'DELETE_ALL') {
            return []
        }
        return state
    }

    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];

        case 'TOGGLE_PACKED':
            return state.map(item => {
                if(action.payload && item.id === action.payload.id) {
                    return { ...item, packed: !item.packed }
                }
                return item
            });

        case 'DELETE_ITEM': {
            return state.filter(item => action.payload && item.id !== action.payload.id)
        }

        default:
            return state
    }
}

export const packingListDispatcher = (dispatch: Dispatch<PackingListAction>) => {
    return {
        addItem: (item: PackingItem) => dispatch({ type: 'ADD_ITEM', payload: item }),
        toggleItem: (item: PackingItem) => dispatch({ type: 'TOGGLE_PACKED', payload: item }),
        deleteItem: (item: PackingItem) => dispatch({ type: 'DELETE_ITEM', payload: item }),
        clearAll: () => dispatch({ type: 'DELETE_ALL', payload: null }),
    }
}

export const usePackingList = () => {
    const [packingItems, dispatch] = useReducer(packingListReducer, initialItems);

    return {
        packingItems,
        ...packingListDispatcher(dispatch),
    }
}
