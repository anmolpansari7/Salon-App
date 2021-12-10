import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPriceListData } from "./store/price-list-actions";
import { getDealListData } from "./store/deal-list-actions";
import AuthPage from "./components/AuthPage";
import NavBar from "./components/Layout/NavBar";
import PriceListPage from "./components/PriceListPage/PriceListPage";
import ReportPage from "./components/ReportPage/ReportPage";
import EditPage from "./components/EditPage/EditPage";
import Message from "./components/Message";
import CustomerInfoPage from "./components/CustomerInfoPage/CustomerInfoPage";
import AddCustomerOverlay from "./components/AddCustomerOverlay/AddCustomerOverlay";

function App() {
  const dispatch = useDispatch();

  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);

  const onAddCustomerButtonClick = () => {
    setShowAddCustomerForm(true);
  };

  const onCloseAddCustomerFormHandler = () => {
    setShowAddCustomerForm(false);
  };

  useEffect(() => {
    dispatch(getPriceListData());
    dispatch(getDealListData());
  }, [dispatch]);

  return (
    <div className="App font-pop h-screen w-screen flex flex-col">
      <Router>
        <NavBar onAddCustomerButtonClick={onAddCustomerButtonClick} />
        <Routes>
          <Route exact path="/" element={<AuthPage />} />
          <Route path="/price-list-page" element={<PriceListPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/message" element={<Message />} />
          <Route path="/customer-info-page" element={<CustomerInfoPage />} />
        </Routes>
      </Router>
      {showAddCustomerForm && (
        <AddCustomerOverlay onClose={onCloseAddCustomerFormHandler} />
      )}
    </div>
  );
}

export default App;
