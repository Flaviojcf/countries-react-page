import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { DeafaultLayout } from "./defaultLayout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
