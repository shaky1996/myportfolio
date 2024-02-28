import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '@reacticons/bootstrap-icons';

const Footer = () => {
    return (
        <Container style={{ marginTop: '10%' }} >
            <Row className='border-bottom pb-3 mb-3'>
                <Col style={{ fontSize: '2em'}}>
                    <a
                        href='https://www.linkedin.com/in/shak-yuldashev/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Icon name='linkedin' className='px-2'/>
                    </a>
                    <a
                        href='https://github.com/shaky1996'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Icon name='github' className='px-2' style={{ color: 'white'}}/>
                    </a>
                </Col>
            </Row>
            <Row className='pb-5'>
                <p className='text-center'>© 2024 Shakhzod Yuldashev</p>
            </Row>
        </Container>
    );
};

export default Footer;
