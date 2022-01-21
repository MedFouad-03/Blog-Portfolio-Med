import React from "react";
import { Container, ListGroup, ListGroupItem, Row, Col, Button } from "react-bootstrap";
import Web from '../Toucch.jpg'
import { useNavigate } from "react-router-dom";
import MyButon from "../components/Buttons";
import Style from "styled-components"

const Front = Style.div`
font-family: 'Times New Roman', Times, serif;

   ListGroupeItem{
       border: none;
   }
   p{
       text-align: justify;
   }
   .btn Buton{
       width: 100px;
       height: 170px;
       margin: auto;
   }
   a{
       text-decoration: none;
       &:hover{
           color: red;
       }
   }


`

function FrontEnd(){
    let navigate = useNavigate();
    return(
        <>
        <Front>
            <Container fluid="xxl" className="my-5">
                <Row className="my-5">
                    <h1>Custom Web Design</h1>
                    <p>I offer unique and professional website design or redesign using the Squarespace platform. If you need a website that reflects the quality of your work, I can help.</p>
                </Row>
                <Row>
                    <Col>
                    <h2 className="">What You Will Get</h2>
                    <ListGroup as="ol">
                        <ListGroupItem>Mobile responsive website design.</ListGroupItem>
                        <ListGroupItem>Up to 10 pages website.</ListGroupItem>
                        <ListGroupItem>Basic SEO optimization.</ListGroupItem>
                        <ListGroupItem>Customized design and pages.</ListGroupItem>
                        <ListGroupItem>Website speed optimization.</ListGroupItem>
                        <ListGroupItem>Social media and email connection.</ListGroupItem>
                        <ListGroupItem>Blog and E-commerce integration.</ListGroupItem>
                        <ListGroupItem>Google Analytics + Google search console integration.</ListGroupItem>
                        <ListGroupItem>Custom HTML, CSS, and JavaScript coding.</ListGroupItem>
                        <ListGroupItem>Unlimited revisions.</ListGroupItem>
                        <ListGroupItem>20% off for your first year with Squarespace.</ListGroupItem>
                        <ListGroupItem>30 minutes Squarespace video training(if needed).</ListGroupItem>
                    </ListGroup>
                    </Col>
                    <Col>
                    <a href="#">
                        <img
                        src={Web}
                        className="mt-5"
                        alt="remarque"/>
                       
                        
                    </a>
                    </Col>
                </Row>
                <Row className="btn mt-5">
                    <Button onClick={() => {navigate("/touch")}} className="btn-dark"><MyButon text="Starting at 500$" /></Button>
                    
                </Row>
                <Row>
                    <h3 className="text-center my-5">How Does Work?</h3>
                    <Col>
                       <h5>Strategy</h5>
                       <p>After the booking, we will start with a strategy call where we’ll discuss your business, goals, and vision. We will also talk about your website goals and what you want to achieve with it.</p>
                       <p>You need to provide all the content and images for your website.</p>
                    </Col>
                    <Col className="mx-5">
                       <h5>Build</h5>
                       <p>In this process, we will use the provided content and branding to design and build a professional unique website for your business growth. We’ll stay in touch to show our progress.</p>
                       <p>The project length depends on the requirements and features your website needs.</p>
                    </Col>
                    <Col>
                       <h5>Launch & Support</h5>
                       <p>In this exciting process, we will set your domain and pay the Squarespace subscription to add your website to the online world. You will be proud to share your site.</p>
                       <p>I’ll also provide videos showing you how to update your website yourself.</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <p>If you’re interested, I also offer other services including Squarespace <a href="#">website branding</a> and <a href="#">Squarespace SEO</a>. Feel free to <a href="#">reach out</a> to me if you have any questions.</p>
                </Row>
            </Container>
        </Front>
        </>
    )
}
export default FrontEnd;