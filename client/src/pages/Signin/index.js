import React, { useState } from "react";

// React Components
import { Col, Row, Container } from "../../components/Grid";

const Signin = () => {
const [username, setUsername] = useState();
const [password, setPassword] = useState();

const handleSubmit = e => {
    e.preventDefault();
};

return (
    <div>
    <div className="mt-4">
        <h2>Sign In</h2>
    </div>
    <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
        <Row className="form-group">
            <Col size="12">
            <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
            />
            </Col>
        </Row>
        <Row className="form-group">
            <Col size="12">
            <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
            />
            </Col>
        </Row>
        <button className="btn btn-success" type="submit">
            Submit
        </button>
        </Container>
    </form>
    </div>
);
};

export default Signin;
