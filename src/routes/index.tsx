import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { PregnantRegister } from '../pages/PregnantRegister';
import { PregnancyFollowUp } from '../pages/PregnancyFollowUp';
import PregnantInfo from '../pages/PregnantInfo';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pregnantRegister" element={<PregnantRegister />} />
        <Route path="/pregnancyRegister" element={<PregnancyFollowUp />} />
        <Route path="/pregnantInfo" element={<PregnantInfo />} />
      </Routes>
    </BrowserRouter>
  );
};
