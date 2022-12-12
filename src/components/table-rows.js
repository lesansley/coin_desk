import React from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";

const TableRows = ({ rows }) => {
  const tableRow = [];
  for (const row in rows) {
    tableRow.push(
      <React.Fragment key={row}>
        <thead>
          <TableHeader dataRow={rows[row]} />
        </thead>
        <tbody>
          <TableBody dataRow={rows[row]} />
        </tbody>
      </React.Fragment>
    );
  }
  return tableRow;
};

export default TableRows;
