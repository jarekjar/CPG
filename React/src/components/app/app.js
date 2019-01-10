import React, {Component} from 'react';
import Header from '../header/header';
import ReactDefault from '../react-default/react-default';
import Home from '../home/home';
import { Container, Row, Col } from 'reactstrap';
import { HashRouter as Router, Route} from "react-router-dom";

class App extends Component {

    
//stuff
    render() {
        return (
            <Router>
                <Container>
                    <Row>
                        <Col>
                            <Header />
                            <Col>
                                <div>
                                    <Route path={'/'} component={Home} />
                                    <Route path={'/default'} component={ReactDefault} />
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}

export default App;