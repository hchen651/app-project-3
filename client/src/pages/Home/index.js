import React, { useState } from "react";

// React Components
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button";

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-3"></Col>
                    <Col size="md-6">
                        <h3>Imprint is a dynamic business card collector for storing and organizing contact information.</h3>
                    </Col>

                </Row>
                <Row>
                    {/* gifs or video here */}
                </Row>
                <Row>
                    <Col size="md-3"></Col>
                    <Col size="md-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3"></Col>
                    <Col size="md-6">
                        <Button href="/signup">SIGN UP</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Home;