import React, {Component} from 'react';
import Header from '../header/header';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Header />
                        <h1>Test Page</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;