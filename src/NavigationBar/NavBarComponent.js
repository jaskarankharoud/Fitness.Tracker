import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NavBar() {
  //state variables for login - offcanvas
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  //onclick handler to close offcanvas and route to register page
  let navigate = useNavigate();
  const offCanvasRef = useRef();
  const onClickHandleRegister = () => {
    let path = "/login";
    navigate(path);
    if (offCanvasRef.current.backdrop != null) {
      offCanvasRef.current.backdrop.click();
    }
  };
  return (
    <>
      {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
        <Navbar
          key={expand}
          bg="danger"
          variant="dark"
          expand={expand}
          className="mb-3"
          fixed="top"
        >
          <Container fluid>
            <div className="boxSize">
              <Navbar.Brand href="#">Cooking With Love!</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
            </div>
            <div id="offCanvas">
              <Navbar.Offcanvas
                ref={offCanvasRef}
                className="solidbg"
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                onHide={handleLoginClose}
              >
                <Offcanvas.Header closeButton className="Header" id="bdTop">
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    style={{ fontWeight: "bold" }}
                  >
                    Excited to cook with us?
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Header" id="bdBottom">
                  <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutus">About us</Nav.Link>
                    <Nav.Link href="/login">Register</Nav.Link>
                    <NavDropdown
                      title="Log-In"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item
                        href="#action4"
                        onClick={handleLoginShow}
                      >
                        Meal plans
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <div>Not registered?</div>
                      <NavDropdown.Item
                        onClick={onClickHandleRegister}
                        onHide={handleLoginClose}
                      >
                        Click here!
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Offcanvas
                    show={showLogin}
                    onHide={handleLoginClose}
                    placement="start"
                    scroll={true}
                    backdrop={false}
                  >
                    <Offcanvas.Header closeButton className="Header" id="bdTop">
                      <Offcanvas.Title>Log-in</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="Header" id="bdBottom">
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <br />
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </Offcanvas.Body>
                  </Offcanvas>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
