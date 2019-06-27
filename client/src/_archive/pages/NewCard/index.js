import React, { useState } from "react";

// React Components
import { Col, Row, Container } from "../../components/Grid";
import BusinessCardL from "../../components/BusinessCardL";

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
                    <Col size="md-6">
                        <BusinessCardL />
                    </Col>
                    <Col size="md-6">
                        {/* QR code image here */}
                    </Col>
                </Row>
            </Container>
        </div>
    );    
};

export default NewCard;