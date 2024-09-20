import React, { useState } from 'react';

const ServiceList = ({ services, onDelete, onUpdate }) => {
    const [editingService, setEditingService] = useState(null);

    const handleEdit = (service) => {
        setEditingService(service);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        onUpdate(editingService);
        setEditingService(null);
    };

    return (
        <div>
            <h2>Service List</h2>
            <ul className="list-group">
                {services.map((service) => (
                    <li key={service.id} className="list-group-item">
                        {editingService?.id === service.id ? (
                            <form onSubmit={handleUpdateSubmit}>
                                <input
                                    type="text"
                                    value={editingService.name}
                                    onChange={(e) =>
                                        setEditingService({ ...editingService, name: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    value={editingService.description}
                                    onChange={(e) =>
                                        setEditingService({ ...editingService, description: e.target.value })
                                    }
                                />
                                <input
                                    type="number"
                                    value={editingService.price}
                                    onChange={(e) =>
                                        setEditingService({ ...editingService, price: parseFloat(e.target.value) })
                                    }
                                />
                                <button type="submit" className="btn btn-success">Update</button>
                            </form>
                        ) : (
                            <div>
                                <strong>{service.name}</strong> - {service.description} (${service.price})
                                <div className="btn-group">
                                    <button className="btn btn-warning" onClick={() => handleEdit(service)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => onDelete(service.id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;
