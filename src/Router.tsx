import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Teste } from "./pages/Test";
import { DeafaultLayout } from "./defaultLayout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
      </Route>
    </Routes>
  );
}
