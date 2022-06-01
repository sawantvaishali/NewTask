import React, { useContext, useState } from "react";
import "./Home.css";
import { Button, Table, Form,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Home = () => {
  const [users, setUser] = useContext(UserContext);
  const [data, setData] = useState(users);
 
  return (
    <div>
      <div className="content-head-main">
      <h1 className="content-main-heading">Employee Details</h1>
  
      <Link to="/create">
        <Button id="addr" className="create__btn" variant="">
          + Add Record
        </Button>
      </Link>
      </div>
      
      <Table striped bordered>
        <thead className="table_hed">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>State</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.state}</td>
              <td>{user.city}</td>
              <td>{user.pincode}</td>
              <td>

                <Link to={"/edit/" + user.id}>
                  <Button className="action__btn" variant="info">
                    Update


                  </Button>
                </Link>
                <Link to={"/delete/" + user.id}>
                  <Button className="action__btn" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
