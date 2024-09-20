import { useContext } from 'react'
import { PackingItem } from '../types/PackingList'
import { PackingListContext } from '../contexts/PackingLists'

type PackItemsProps = {
    item: PackingItem
}

const PackItems = ({ item }: PackItemsProps) => {
    const { toggleItem, deleteItem } = useContext(PackingListContext)

    return (
        <li>
            <div>
                <input type="checkbox" checked={item.packed} onChange={() => toggleItem(item)} />
                <span onClick={() => toggleItem(item)} style={item.packed ? { textDecoration: 'line-through' } : {}}>
                    {item.quantity} {item.description}
                </span>
            </div>
            <button onClick={() => deleteItem(item)}>❌</button>
        </li>
    )
}

export default PackItems
