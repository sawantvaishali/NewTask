import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

  const [users, setUsers] = useState([
    { id: 1, name: "Akshay", lname: "Patil", email: "akshy@gmail.com", state: "Goa", city: "Goa", pincode: 45620 },
    { id: 2, name: "Suraj", lname: "singh", email: "suraj@gmail.com", state: "Gujrat", city: "Vapi", pincode: 78514 },
    { id: 3, name: "Nikhil", lname: "Bhambid", email: "nikhil@gmail.com", state: "Mahrashtara", city: "Mumbai", pincode: 45415 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
