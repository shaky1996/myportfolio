import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

const ProjectsCard = () => {
    return (
        <Container>
            <Row>
                {/* Left side menu */}
                <Tab.Container defaultActiveKey='#link1' >
                    <Col>
                        <Row>
                            <Col sm={4}>
                                <ListGroup numbered data-bs-theme='light'  >
                                    <ListGroup.Item
                                        action
                                        href='#link1'
                                        className=' px-3 border-0 rounded-3 mb-2 list-group-item-secondary'
                                        style={{ background: 'transparent' }}
                                    >
                                        Link 1
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        action
                                        href='#link2'
                                        className=' px-3 border-0 rounded-3 mb-2 list-group-item-secondary'
                                        style={{ background: 'transparent' }}
                                    >
                                        Link 2
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        action
                                        href='#link3'
                                        className=' px-3 border-0 rounded-3 mb-2 list-group-item-secondary'
                                        style={{ background: 'transparent' }}
                                    >
                                        Link 3
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>

                    {/* Right side menu */}
                    <Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey='#link1'>
                                    Tab pane content 1
                                </Tab.Pane>
                                <Tab.Pane eventKey='#link2'>
                                    Tab pane content 2
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Col>
                </Tab.Container>
            </Row>
        </Container>
    );
};

export default ProjectsCard;
