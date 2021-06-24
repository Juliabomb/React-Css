import React, { useState }  from 'react';
import {Container, Button, Row, Col } from 'react-bootstrap';


const Board = () => {
    const [status,setStatus] = useState(0) 
    const [tw,setTw] = useState(0) 
    const [tb,setTb] = useState(0) 

   setTimeout(() => {
    if (status === 1) {
        setTw(tw + 1)
    }

    if (status === 2) {
        setTb(tb + 1)
    }
   }, 1000)


  return (
       <>
        <Container>
            <Row>
                <Col>{tw}</Col>
                <Col>{tb}</Col>
                <Col>{tw}</Col>
            </Row>
            <Row>
                <Col>{tb}</Col>
                <Col>{tw}</Col>
                <Col>{tb}</Col>
            </Row>

            <Row>
                <Col>
                    <Button onClick={() => {setStatus(2)}}>Black</Button>
                </Col>
                <Col>
                    <Button onClick={() => {setStatus(1)}}>White</Button>
                </Col>
                <Col>
                    <Button 
                        onClick={() => {
                            setStatus(0)
                            setTw(0)
                            setTb(0)
                        }}
                    >Stop</Button>
                </Col>
            </Row>
        </Container>
       </>
  );
}

export default Board;