import React from "react";
import { Container, ListGroup, ListGroupItem, Row, Col, Button } from "react-bootstrap";
import MyButon from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import Web from '../Toucch.jpg'
import Style from 'styled-components'

const Seo = Style.div`
 
font-family: 'Times New Roman', Times, serif;

  .btn Buton{
      width: 100px;
      margin-bottom: 10px;
  }

`

function SEO(){
    let navigate = useNavigate();
    return(
        <Seo>
        <Container className="my-5">
            <Row className="mb-3">
                <h1>Squarespace SEO</h1>
                <p>SEO or search engine optimization is a very important process for every website these days. It helps you to get more traffic and visitors from search engines. That’s why I offer this service for Squarespace websites.</p>
            </Row>
            <Row>
                <Col>
                   <h5 className="mt-4 mb-2">What You Will Get?</h5>
                   <ListGroup>
                       <ListGroupItem>keyword research based on your target audience.</ListGroupItem>
                       <ListGroupItem>SEO optimization for all website pages.</ListGroupItem>
                       <ListGroupItem>Image optimization for all images on your site.</ListGroupItem>
                       <ListGroupItem>Google Analytics + Google search console integration.</ListGroupItem>
                       <ListGroupItem>Sitemap submission for indexing.</ListGroupItem>
                       <ListGroupItem>Search engine friendly URLs</ListGroupItem>
                       <ListGroupItem>Blog post ideas to help you get more traffic from Google.</ListGroupItem>
                       <ListGroupItem>A guide on how to write SEO-friendly blog posts.</ListGroupItem>
                       <ListGroupItem>A guide on how to maintain your site SEO in Squarespace.</ListGroupItem>
                       <ListGroupItem>All General and Technical settings.</ListGroupItem>
                   </ListGroup>
                </Col>
                <Col className="mt-2">
                   <a href="/">
                   <img
                   src={Web}
                   className="mt-5"
                   alt="remarque" />
               </a>
                </Col>
            </Row>
            <Row className="btn my-4">
                <Button onClick={() =>{ navigate("/touch")}} className="btn-dark"><MyButon text="starting at 500$" /></Button>
            
            <p></p>
        </Row>
        </Container>
        </Seo>
    )
}
export default SEO;