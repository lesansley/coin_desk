const TableHeader = ({ dataRow }) => {
  const head = [];
  dataRow.map((col, index) => {
    return head.push(<th key={index}>{col.head}</th>);
  });

  return <tr>{head}</tr>;
};

export default TableHeader;
