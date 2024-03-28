import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.scss";
import ProductDetails from "./ProductDetail";
import OrderHistory from "./OrderHistory";
import OrderProducts from "./OrderProducts";
import PurchaseOrder from "./PurchaseOrder";
import Customer from "./Customer";
import CustomerDetail from "./CustomerDetail";
import Locker from "./Locker";
import PurchaseOrderDetail from "./PurchaseOrderDetail";
import LockerDetail from "./LockerDetail";
import MapComponent from "./MapsGoogle";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductDetails />} />
        <Route path="/purchase-orders" element={<PurchaseOrder />} />
        <Route path="/purchase-orders/:id" element={<PurchaseOrderDetail />} />
        <Route
          path="/customers/:customerId/orders"
          element={<PurchaseOrder />}
        />
        <Route
          path="/purchase-orders/products/:id"
          element={<OrderProducts />}
        />
        <Route path="/purchase-orders/history/:id" element={<OrderHistory />} />
        <Route
          path="/purchase-orders/customer/:id"
          element={<CustomerDetail />}
        />
        <Route path="/customers" element={<Customer />} />
        <Route path="/lockers" element={<Locker />} />
        <Route path="/lockers/:id" element={<LockerDetail />} />
        <Route path="/maps/:latitude/:longitude" element={<MapComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
