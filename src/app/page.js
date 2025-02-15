"use client";
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Dictionary from "@/app/components/Dictionary"; // Use the useRoutes hook

const App = () => {
  const routes = useRoutes([
    { path: '/dictionary', element: <Dictionary /> },
    // Add more routes as needed
  ]);

  return routes;  // Return the routes based on the hook
};

export default App;
