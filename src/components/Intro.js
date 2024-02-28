import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Icon from '@reacticons/bootstrap-icons';
import Blob from '../features/blob/Blob';
import BgImg from '../features/bgimg/BgImg';

const Intro = () => {
    return (
        <Container style={{ marginTop: '10%', marginBottom: '200px' }}>
            <Row className='mt-3 py-5 text-light '>
                <Col xs={6} className='text-start'>
                    <h3>
                        <small
                            className='text-body-success'
                            style={{ fontWeight: 300 }}
                        >
                            Hello,
                        </small>
                    </h3>

                    <h1 className='display-2'>
                        I'm{' '}
                        <span style={{ fontWeight: 600, color: 'yellow' }}>
                            Shakhzod
                        </span>
                    </h1>

                    <h2
                        className='pt-3 text-break fs-4'
                        style={{ fontWeight: 300 }}
                    >
                        {' '}
                        I build websites and apps
                    </h2>

                    <Button variant='outline-info' className='mt-3'>
                        <Icon
                            name='file-earmark-person-fill'
                            style={{ paddingRight: 5 }}
                        />
                        My Resume
                    </Button>
                </Col>
                <Col className='align-items-start pt-4'>
                    <Blob />
                    <BgImg />
                </Col>
            </Row>
        </Container>
    );
};

export default Intro;
