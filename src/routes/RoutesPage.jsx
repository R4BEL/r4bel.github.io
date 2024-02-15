import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMePage from '../pages/AboutMePage';
import MyProjectsPage from '../pages/MyProjectsPage';

const RoutesPage= () => {
  return (
    <Routes>
      <Route path="/#" element={<AboutMePage/>}></Route>
      <Route path="/aboutme" element={<AboutMePage/>}></Route>
      <Route path="/myprojects" element={<MyProjectsPage/>}></Route>
    </Routes>

  );
};

export default RoutesPage;
