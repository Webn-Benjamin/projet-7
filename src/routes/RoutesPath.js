import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Accueil from "../pages/Accueil/Accueil";
import Housing from "../pages/Housing/Housing";
import APropos from "../pages/A-propos/APropos";
import Erreur404 from "../pages/404/404";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route element={<Navigate replace to="/accueil" />} path="/" /> */}
          <Route path="/" element={<Accueil />} />
          <Route path="/logement/:id" element={<Housing />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RoutesPath;
