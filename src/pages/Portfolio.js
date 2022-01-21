import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Toto from '../Toucch.jpg' 
import Style from 'styled-components'

const Portf = Style.div`

font-family: 'Times New Roman', Times, serif;
     
    a{
        text-decoration: none;
        
    }
    h5,p{
        margin-left: 25px;
    }
`


function Portfolio(){
    return(
        <>
        <Portf className='my-5'>
            <Container fluid="xxl">
                <Row >
                    <h1 className='text-center'>What I did and Squarespace Website Designs</h1>
                    <p className='text-align-justify'>Here are some recent projects I have worked on using Squarespace with custom coding(HTML, CSS, and JavaScript). If you any have questions, feel free to <a href='#' className='text-info'>contact</a> me.</p>

                </Row>
                <Row className='mt-2'>
                    <Col>
                        <a href='#'>
                        <img
                        src={Toto}
                        width={300}
                        height={200}
                        alt='attention' />

                        <h5 className='text-dark'>Ganzatech</h5>
                        </a>
                        <p>Website Vitrine</p>
                    </Col>
                    <Col>
                        <a href='#'>
                        <img
                        src={Toto}
                        width={300}
                        height={200}
                        alt='attention' />

                        <h5 className='text-dark'>Burger</h5>    
                        </a>
                        <p>Website Vitrine</p>
                    </Col>

                    <Col>
                        <a href='#'>
                        <img
                        src={Toto}
                        width={300}
                        height={200}
                        alt='attention' />
                        <h5 className='text-dark'>Own blog</h5>
                        </a>
                        <p>Website Vitrine</p>
                    </Col>
                </Row>
            </Container>
        </Portf>
        </>
    )
}
export default Portfolio;