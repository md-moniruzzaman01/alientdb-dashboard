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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import React, { useState } from "react";
import Login from "./views/Authontication/Login";
import RequireAuth from "./views/Authontication/RequireAuth";
import LoadingScreen from "./components/Shared/LoadingScreen";
import InvoicePage from "./components/Invoice/InvoicePage";
export const Products = React.createContext();

function App() {

  const [productList, setProductList] = useState([])
  const [user, setUser] = useState([])
  return (
    <div>
      <Products.Provider value={{ user, setUser }}>

        <div >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/invoice/:id" element={<RequireAuth><InvoicePage/></RequireAuth>}/>
            <Route path="/" element={<DashboardLayout />}>
              
                  <Route path="/" element={<RequireAuth><IndexPage /> </RequireAuth>} />
                  <Route path="add-product" element={<RequireAuth><AddProduct /></RequireAuth>} />
                  <Route path="product-list" element={<RequireAuth><ProductList /></RequireAuth>} />
                  <Route path="product-purches" element={<RequireAuth><Purchase/> </RequireAuth>} />
                  <Route path="place-order" element={<RequireAuth><PlaceOrder /></RequireAuth>} />
                  <Route path="oder-list" element={<RequireAuth><OrderList /></RequireAuth>} />
                  <Route path="inventory" element={<RequireAuth><Inventory /></RequireAuth>} />
                  <Route path="stock-report" element={<RequireAuth><StackReport /></RequireAuth>} />
                  <Route path="warehouse-report" element={<RequireAuth><WarehouseReport /></RequireAuth>} />
                  <Route path="add-employee" element={<RequireAuth><AddEmployee /></RequireAuth>} />
                  <Route path="employee-list" element={<RequireAuth><EmployeeList /></RequireAuth>} />
                  <Route path="*" element={<ErrorPage />} />
              
            </Route>
          </Routes>
          <ToastContainer />
        </div>
      </Products.Provider>
    </div>
  );
}

export default App;
