import React from "react";

const BookingsRow = ({ booking, handleDelete }) => {
  const { _id, email, img, price, service } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="border border-gray-500 rounded-full w-5 h-5 flex justify-center items-center"
        >
          x
        </button>
      </th>
      <td>
        <div className="flex items-center  text-center space-x-3">
          <img src={img} alt="img" className="w-40" />
          <div>
            <div className="font-bold text-center">{service}</div>
          </div>
        </div>
      </td>
      <td className="text-center">{email}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs shadow-xl p-2">Confirm</button>
      </th>
    </tr>
  );
};

export default BookingsRow;
