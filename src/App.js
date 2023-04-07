import { Route, Routes } from "react-router-dom";
import Contracts from "./pages/Dashboard/components/Contracts/Contracts";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="contracts" element={<Contracts />} />
      </Route>
    </Routes>
  );
}
