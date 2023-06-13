import React, { useState } from "react";
import { AuthRoutes } from "./routes";
import MainRoutes from "./routes/MainRoutes";

// function App() {
//   const authContext = useAuthContext();

//   return (
//     <div className="App">
//       {authContext.isAuthenticated ? <MainLayout /> : <AuthLayout />}
//     </div>
//   );
// }

// export default App;

function App() {
  // const authContext = useAuthContext();

  const [authContext, setAuthContext] = useState<boolean>(false);

  return (
    <div className="App  bg-[#F8F8F8]">
      {/* {authContext ? <MainRoutes /> : <AuthRoutes />} */}
      {/* <MainRoutes /> */}
      <AuthRoutes />
    </div>
  );
}

export default App;
