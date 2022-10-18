import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { DeafaultLayout } from "./defaultLayout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
      </Route>
    </Routes>
  );
}
