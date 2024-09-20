import React, { useContext, useState } from 'react'
import { PackingListContext } from '../contexts/PackingLists'

const AddItemForm = () => {
    const { packingItems, addItem} = useContext(PackingListContext)
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        e.stopPropagation()

        const newItem = {
            id: packingItems.length + 1,
            description,
            quantity,
            packed: false,
        }

        addItem(newItem)
        setDescription('')
        setQuantity(1)
    }

    //Ry#MqQj4#hIAk&

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(Number(e.target.value))
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={onSelectChange}>
                {[...Array(20).keys()].map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                ))}
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={onInputChange} required/>
            <button>Add</button>
        </form>
    )
}

export default AddItemForm
