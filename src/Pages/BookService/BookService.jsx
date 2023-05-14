import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
  const servicesData = useLoaderData();
  const { title, _id, price, img } = servicesData;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const order = {
      customerName: name,
      email,
      date,
      service: title,
      service_id: _id,
      price: price,
      img,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book successfully");
        }
      });
  };

  console.log(price);
  return (
    <div>
      <h2 className="text-center text-3xl">Book Service: {title} </h2>
      <form onSubmit={handleBookService}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-2">
            <label className="block mb-1 font-bold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user?.displayName}
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label className="block mb-1 font-bold">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label className="block mb-1 font-bold">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              id="email"
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label className="block mb-1 font-bold">Due Amount</label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>

          <input
            type="submit"
            value="Order Confirm"
            className="text-center border border-gray-400 p-2 cursor-pointer"
            name=""
            id=""
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default BookService;
