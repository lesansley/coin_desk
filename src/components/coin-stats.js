import React from "react";
import { Container, Table } from "reactstrap";

function CoinStats({ data }) {
  const TableHeader = ({ dataRow }) => {
    const head = [];
    dataRow.map((col, index) => {
      return head.push(<th key={index}>{col.head}</th>);
    });

    return <tr>{head}</tr>;
  };

  const TableBody = ({ dataRow }) => {
    const body = [];
    dataRow.map((col, index) => {
      body.push(<td key={index}>{col.body}</td>);
      return <>{body}</>;
    });

    return <tr>{body}</tr>;
  };

  const TableRows = ({ rows }) => {
    const tableRow = [];
    for (const row in rows) {
      tableRow.push(
        <>
          <thead>
            <TableHeader dataRow={rows[row]} />
          </thead>
          <tbody>
            <TableBody dataRow={rows[row]} />
          </tbody>
        </>
      );
    }
    return tableRow;
  };

  return (
    <Container>
      <Table>
        <TableRows rows={data} />
      </Table>
    </Container>
  );
}

export default CoinStats;
