import React, { useState, useEffect } from "react";
import Loader from "../Loader";


export default function Table() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.inr);
        setLoading(false);
      } catch (error) {
        setError(error.message); 
        setLoading(false);
      }
    }

    fetchData(); 
  }, []);

  if (loading) {
    return <Loader/>; 
  }

  if (error) {
    console.log('Tabel Error :',error)
    return <div>Error: {error}</div>; 
  }

  return (
    <div className="overflow-x-auto p-10 h-screen bg-green-300">
      <table className="min-w-full border bg-white border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4 text-left">S.No</th>
            <th className="py-3 px-4 text-left">Currency</th>
            <th className="py-3 px-4 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([currency, value], index) => (
            <tr key={currency} className="hover:bg-green-100">
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">{currency.toUpperCase()}</td>
              <td className="py-3 px-4">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
