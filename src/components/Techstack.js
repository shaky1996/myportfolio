import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

const Techstack = () => {
    return (
        <Container>
            <Row>
                <Col className='mt-3 p-5  text-light '>
                    <h2 className='display-2' style={{ fontWeight: 600 }}>
                        {' '}
                        TechStack
                    </h2>
                    <Container className='mt-5'>
                    <p className='pt-4'>
                        I am currently most famliar with <strong>HTML, CSS, Bootstrap,
                        JavaScript, React </strong> and <strong>React Native</strong>. <br />
                        <br />
                        However, I am continuously expanding my knowledge and
                        actively seeking opportunities to learn and grow each
                        day.
                    </p>
                    </Container>
                </Col>
            </Row>
            <Row xs={3} md={3} lg={6} className='d-flex justify-content-center g-2' style={{}}>
            
                {itemData.map((item, idx) => (
               
                        <Card key={idx}
                        className='mx-1 mx-lg-3'
                            style={{
                                background: item.color,
                                width: '150px',
                                height: '190px',
                                
                                
                            }}
                        >
                             <motion.div
                     whileHover={{ scale: 1.4 }}
                     whileTap={{ scale: 2.9 }}
                     transition={{
                         type: 'spring',
                         stiffness: 400,
                         damping: 17
                     }}>
                           
                            <Card.Img
                                src={item.img}
                                
                                style={{
                                    height: 'auto',
                                    width: '120px',
                                    margin: 'auto',
                                    display: 'block'
                                }}
                            />
                            </motion.div>
                            <Card.Body
                                className='d-flex flex-column align-items-center justify-content-end'
                                style={{ textAlign: 'center', height: '25%', color: 'white' }}
                            >
                                <Card.Title>{item.title}</Card.Title>
                            </Card.Body>
                        </Card>
                
                        
                ))}
            </Row>
        </Container>
    );
};

const itemData = [
    {
        img: require('../assets/techStak/html.png'),
        title: 'HTML5',
        color: '#ed8013'
    },
    {
        img: require('../assets/techStak/css.png'),
        title: 'CSS',
        color: '#217ded'
    },
    {
        img: require('../assets/techStak/bootstrap.png'),
        title: 'Bootstrap',
        color: '#8b23f7'
    },
    {
        img: require('../assets/techStak/javaScript.png'),
        title: 'JavaScript',
        color: '#f2c12c'
    },
    {
        img: require('../assets/techStak/react.png'),
        title: 'React',
        color: '#32515c'
    },
    {
        img: require('../assets/techStak/react.png'),
        title: 'ReactNative',
        color: '#2cc0f2'
    }
];

export default Techstack;
