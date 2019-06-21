import React, { useState } from "react";

// React Components
import { Col, Row, Container } from "../../components/Grid";
import BusinessCard from "../../components/BusinessCard";

const Detail = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2>Card Detail</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <BusinessCard />
                    </Col>
                    <Col size="md-6">
                        {/* QR code image here */}
                    </Col>
                </Row>
            </Container>
        </div>
    );    
};

export default Detail;