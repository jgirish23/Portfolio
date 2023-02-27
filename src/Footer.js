import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from "react-bootstrap";
import './Footer.css';
import img from './images/instagram.png';

function Footer(){
    const insta_img="https://cdn-icons-png.flaticon.com/512/2111/2111463.png";
    return(
        <div>
            <Container className="bottom">
                <Row>
                    <Col>
                    {/* {console.log(insta_img)} */}
                    <img className="img1" scr={img} alt="insta_img"></img>
                    {/* <p className="instagram" href="www.google.com">instagram</p> */}
                    </Col>
                    <Col><p className="github">github</p></Col>
                    <Col><p className="gmail">gmail</p></Col>
                </Row>
            </Container>
            
            
            
            {/* <img scr={gmail_img} alt={gmail_img}></img> */}
        </div>
        
    );
}
export default Footer;