import React from "react";
import logo from "../utils/logo.png";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [logInBtn, setlogInBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  //Subscribing to the store using a selector

  useEffect(() => {}, [logInBtn]);
  return (
    <div className="p-4 m-2 flex justify-between bg-customColor shadow-lg ">
      <div>
        <img className="w-[6rem]" src={logo} alt="Healthy foods logo" />
      </div>
      <div className="flex items-center">
        <ul className="m-4 px-2 flex">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart-( {cartItems.length}items)</Link>
          </li>
          <li className="px-4">{loggedInUser}</li>
          <button
            className="login-btn"
            onClick={() => {
              logInBtn === "Login"
                ? setlogInBtn("Logout")
                : setlogInBtn("Login");
            }}
          >
            {logInBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
