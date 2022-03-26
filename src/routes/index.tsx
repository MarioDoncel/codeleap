import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Posts from '../Pages/Posts';
import SignIn from '../Pages/SignIn';
import { PrivateRoute } from './PrivateRoute';

export const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          // <PrivateRoute>
          <Posts />
          // </PrivateRoute>
        }
      >
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<Posts />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);
