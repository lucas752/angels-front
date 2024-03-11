import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { PregnantRegister } from '../pages/PregnantRegister';
import { PregnancyFollowUp } from '../pages/PregnancyFollowUp';
import PregnantInfo from '../pages/PregnantInfo';
import { Dashboard } from '../pages/DashBoard/Index';
import PregnancyRegister from '../pages/PregnancyRegister';
import Pregnancies from '../pages/Pregnancies';
import PregnancyInfo from '../pages/PregnancyInfo';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pregnantRegister/:id?" element={<PregnantRegister />} />
        <Route path="/pregnancyFollowUp" element={<PregnancyFollowUp />} />
        <Route path="/pregnancyRegister" element={<PregnancyRegister />} />
        <Route path="/pregnantInfo" element={<PregnantInfo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pregnancies/:id" element={<Pregnancies />} />
        <Route path="/pregnancyInfo" element={<PregnancyInfo />} />
      </Routes>
    </BrowserRouter>
  );
};
