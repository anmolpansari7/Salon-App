import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { getPriceListData } from "./store/price-list-actions";
import { getDealListData } from "./store/deal-list-actions";
import { getPointsCalculatorData } from "./store/points-calculator-actions";
import AuthPage from "./components/AuthPage";
import NavBar from "./components/Layout/NavBar";
import PriceListPage from "./components/PriceListPage/PriceListPage";
import ReportPage from "./components/ReportPage/ReportPage";
import EditPage from "./components/EditPage/EditPage";
import Message from "./components/Message";
import CustomerInfoPage from "./components/CustomerInfoPage/CustomerInfoPage";
import AddCustomerOverlay from "./components/AddCustomerOverlay/AddCustomerOverlay";
import PasswordChangeOverlay from "./components/PasswordChangeOverlay/PasswordChangeOverlay";
import PasswordChangeButton from "./components/Layout/PasswordChangeButton";
import LogoutButton from "./components/Layout/LogoutButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authentication.isAuth);

  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  const onAddCustomerButtonClick = () => {
    setShowAddCustomerForm(true);
  };

  const onCloseAddCustomerFormHandler = () => {
    setShowAddCustomerForm(false);
  };

  const onShowPasswordChangeFormHandler = () => {
    setShowChangePasswordForm(true);
  };

  const onClosePasswordChangeFormHandler = () => {
    setShowChangePasswordForm(false);
  };

  useEffect(() => {
    dispatch(getPriceListData());
    dispatch(getDealListData());
    dispatch(getPointsCalculatorData());
  }, [dispatch]);

  return (
    <div className="App font-pop h-screen w-screen flex flex-col">
      <Router>
        {isAuth && (
          <>
            <NavBar onAddCustomerButtonClick={onAddCustomerButtonClick} />
            <LogoutButton />
            <PasswordChangeButton onShow={onShowPasswordChangeFormHandler} />
          </>
        )}
        <Routes>
          {isAuth ? (
            <Route
              path="/"
              element={<Navigate replace to="/price-list-page" />}
            />
          ) : (
            <Route exact path="/" element={<AuthPage />} />
          )}
          <Route
            path="/price-list-page"
            element={
              <ProtectedRoute>
                <PriceListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute>
                <ReportPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit"
            element={
              <ProtectedRoute>
                <EditPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/message"
            element={
              <ProtectedRoute>
                <Message />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customer/:id"
            element={
              <ProtectedRoute>
                <CustomerInfoPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        {showAddCustomerForm && (
          <AddCustomerOverlay onClose={onCloseAddCustomerFormHandler} />
        )}
        {showChangePasswordForm && (
          <PasswordChangeOverlay onClose={onClosePasswordChangeFormHandler} />
        )}
      </Router>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
