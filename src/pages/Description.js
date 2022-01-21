import Style from 'styled-components'
import { Container, Row } from 'react-bootstrap'

const Center = Style.div`
font-family: 'Times New Roman', Times, serif;
p{
    text-align: justify;
}

`

function Descript() {
    return(
       <>
       <Center className='mt-5'>
           <Container>
               <Row>
                       <h2>Front End Developper</h2>
                       <strong>Med FOUAD</strong>
                       <p>Hi there! My name is Fouad Med. I’m a Front-end web developer from Comoros, I specialize in Squarespace web design. So by combining the power of the Squarespace platform and the coding experience that I have, I can help my clients to get the best results that they could achieve.</p>
                       <p>I have built many high-performing websites in the last few years. My main focus is to try to always keep myself updated with the latest news in the web design world.</p>
                       <p>I’ve always loved the process of building a high-value website and publishing it to the online world. Building projects for my clients is something that I really enjoy. I get the opportunity to work with awesome entrepreneurs & small businesses and also help them to reach more customers.</p>

                   
               </Row>
               <Row>
               <h2 className='text-center mt-5 mb-5'>Formation and Competence</h2>
                   
               </Row>
           </Container>
       </Center>
       </> 
    )
}
export default Descript;