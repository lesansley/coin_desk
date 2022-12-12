import { Container, Table } from "reactstrap";
import TableRows from "./table-rows";

function CoinStats({ data }) {
  return (
    <Container>
      <Table>
        <TableRows rows={data} />
      </Table>
    </Container>
  );
}

export default CoinStats;
