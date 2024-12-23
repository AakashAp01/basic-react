import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function DataTable() {
  const [currency, setCurrency] = useState("inr"); // Default currency
  const [rowData, setRowData] = useState([]); // Data for the grid
  const [loading, setLoading] = useState(false);

  const fetchData = async (selectedCurrency) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${selectedCurrency}.json`
      );
      const data = await response.json();

      // Process data into rowData format
      const processedData = Object.entries(data[selectedCurrency] || {}).map(
        ([key, value]) => ({
          name: key,
          rate: value,
        })
      );
      setRowData(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(currency); // Fetch data on currency change
  }, [currency]);

  const columnDefs = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Exchange Rate", field: "rate", sortable: true, filter: true },
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Currency Exchange Rates
      </h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          className="border rounded-lg p-2 w-64"
          placeholder="Enter currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>
      {loading ? (
        <div className="text-center text-blue-500">Loading...</div>
      ) : (
        <div
          className="ag-theme-alpine"
          style={{ height: "400px", width: "600px", margin: "0 auto" }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
          />
        </div>
      )}
    </div>
  );
}
