import { useState } from "react";
import UseRouteElements from "./useRouteElements";
import { ToastContainer } from "react-toastify";

function App() {
  const routeElements = UseRouteElements();

  return (
    <>
      <div>{routeElements}</div>
      <ToastContainer />
    </>
  );
}

export default App;
