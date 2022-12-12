const TableBody = ({ dataRow }) => {
  const body = [];
  dataRow.map((col, index) => {
    return body.push(<td key={index}>{col.body}</td>);
  });

  return <tr>{body}</tr>;
};

export default TableBody;
