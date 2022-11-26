import React, { useRef } from 'react'
import {Container,Row,Col,Image,Form, Button, Stack, Card} from 'react-bootstrap'
import {firestore} from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import {BsEmojiDizzy, BsEmojiFrown, BsEmojiSmile, BsEmojiLaughing, BsEmojiExpressionless} from "react-icons/bs"
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

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
  
        <div className="bg-gradient-to-b from-sky-500 to-sky-300 w-full
        text-white h-screen">
          <Container>
          <Row className="px-4">
            <Col sm={12}><h4>Day<br/>Date</h4></Col>
          </Row>
          <Row className="px-4 my-5">
            <Col md={{ span: 3, offset: 2 }}><br/><br/>
            <Card className="text-center">
              <Card.Header><h5 className="mb-5 text-4xl">How are you feeling today?</h5></Card.Header>
              <Card.Body>
                <Stack direction="horizontal" gap={3}>
                  <Button className="flex-row ml-2 mr-2">
                      <BsEmojiDizzy size={70} className="text-sky-200">
                      </BsEmojiDizzy>
                  </Button>
                  <Button className="flex-row ml-2 mr-2">
                      <BsEmojiFrown size={70} className="text-sky-200">
                      </BsEmojiFrown>
                  </Button>
                  <Button className="flex-row ml-2 mr-2">
                      <BsEmojiExpressionless size={70} className="text-sky-200">
                      </BsEmojiExpressionless>
                  </Button>
                  <Button className="flex-row ml-2 mr-2">
                      <BsEmojiSmile size={70} className="text-sky-200">
                      </BsEmojiSmile>
                  </Button>
                  <Button className="flex-row ml-2 mr-2">
                      <BsEmojiLaughing size={70} className="text-sky-200"></BsEmojiLaughing></Button>
                </Stack>
              </Card.Body>
            </Card>
            </Col>
            <Col md={{ span: 3, offset: 2 }}><br/><br/>
            <Card className="text-center">
      <Card.Header><h5 className="mb-5 text-4xl">How did you sleep last night?</h5></Card.Header>
      <Card.Body>
          <Stack direction="horizontal" gap={2}>
          <Button className="flex-row ml-2 mr-10">
                      <FaThumbsDown size={70} className="text-sky-200">
                      </FaThumbsDown>
          </Button>
          <Button className="flex-row ml-10 mr-2">
                      <FaThumbsUp size={70} className="text-sky-200">
                      </FaThumbsUp></Button>
              </Stack>

      </Card.Body>
    </Card>
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col md={{ span: 6, offset: 3 }}><br/>
            <Form className="text-center" onSubmit={handleSave}>
              <Form.Group className="mb-3" controlId="inputNote">
              <Form.Label><h5 className="text-center text-2xl mb-3">Why do you think you feel this way?</h5></Form.Label>
              <Form.Control
                className="w-full justify-items-center text-black"
                as="textarea"
                rows={6}
                ref={messageRef}
                id="inputNote"
                placeholder='  Type here'
              />
              </Form.Group>
              <Button className="mx-auto text-center bg-sky-500 w-20 h-10 text-lg rounded-md"  type="submit">
                Save
              </Button>
            </Form>
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col md={{ span: 6, offset: 3 }}><br/>
              <Form>
                <Form.Label><h5 className='text-center text-2xl mb-5'>Add a picture</h5></Form.Label>
              </Form>
      <Card className="text-center">
      <Card.Header>
        <Stack direction="horizontal" gap={2}>
               <Button className="mx-auto bg-sky-500 mb-5 rounded-md w-32 h-10">Upload file</Button>
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