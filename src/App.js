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
import React, { useEffect, useState } from "react";
import Login from "./views/Authontication/Login";
import RequireAuth from "./views/Authontication/RequireAuth";
import LoadingScreen from "./components/Shared/LoadingScreen";
import InvoicePage from "./components/Invoice/InvoicePage";
import ProductEditPage from "./views/product/ProductEditPage";
import ProductBywarehouse from "./views/Stock/ProductBywarehouse";
import PurchesEdit from "./views/product/PurchesEdit";
import Setting from "./views/Setting";
import Modal from "./components/Indexpage/Modal";
import EmployeeDetails from "./views/Employee/EmployeeDetails";
import { useQuery } from "react-query";
import LoadingScreen2 from "./components/Shared/LoadingScreen2";
export const Products = React.createContext();

function App() {
  const [copyright, setCopyright] = useState('Server connecting....')
  const [IsServerLive, setIsServerLive] = useState(false);
  const [productList, setProductList] = useState([])
  const [dashboardSideBarSize, setDashboardSideBarSize] = useState(true)

  const { data, isLoading, refetch } = useQuery('company', () =>
    fetch(`https://alientbd-version-2.onrender.com/`)
      .then(res => {
        if (res.status === 200) {
          setIsServerLive(true)
        }
        return res.json()
      })
      .then(data => {
        if (data?.success) {
          setCopyright(data.data)
        }
      })
  );

  if (IsServerLive) {
    for (let i = 0; i < 10; i++) {
      refetch()
    }
  }

  

  if (isLoading) {
    return <LoadingScreen2 />
  }

  return (
    <div>
      <Products.Provider value={{ dashboardSideBarSize,copyright, setDashboardSideBarSize }}>
        <div >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/invoice/:id" element={<RequireAuth><InvoicePage /></RequireAuth>} />
            <Route path="/" element={<DashboardLayout />}>

              <Route path="/" element={<RequireAuth><IndexPage /></RequireAuth>} />
              <Route path="add-product" element={<RequireAuth><AddProduct /></RequireAuth>} />
              <Route path="product-list" element={<RequireAuth><ProductList /></RequireAuth>} />
              <Route path="product-edit/:id" element={<RequireAuth><ProductEditPage /></RequireAuth>} />
              <Route path="purches-product-edit/:id" element={<RequireAuth><PurchesEdit /></RequireAuth>} />
              <Route path="warehouse/:warehouseLocation" element={<RequireAuth><ProductBywarehouse /></RequireAuth>} />
              <Route path="product-purches" element={<RequireAuth><Purchase /> </RequireAuth>} />
              <Route path="place-order" element={<RequireAuth><PlaceOrder /></RequireAuth>} />
              <Route path="oder-list" element={<RequireAuth><OrderList /></RequireAuth>} />
              <Route path="inventory" element={<RequireAuth><Inventory /></RequireAuth>} />
              <Route path="stock-report" element={<RequireAuth><StackReport /></RequireAuth>} />
              <Route path="warehouse-report" element={<RequireAuth><WarehouseReport /></RequireAuth>} />
              <Route path="add-employee" element={<RequireAuth><AddEmployee /></RequireAuth>} />
              <Route path="employee/:id" element={<RequireAuth><EmployeeDetails /></RequireAuth>} />
              <Route path="employee-list" element={<RequireAuth><EmployeeList /></RequireAuth>} />
              <Route path="setting" element={<RequireAuth><Setting /></RequireAuth>} />
              <Route path="*" element={<ErrorPage />} />

            </Route>
          </Routes>
          <ToastContainer />
        </div>
      </Products.Provider>
      <Modal />
    </div>
  );
}

export default App;
