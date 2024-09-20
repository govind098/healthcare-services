import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';
import './App.css';

const App = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'General Consultation', description: 'Basic health checkup', price: 100 },
    { id: 2, name: 'Dental Cleaning', description: 'Teeth cleaning and oral hygiene', price: 50 },
  ]);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) => (service.id === updatedService.id ? updatedService : service))
    );
  };

  return (
    <div className="container">
      <h1>Healthcare Services Manager</h1>
      <AddServiceForm onAdd={addService} />
      <ServiceList services={services} onDelete={deleteService} onUpdate={updateService} />
    </div>
  );
};

export default App;
