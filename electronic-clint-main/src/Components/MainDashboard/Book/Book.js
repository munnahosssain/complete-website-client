import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import PaymentProcess from "../PaymentProcess/PaymentProcess";
import Sidebar from "../Sidebar/Sidebar";

const Book = () => {
  const [serviceDetail, setServiceDetail] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { email } = loggedInUser;
  const [bookServices, setBookServices] = useState([]);
  useEffect(() => {
    fetch(`https://secure-chamber-85441.herokuapp.com/bookingService/${email}`)
      .then((res) => res.json())
      .then((data) => setBookServices(data))
      .catch((err) => {
        console.log(err);
      });
    console.log("running hook");
  }, [email]);

  useEffect(() => {
    const bookServiceId = bookServices.map((pd) => pd.serviceId);
    fetch("https://secure-chamber-85441.herokuapp.com/serviceById", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookServiceId),
    })
      .then((res) => res.json())
      .then((data) => {
        setServiceDetail(data)
        console.log(data);
      });
  }, [bookServices]);

  const history = useHistory();
  const handlePayBooking = () => {
    console.log({ serviceDetail });
    history.push("/home");
    const { displayName, email } = loggedInUser;
    const bookDetails = {
      name: displayName,
      email,
      serviceDetail,
      createDate: new Date(),
    };
    fetch("https://secure-chamber-85441.herokuapp.com/payBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <section >
      <div className="container-fluid row">
        <Sidebar></Sidebar>
        <div
          className="col-md-8 p-4 pr-5"
          style={{ position: "absolute", left: 320, backgroundColor: "#b3ffb3" }}
        >
          <h5 className="text-brand">Book</h5>
          <Container className="mt-5">
            <Table className="table table-borderless bg-secondary text-white rounded">
              <thead>
                <tr>
                  <th className="text-center">Your name </th>
                  <th className="text-center">Email </th>
                  <th className="text-center">Service name</th>
                  <th className="text-center">Service price</th>
                </tr>
              </thead>
              <tbody>
                {bookServices.map((pd) => {
                  const { serviceName, price, email, name } = pd;
                  return (
                    <tr>
                      <td className="text-center">{name}</td>
                      <td className="text-center">{email}</td>
                      <td className="text-center">{serviceName}</td>
                      <td className="text-center">${price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
          <h4>Pay Your Bill :</h4>
          <PaymentProcess handlePayment={handlePayBooking} />
        </div>
      </div>
    </section>
  );
};

export default Book;
