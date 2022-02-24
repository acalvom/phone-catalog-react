import React from "react";
import {Col, Container, Row} from "react-bootstrap";

function App() {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <h2>Phone App. Mobile 1</h2>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <h2>Phone App. Mobile 2</h2>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <h2>Phone App. Mobile 3</h2>
                </Col>
            </Row>

        </Container>
    );
}

export default App;
