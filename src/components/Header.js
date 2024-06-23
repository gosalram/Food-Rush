import React from "react";
import logo from "../images/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  let [logInBtn, setlogInBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  //Subscribing to the store using a selector

  useEffect(() => {}, [logInBtn]);
  return (
    <div className="flex justify-between items-stretch bg-white shadow-lg p-4 font-bold">
      <div>
        <img className="w-24" src={logo} alt="Food Rush logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-2">
          <li className="hover:bg-amber-500 rounded-lg px-4 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-amber-500 rounded-lg px-4 py-2 transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-amber-500 rounded-lg px-4 py-2 transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-bold text-lg px-4 py-2">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="bg-amber-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
              onClick={() => {
                logInBtn === "Login"
                  ? setlogInBtn("Logout")
                  : setlogInBtn("Login");
              }}
              aria-label={logInBtn}
            >
              {logInBtn}
            </button>
          </li>
          <li className="px-4 py-2">{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
