import React, { useState } from 'react';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import ServiceList from './Components/ServiceList';
import ServiceForm from './Components/ServiceForm';

import Root from './Components/Root';
import EditService from './Components/EditService';

function App() {
  const [services, setServices] = useState([]);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

const router= createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Root />}>
      <Route path='/' element={<ServiceList services={services}/>}/>
      <Route path='add-service' element={<ServiceForm addService={addService}/>}/>
      <Route path='edit-service/:name' element={<EditService services={services} setServices={setServices}/>}/>
   </Route>

  )
)


  return (
    <div className='className="p-10 max-w-lg mx-auto'>
    <RouterProvider router={router}  />
</div>

  );
}

export default App;