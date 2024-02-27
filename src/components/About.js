import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <Container  style={{ marginTop: '10%', marginBottom: '200px' }} className='text-light '>
            <Row>
                <Col className='text-light '>
                    <h2 className='display-2' style={{ fontWeight: 600 }}>
                        About Me
                    </h2>
                </Col>
            </Row>
            <Container className='mt-5'>
            <Row>
                <Col>
                    <h2 className='text-start'>My Story</h2>
                    <p className='text-start mt-5' style={{  fontSize:'1.2rem' ,fontWeight: 400}}>
                        Hello there once again!<br /><br />
                        
                        I'm Shakhzod (or you can call me <span style={{  color: 'yellow' }}>Shak </span>), a web and mobile developer
                        residing in the scenic suburban area of Philadelphia,
                        PA. Originally from Uzbekistan, my journey has taken me
                        across the globe, spending two enriching years in Latvia
                        before settling in the United States six years ago.<br /><br />

                        With proficiency in English, Russian, and Uzbek, this linguistic diversity
                        not only helps me connect with people from different
                        backgrounds but also contributes to my adaptability – a
                        quality I bring to my coding endeavors. <br /><br />
                        
                        I recently
                        completed the Nucamp coding bootcamp, earning my stripes
                        with a certification in <span style={{ fontWeight: 700 }}><u>Full Stack Web + Mobile
                        Development</u></span>. Coding isn't just a job for me; it's a
                        passion. I find joy in creating seamless interfaces and
                        tackling complex challenges. The tech world is
                        constantly evolving, and I'm always eager to learn and
                        embrace new things.
                    </p>
                </Col>
             
            </Row>
            </Container>
        </Container>
    );
};

export default About;
