import PackingListItem from '../molecules/PackingItem'
import { ChangeEvent, useContext, useState } from 'react'
import { PackingListContext } from '../contexts/PackingLists'
import Actions from '../molecules/Actions.tsx'

const PackingList = () => {
    const { packingItems, clearAll } = useContext(PackingListContext)
    const [sortBy, setSortBy] = useState('input')

    let sortedItems = [...packingItems]

    if (packingItems.length) {
        if (sortBy === 'input') {
            sortedItems = packingItems
        }

        if (sortBy === 'description') {
            sortedItems = sortedItems.slice().sort((a, b) => a.description.localeCompare(b.description))
        }

        if (sortBy === 'packed') {
            sortedItems = sortedItems.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
        }
    }

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value)
    }

    const handleDeleteAll = () => {
        if (window.confirm('Are you sure you want to delete all items?')) {
            clearAll()
        }
    }

    return (
        <div className="list">
            {packingItems.length ? (
                <>
                    <ul>
                        {sortedItems.map(item => <PackingListItem key={item.id} item={item}/>)}
                    </ul>
                    <Actions sortBy={sortBy} handleSortChange={handleSortChange} handleDeleteAll={handleDeleteAll} />
                </>
            ) : (
                <p>No items listed...</p>
            )}
        </div>
    )
}

export default PackingList
