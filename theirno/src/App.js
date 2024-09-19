import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Index from './pages/Index';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import FuelServices from './pages/services/Fuel-services';
import SnowRemover from './pages/services/Snow-remover';
import ServiceDetail from './pages/services/ServiceDetail';
import AllServices from './pages/portal/AllServices';
import AllLeads from './pages/portal/AllLeads';
import AllInvoices from './pages/portal/AllInvoices';
import AllQueries from './pages/portal/AllQueries';
import AddService from './pages/portal/AddService';
import Dashboard from './pages/portal/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services/:title' element={<ServiceDetail />} />
        <Route path='/all-services' element={<AllServices />} />
        <Route path='/all-leads' element={<AllLeads />} />
        <Route path='/all-invoices' element={<AllInvoices />} />
        <Route path='/all-queries' element={<AllQueries />} />
        <Route path='/add-service' element={<AddService />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
