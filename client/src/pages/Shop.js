import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';

function Shop() {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                </Col>
            </Row>
        </Container>
    )
}

export default Shop;