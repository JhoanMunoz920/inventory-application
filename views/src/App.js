import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainNavbar from "./components/MainNavbar";
import Dashboard from "./components/dashboard/Dashboard";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import EditCategories from "./components/dashboard/EditCategories";
import EditProducts from "./components/dashboard/EditProducts";
import AddProductForm from "./components/dashboard/AddProductForm";
import SignUpForm from "./components/login&signup/SignUpForm";
import LoginForm from "./components/login&signup/LoginForm";
import AllUsersPermissions from "./components/dashboard/AllUsersPermissions";
import Cart from "./components/cart/Cart";
import AccountSettings from "./components/account-settings/AccountSettings";
import Addresses from "./components/account-settings/Addresses";
import OrdersHistory from "./components/orders-history/OrdersHistory";
import WishList from "./components/account-settings/WishList";
import AddAddressForm from "./components/account-settings/AddAddressForm";
import EditAddressForm from "./components/account-settings/EditAddressForm";
import EditAccountForm from "./components/account-settings/EditAccountForm";
import OrdersToShip from "./components/dashboard/OrdersToShip";
import ShippedOrders from "./components/dashboard/ShippedOrders";
import OrdersToDeliver from "./components/dashboard/OrdersToDeliver";
import DeliveredOrders from "./components/dashboard/DeliveredOrders";
import ChooseAddressToDeliver from "./components/cart/ChooseAddressToDeliver";
import ChooseOrderPayment from "./components/cart/ChooseOrderPayment";
import AllShippersList from "./components/dashboard/AllShippersList";
import AllAdminsList from "./components/dashboard/AllAdminsList";
import Page404 from "./components/404";
import { loadUser } from "./redux/actions/auth-actions/loadUser";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <div className='App'>
        <MainNavbar />
        <ToastContainer />
      </div>
      <Switch>
        <Route path='/' component={Products} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Route path='/signup' component={SignUpForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/permissions' component={AllUsersPermissions} />
        <Route path='/categories' component={Categories} />
        <Route path='/editCategories' component={EditCategories} />
        <Route path='/category/:id' component={CategoryProducts} />
        <Route path='/products' component={Products} />
        <Route path='/editProducts' component={EditProducts} />
        <Route path='/addProduct' component={AddProductForm} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={Cart} />
        <Route path='/settings' component={AccountSettings} exact />
        <Route path='/settings/edit_account' component={EditAccountForm} />
        <Route path='/my_addresses' component={Addresses} exact />
        <Route path='/my_addresses/add_address' component={AddAddressForm} />
        <Route path='/my_addresses/edit_address' component={EditAddressForm} />
        <Route path='/my_orders' component={OrdersHistory} />
        <Route path='/wish_list' component={WishList} />
        <Route path='/dashboard/seller/orders_to_ship' component={OrdersToShip} />
        <Route path='/dashboard/seller/shipped_orders' component={ShippedOrders} />
        <Route path='/dashboard/shipper/orders_to_deliver' component={OrdersToDeliver} />
        <Route path='/dashboard/shipper/delivered_orders' component={DeliveredOrders} />
        <Route path='/dashboard/admin/admins_permissions' component={AllAdminsList} />
        <Route path='/dashboard/admin/shippers_permissions' component={AllShippersList} />
        <Route path='/checkout/select_address' component={ChooseAddressToDeliver} />
        <Route path='/checkout/payment' component={ChooseOrderPayment} />
        {/* if no match just render 404 not found page */}
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
