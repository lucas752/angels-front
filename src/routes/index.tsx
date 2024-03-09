import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { PregnantRegister } from '../pages/PregnantRegister';
import { PregnancyRegister } from '../pages/PregnancyRegister';
import PregnantInfo from '../pages/PregnantInfo';
import { Dashboard } from '../pages/DashBoard/Index';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pregnantRegister" element={<PregnantRegister />} />
        <Route path="/pregnancyRegister" element={<PregnancyRegister />} />
        <Route path="/pregnantInfo" element={<PregnantInfo />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
