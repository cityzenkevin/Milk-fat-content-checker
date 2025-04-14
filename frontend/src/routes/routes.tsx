import { Routes, Route } from "react-router-dom";

import Error from "../pages/Error";

function MainRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Suspense fallback={<Skeleton />}> */}
      <Routes>

        <Route path="*" element={<Error />} />
      </Routes>
      {/* </Suspense> */}
    </div>
  );
}

export default MainRoutes;