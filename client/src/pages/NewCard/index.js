import React, { useState } from "react";

// React Components
import { Col, Row, Container } from "../../components/Grid";


const NewCard = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2>New Card</h2>
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

export default NewCard;