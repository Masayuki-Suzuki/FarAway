import React from 'react'

export type ActionsPropsType = {
    sortBy: string,
    handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleDeleteAll: () => void,
}

const Actions = ({ sortBy, handleSortChange, handleDeleteAll }: ActionsPropsType) => (
    <div className="actions">
        <select value={sortBy} onChange={handleSortChange}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleDeleteAll}>clear list</button>
    </div>
)

export default Actions
