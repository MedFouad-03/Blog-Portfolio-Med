import React from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import Touch from '../Toucch.jpg'
import Style from 'styled-components'
import { useNavigate } from "react-router-dom";

const Formulaire = Style.div`
        
font-family: 'Times New Roman', Times, serif;
             a{
                 color: blue;
                 display: flex;
                 text-decoration: none;
                 &:hover{
                   color: red;
                 }
             }
             p{
                 text-align: justify;
             }
             Button{
                 display: flex;
                 margin-bottom: 10px;
             }
`

function TouchMe(){
  let navigate = useNavigate();
    return(
        <>
        <Formulaire className="mb-5">
            <Container fluid="xxl"> 
                <h1 className="mt-5 mb-5 text-center fs-1">Get in Touch</h1>
                <Row>
                    <Col>
                        <a href="#">
                            <img
                            src={Touch}
                            width={400}
                            height={250} />
                        </a>
                    </Col>
                    <Col>
                        <p>Looking for a Squarespace web designer or need to build a new website? Let’s work together and bring your idea to life. Whether you’re an entrepreneur or a small business, I would like to assist you. Just let me know how I can help.</p>
                        <span>
                            <a href="">facebook</a>
                            <a href="">linkedin</a>
                            <a href="">twitter</a>
                        </span>
                    </Col>
                </Row>
            </Container>

<Container fluid="xxl">
                <h1 className="mt-5 mb-5">Get Started Now</h1>
<Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" required />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Laste Name</Form.Label>
      <Form.Control type="text" placeholder="last name" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1" required="required" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="email id" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>which are you interested</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>website</option>
        <option>spacesquare</option>
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3 mt-3" controlId="formGridAddress1">
    <Form.Label>Do you have an existing website, if yes please share your link </Form.Label>
    <Form.Control type="email" placeholder="https/" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={() => {navigate("/about")}}>
    Submit
  </Button>
</Form>

</Container>
        </Formulaire>
        
        </>
    )
}
export default TouchMe;