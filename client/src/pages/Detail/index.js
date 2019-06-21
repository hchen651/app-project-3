import React, { useState } from "react";

// React Components
import { Col, Row, Container } from "../../components/Grid";
import BusinessCard from "../../components/BusinessCard";

const Detail = () => {

    return (
        <div>
            <div className="mt-4">
                <h2>Card Detail</h2>
            </div>
            <Container>
                <Row>
                    <Col size="md-6">
                        <BusinessCard />
                    </Col>
                    <Col size="md-6">

                    </Col>
                </Row>
            </Container>
        </div>
    );    
};

export default Detail;