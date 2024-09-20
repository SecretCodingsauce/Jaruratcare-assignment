import { Link } from 'react-router-dom';

function ServiceList({ services }) {
  return (
    <div className="space-y-4 ">
      {services.map((service, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">{service.name}</h3>
          <p className="text-gray-600">{service.description}</p>
          <p className="text-green-600">Rupees {service.price}</p>
          <div className="mt-4">
            <Link
              to={`/edit-service/${service.name}`}
              state={{ service }}
              className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
            >
              Edit
            </Link>
          </div>

        </div>
      ))}
      <div>
      <Link className='bg-green-500 text-white p-3 rounded hover:bg-green-600' to="add-service">Add New service</Link>
      </div>
    </div>
  );
}

export default ServiceList;