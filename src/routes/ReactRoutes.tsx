import { Route, Routes } from "react-router-dom";
import { routes } from "./path";
import { Suspense } from "react";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <route.element />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export { ReactRoutes };
