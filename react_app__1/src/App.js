
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from 'appRouter'
import ContextProvider from "context/ContextProvider"
const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}


export default App;
