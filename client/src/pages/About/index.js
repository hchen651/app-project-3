import React, { useState } from "react";

// React Components
import { Col, Row, Container } from "../../components/Grid";


const About = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2>About</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        {/* context here */}
                    </Col>
                </Row>
            </Container>
        </div>
    );    
};

export default About;