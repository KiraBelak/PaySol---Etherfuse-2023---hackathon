import React from "react";

export const DebtCard = ({ from, to, amount, paid, onPayClick }) => {
  return (
    <div className="p-4 border-2 border-gray-300 w-full my-4 bg-white text-center rounded-lg shadow-md">
        <h2 className="text-lg bg-gray-400 text-white w-full font-semibold">{from}</h2>
      <div className="flex justify-between mb-4">
      </div>
      <div className="my-2">
        <h3 className="text-base font-semibold text-black">Amount:</h3>
        <p className="text-base">{amount}</p>
      </div>
      <div className="my-2">
        <h3 className="text-base font-semibold text-black">Paid:</h3>
        <p className={`text-base ${paid? "text-green-500":"text-red-500"}`}>{paid ? "Yes" : "No"}</p>
        </div>
      {!paid && (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={onPayClick}
        >
          Pay Now
        </button>
      )}
    </div>
  );
};


