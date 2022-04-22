// Custom components
import Header from "./components/common/Header";
import Customers from "./components/customers/Customers";
import Reservations from "./components/reservations/Reservations";
// React router DOM
import { Routes, Route,Navigate } from "react-router-dom";

import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="*" element={<Navigate to='/reservations' replace />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
