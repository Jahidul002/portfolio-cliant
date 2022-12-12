import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { Goro } from './Router/Router';

const App = () => {
  return (
    <div>
      <RouterProvider router={Goro}></RouterProvider>

      <Toaster />
    </div>
  );
};

export default App;