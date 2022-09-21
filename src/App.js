import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/Shared/DashboardLayout";
import IndexPage from "./views/Indexpage";
import AddProduct from "./views/product/AddProduct";
import ProductList from "./views/product/ProductList";
import Purchase from "./views/product/Purchase";
import PlaceOrder from "./views/order/PlaceOrder";
import OrderList from "./views/order/OrderList";
import Inventory from "./views/Stock/Inventory";
import StackReport from "./views/Stock/StackReport";
import WarehouseReport from "./views/Warehouse/WarehouseReport";
import AddEmployee from "./views/Employee/AddEmployee";
import EmployeeList from "./views/Employee/EmployeeList";
import ErrorPage from "./views/ErrorPage";



function App() {
  return (
    <div >
      <Routes>
      <Route path="/" element={<DashboardLayout />}>
        
        <Route path="/" element={<IndexPage />} />
        <Route path="add-product" element={<AddProduct/>} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="product-purches" element={<Purchase />} />
        <Route path="place-order" element={<PlaceOrder />} />
        <Route path="oder-list" element={<OrderList />} />
        <Route path="inventory" element={<Inventory/>} />
        <Route path="stock-report" element={<StackReport />} />
        <Route path="warehouse-report" element={<WarehouseReport />} />
        <Route path="add-employee" element={<AddEmployee />} />
        <Route path="employee-list" element={<EmployeeList />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
