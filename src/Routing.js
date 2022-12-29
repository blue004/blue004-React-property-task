import React from 'react';
import CreateProperty from './screen/CreateProperty/CreateProperty';
import Layout from './screen/layout/layout';
import Dashboard from './screen/Dashboard/dashboard';
import Properties from './screen/Properties/Properties';
import Propertydetails from './screen/PropertyDetail/propertydetail';
import SignIn from './screen/SignIn/signIn';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

export default function Routing() {
  return (
     <BrowserRouter>
        <Routes>
            <Route index path="/" element={<SignIn />} />
            <Route path="user" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="companies" element={<CreateProperty />}/>
            <Route path="properties" element={<Properties />}/>
            <Route path="view" element={<Propertydetails />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
