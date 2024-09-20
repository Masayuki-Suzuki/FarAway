export type PackingItem = {
    id: number
    description: string
    quantity: number
    packed: boolean
}

export type PackingItems = PackingItem[]

export type PackingListAction = {type: 'ADD_ITEM' | 'TOGGLE_PACKED' | 'DELETE_ITEM' | 'DELETE_ALL', payload: PackingItem | null}
