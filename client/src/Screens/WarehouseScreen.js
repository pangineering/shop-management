import React from "react";
import { Container, Card, Button } from "react-bootstrap";

function WarehouseScreen() {
  return (
    <Container>
      <h1>My Warehouse</h1>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default WarehouseScreen;
