import React, { useState } from "react";

// React Components
import { Col, Row, Container } from "../../components/Grid";


const Collection = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2>Collection</h2>
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

export default Collection;