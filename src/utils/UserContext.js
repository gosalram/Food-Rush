import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "defaultValue",
});

export default UserContext;
