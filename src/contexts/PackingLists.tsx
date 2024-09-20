import { createContext } from 'react'
import { PackingItem, PackingItems } from '../types/PackingList.ts'
import { usePackingList } from './PackingListReducer.ts'

export type PackingListContext = {
    packingItems: PackingItems
    addItem: (item: PackingItem) => void
    toggleItem: (item: PackingItem) => void
    deleteItem: (item: PackingItem) => void
    clearAll: () => void
}

const defaultValue: PackingListContext = {
    packingItems: [],
    addItem: (item: PackingItem) => item,
    toggleItem: (item: PackingItem) => item,
    deleteItem: (item: PackingItem) => item,
    clearAll: () => {}
}

export const PackingListContext = createContext(defaultValue)

type PackingListProviderProps = {
    children: JSX.Element
}

const PackingListProvider = ({ children }: PackingListProviderProps) => {
    return (
        <PackingListContext.Provider value={{...usePackingList()}}>
            {children}
        </PackingListContext.Provider>
    )
}

export default PackingListProvider
