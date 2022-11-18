import React, { useRef } from 'react'
import {Container,Row,Col,Image,Form, Button, Stack, Card} from 'react-bootstrap'
import {firestore} from "../firebase";
import { addDoc, collection } from "firebase/firestore";


export const Calendar = () => {

  const messageRef = useRef();
  const ref = collection(firestore, "Notes");
  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
    
    let data = {
      message:messageRef.current.value,
    }
    
    try {
      addDoc(ref, data);
    } catch(e) {
      console.log(e);
    }
  };

    return (
  
        <div>
          
          <style type="text/css">
        {`
    .btn-myblue {
      background-color: #0EA4F8;
      color: white;
    }
    `}
      </style>
      
    
          <Container>
          <Row className="px-4 my-5">
            <Col sm={12}><h4>Day<br/>Date</h4></Col>
          </Row>
          <Row className="px-4 my-5">
            <Col md={{ span: 3, offset: 2 }}><br/><br/>
            <Card className="text-center">
              <Card.Header><h5>Mood</h5></Card.Header>
              <Card.Body>
                <Stack direction="horizontal" gap={3}>
                  <Button className="ms-auto" variant="myblue">1</Button>
                  <Button className="ms-auto" variant="myblue">2</Button>
                  <Button className="ms-auto" variant="myblue">3</Button>
                  <Button className="mx-auto" variant="myblue">4</Button>
                  <Button className="me-auto" variant="myblue">5</Button>
                </Stack>
              </Card.Body>
            </Card>
            </Col>
            <Col md={{ span: 3, offset: 2 }}><br/><br/>
            <Card className="text-center">
      <Card.Header><h5>Sleep</h5></Card.Header>
      <Card.Body>
          <Stack direction="horizontal" gap={2}>
          <Button className="ms-auto" variant="myblue">Good</Button>
          <Button className="mx-auto" variant="myblue">Average</Button>
          <Button className="me-auto" variant="myblue">Bad</Button>
              </Stack>

      </Card.Body>
    </Card>
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col md={{ span: 6, offset: 3 }}><br/>
            <Form onSubmit={handleSave}>
              <Form.Group className="mb-3" controlId="inputNote">
              <Form.Label><h5>Note</h5></Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                ref={messageRef}
                id="inputNote"
                placeholder='Type here'
              />
              </Form.Group>
              <Button variant="myblue" type="submit">
                Save
              </Button>
            </Form>
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col md={{ span: 6, offset: 3 }}><br/>
              <Form>
                <Form.Label><h5>Picture</h5></Form.Label>
              </Form>
            <Card className="text-center">
      <Card.Header>
        <Stack direction="horizontal" gap={2}>
               <Button className="mx-auto" variant="myblue">Add</Button>
              </Stack>
      </Card.Header>
      <Card.Img variant="bottom" src="https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-02-scaled.jpg" />
    </Card>
            </Col>
          </Row>
        </Container>
        </div>
    )
}