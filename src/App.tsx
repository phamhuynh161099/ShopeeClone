import { useState } from "react";
import UseRouteElements from "./useRouteElements";

function App() {
  const routeElements = UseRouteElements();

  return (
    <>
      <div>{routeElements}</div>
    </>
  );
}

export default App;
