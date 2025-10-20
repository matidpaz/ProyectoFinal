import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer=()=>{
    return(
        <footer className="bg-dark text white text center py-4 mt-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="mb-0">Un Titulo</p>
                        <p className="mb-0">Aca no se bien que iria</p>
                    </Col>
                    <Col md={6}>
                        <div>
                            <a href="#" className="text-white me-3">
                                <i className="fa-brands fa-facebook fa-2x"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fa-brands fa-twitter fa-2x"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fa-brands fa-instagram fa-2x"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;