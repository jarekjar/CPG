import React, {Component} from 'react';
import Header from '../header/header';
import ReactDefault from '../react-default/react-default';
import Home from '../home/home';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { myConfig } from '../../config';

class App extends Component {

    

    render() {
        console.log(myConfig.site);
        return (
            <Router>
                <Container>
                    <Row>
                        <Col>
                            <Header />
                            <Col>
                                <div>
                                    <Route path={myConfig.site + '/'} component={Home} />
                                    <Route path={myConfig.site + '/default'} component={ReactDefault} />
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