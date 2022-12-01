import React from "react";
import { Container, Spinner } from "reactstrap";

function PageLoading() {
  return (
    <Container style={{ height: "100vh" }}>
      <Spinner>Loading...</Spinner>
    </Container>
  );
}

export default PageLoading;
