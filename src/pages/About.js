import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Style from 'styled-components'
import Image from '../phot.jpg'
import Fro from '../fro.png'
import Fron from '../fron.png'
import Front from '../front.jpg'
import { useNavigate } from 'react-router-dom'

const Center = Style.div`
font-family: 'Times New Roman', Times, serif;
p{
    text-align: justify;
}

`

function About() {
    let navigate = useNavigate()
    return(
       <>
       <Center className='mt-5'>
           <Container fluid>
               <Row>
                   <Col>
                       <a href='#'>
                           <img
                           src={Image}
                           width={600}
                           height={500}
                           alt='Description' />
                       </a>
                   </Col>
                   <Col>
                       <strong>Med FOUAD</strong>
                       <h2>Front end Developper</h2>
                       <p>Hi there! My name is Fouad Med. I’m a Front-end web developer from Comoros, I specialize in Squarespace web design. So by combining the power of the Squarespace platform and the coding experience that I have, I can help my clients to get the best results that they could achieve.</p>
                       <p>I have built many high-performing websites in the last few years. My main focus is to try to always keep myself updated with the latest news in the web design world.</p>
                       <p>I’ve always loved the process of building a high-value website and publishing it to the online world. Building projects for my clients is something that I really enjoy. I get the opportunity to work with awesome entrepreneurs & small businesses and also help them to reach more customers.</p>
                       <Button onClick={() =>{navigate("/touch")}} className='btn-dark'>Get in touch</Button>
                   </Col>
               </Row>
           </Container>
           <Container>
               <Row>
               <h2 className='text-center mt-5 mb-5'>My Skills</h2>
                   <Col>
                       <a href=''>
                           <img
                           src={Fro}
                           width={250}
                           height={90} />
                       </a>
                       <h4>Front end</h4>
                   </Col>
                   <Col>
                   <a href=''>
                           <img
                           src={Fron} 
                           width={250}
                           height={90}/>
                       </a>
                       <h4>Front end</h4>
                   </Col>
                   <Col>
                   <a href=''>
                           <img
                           src={Front} 
                           width={250}
                           height={90}/>
                       </a>
                       <h4>Front end</h4>
                   </Col>
               </Row>
               <Row>
               <Col>
                   <h2 className='text-center mt-5'>Need a Website?</h2>
                   <p>I will create a professional website that showcases the work you do. All that by following the UI/UX design and SEO best practices to give you the best results. I can also teach you how to easily update your website and make changes when necessary.</p>
                   <p className='text-center mb-4'>I would love to hear about your project. Feel free to <a href='/'>contact</a> me.</p>
               </Col>
               </Row>
           </Container>
       </Center>
       </> 
    )
}
export default About;