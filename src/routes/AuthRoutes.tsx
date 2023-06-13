import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../app/views/auth/Login";
import Dashboard from "../app/views/main/Dashboard";

export const AuthRoutes = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
