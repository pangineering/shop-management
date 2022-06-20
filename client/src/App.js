import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import HomeScreen from "./Screens/HomeScreen"
import ProductScreen from "./Screens/ProductScreen"
import WarehouseScreen from "./Screens/WarehouseScreen"
import ShopScreen from "./Screens/ShopScreen"
import FinanceScreen from "./Screens/FinanceScreen"
import SettingScreen from "./Screens/SettingScreen"

import Header from "./Components/Header"

function App() {
  return (
    <>
      <Router>
        <Header />
        <>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/shops" element={<ShopScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/warehouse" element={<WarehouseScreen />} />
            <Route path="/finance" element={<FinanceScreen />} />
            <Route path="/setting" element={<SettingScreen />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
