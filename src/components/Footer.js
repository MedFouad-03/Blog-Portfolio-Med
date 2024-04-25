import React from 'react';
import { Container, Row, Col, ListGroup, Navbar } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import Styled from 'styled-components';
import Descript from '../pages/Description';
import Logo from '../logs.png';
import { useNavigate } from 'react-router-dom';

const StyFooter = Styled.footer`
background-color: dark;
a {
    color:white;
    text-decoration: none;
    &:hover{
    color:yellow;
    }
}
    .list-group .list-group-item {
        background-color: transparent;
    };
    .danger{
        color: red;
    }
    img{
        margin: auto;
    }
`;

function Pied() {
  let navigate = useNavigate();
  return (
    <StyFooter className='bg-dark'>
      <Container fluid='xxl' bg='dark'>
        <Row>
          <Container>
            <Navbar.Brand className='d-flex justify-content-center'>
              <a
                href=''
                onClick={() => {
                  navigate('/description');
                }}
              >
                <img
                  src={Logo}
                  width='120'
                  height='60'
                  className='mt-3'
                  alt='React Bootstrap logo'
                />
              </a>
            </Navbar.Brand>
          </Container>
        </Row>
        <br />
        <hr className='bg-light' />
        <Row>
          <Col>
            <ListGroup variant='flush'>
              <ListGroup.Item className='pl-0'>
                <a href='#!'>Wanted to make your online website </a>
              </ListGroup.Item>
              <ListGroup.Item className='pl-0'>
                <a href='#!'>squarespace website</a>
              </ListGroup.Item>
              <ListGroup.Item className='pl-0'>
                <a href='#!'> eCommerce </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant='flush'>
              <ListGroup.Item className='pl-0'>
                <a href='#!'>Working with us </a>
              </ListGroup.Item>
              <ListGroup.Item className='pl-0'>
                <a href='#!'>Call us</a>
              </ListGroup.Item>
              <ListGroup.Item className='pl-0'>
                <a href='#!'> Terms and Service</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant='flush'>
              <ListGroup.Item className='pl-0'>
                <a href='#!'>Portfolio</a>
              </ListGroup.Item>
              <ListGroup.Item className='pl-0'>
                <a href='#!'>Conditions</a>
              </ListGroup.Item>
              <ListGroup.Item className='pl-0'>
                <a href='#!'> Amount Fees</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <hr className='bg-light' />
        <Row>
          <p className='text-center text-light'>
            Made with <FaHeart className='danger' /> by Fouad Med &copy;{' '}
            {new Date().getFullYear()} Copyright: <a href='/'> fouad.com </a>
          </p>
        </Row>
      </Container>
    </StyFooter>
  );
}
export default Pied;
