import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function EditService({ services, setServices }) {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceToEdit = location.state?.service || { name: '', description: '', price: '' };
  const [form, setForm] = useState(serviceToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedServices = services.map(service =>
      service.name === serviceToEdit.name ? form : service
    );
    setServices(updatedServices);
    navigate('/'); 
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        className="border p-2 rounded w-full"
        type="text"
        placeholder="Service Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        className="border p-2 rounded w-full"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        className="border p-2 rounded w-full"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        Save Changes
      </button>
    </form>
  );
}


