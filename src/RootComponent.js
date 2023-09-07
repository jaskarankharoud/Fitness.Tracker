import "./styles.scss";
import NavBar from "./NavigationBar/NavBarComponent";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import MyContext from "./context/MyContext";
function Root() {
  const context = useContext(MyContext);
  console.log(context.dumy);
  return (
    <div>
      <Container>
        <Row>
          <Col xs={0} md={1} lg={1}></Col>
          <Col xs={12} md={10} lg={10}>
            <Card>
              <Card.Header>
                <NavBar />
              </Card.Header>
              <Card.Body>
                <Outlet />
              </Card.Body>
              <Card.Footer className="text-muted">
                &copy; April 2023 by Cooking With Love. All Rights Reserved.
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={0} md={1} lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Root;
