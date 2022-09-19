import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/Shared/DashboardLayout";
import ProductManage from "./views/ProductManage";
import IndexPage from "./views/Indexpage";




function App() {
  return (
    <div >
      <Routes>
      <Route path="/" element={<DashboardLayout />}>
        
        <Route path="/" element={<IndexPage />} />
        <Route path="dashboard" element={<ProductManage />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
