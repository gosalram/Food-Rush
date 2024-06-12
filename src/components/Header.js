import logo from "../utils/logo";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  let [logInBtn, setlogInBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {}, [logInBtn]);
  return (
    <div className="p-4 m-2 flex justify-between bg-green-200 shadow-lg ">
      <div>
        <img className="w-24" src={logo} />
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
          <li className="px-4">Cart</li>
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
