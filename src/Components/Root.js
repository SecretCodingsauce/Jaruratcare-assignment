import { Outlet } from "react-router-dom"
export default function Root(){
   
    return(
        <div>
            <h1 className="text-3xl font-bold mb-6">HealthCare Services</h1>
            <Outlet />
         
          </div>
)}