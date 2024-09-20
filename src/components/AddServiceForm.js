import React, { useState } from 'react';

const AddServiceForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description || !price) {
            alert('Please fill out all fields');
            return;
        }

        const newService = { id: Date.now(), name, description, price: parseFloat(price) };
        onAdd(newService);
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-service-form">
            <h2>Add New Service</h2>
            <input
                type="text"
                placeholder="Service Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Add Service</button>
        </form>
    );
};

export default AddServiceForm;
