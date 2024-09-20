import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ServiceForm({ addService }) {
    const [form, setForm] = useState({ name: '', description: '', price: '' });
    const navigate = useNavigate(); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (form.name && form.description && form.price) {
        addService(form);
        setForm({ name: '', description: '', price: '' });
        navigate("/");
      } else {
        alert("Please fill out all fields.");
      }
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
          Add Service
        </button>
        
      </form>
    );
  }
  
  export default ServiceForm;