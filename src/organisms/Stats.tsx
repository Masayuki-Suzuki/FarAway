import { useContext } from 'react'
import { PackingListContext } from '../contexts/PackingLists'

const Stats = () => {
    const { packingItems } = useContext(PackingListContext)
    const itemsCount = packingItems.length
    const packedItemsCount = packingItems.filter(item => item.packed).length
    let percentage = Math.round(packedItemsCount / itemsCount * 10000) / 100

    if (isNaN(percentage)) {
        percentage = 0
    }

    return (
        <>
            { itemsCount ? (
                <em>💼 You have {itemsCount} items on your list, and you already packed {packedItemsCount} ({percentage}%)</em>
            ) : (
                <p>Start adding some items to your paking list 🚀</p>
            )}
        </>
    )
}

export default Stats
