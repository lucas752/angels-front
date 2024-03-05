import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { PregnantRegister } from '../pages/PregnantRegister';
import { PregnancyFollowUp } from '../pages/PregnancyFollowUp';
import PregnantInfo from '../pages/PregnantInfo';
import PregnancyRegister from '../pages/PregnancyRegister';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pregnantRegister" element={<PregnantRegister />} />
        <Route path="/pregnancyFollowUp" element={<PregnancyFollowUp />} />
        <Route path="/pregnancyRegister" element={<PregnancyRegister />} />
        <Route path="/pregnantInfo" element={<PregnantInfo />} />
      </Routes>
    </BrowserRouter>
  );
};
