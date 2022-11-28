import React, { useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Stack,
  Card,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import {
  BsEmojiDizzy,
  BsEmojiFrown,
  BsEmojiSmile,
  BsEmojiLaughing,
  BsEmojiExpressionless,
} from "react-icons/bs";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import TheCalendar from "./TheCalendar";

export const Calendar = () => {
  const [date, setDate] = useState("");
  const [emoji, setEmoji] = useState([]);
  const messageRef = useRef();
  const emojiRef = useRef();

  const handleChange = (val) => setEmoji(val);

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
      emoji: emoji,
    };

    try {
      addDoc(collection(firestore, "Entry"), data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSave2 = async (e) => {
    e.preventDefault();

    console.log(emojiRef.current.value);

    let data = {
      emoji: emojiRef.current.value,
    };

    try {
      addDoc(collection(firestore, "Emoji"), data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-sky-500 to-sky-300 w-full
        text-white h-screen"
    >
      <Container>
        <Row className="px-4">
          <Col sm={12}>
            <h4>
              Day
              <br />
              Date
            </h4>
          </Col>
        </Row>
        <Row className="px-4 my-5">
          <Col md={{ span: 3, offset: 2 }}>
            <br />
            <br />
            <Card className="text-center">
              <TheCalendar value={date} setValue={setDate} />
              <Card.Header>
                <h5 className="mb-5 text-4xl">How are you feeling?</h5>
              </Card.Header>
              <Card.Body>
                <ToggleButtonGroup
                  className=""
                  type="radio"
                  name="options"
                  value={emoji}
                  onChange={handleChange}
                >
                  <ToggleButton className="" id="tbg-radio-1" value="Terrible">
                    <BsEmojiDizzy
                      size={70}
                      className="text-sky-200"
                    ></BsEmojiDizzy>
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-3" value="Bad">
                    <BsEmojiFrown
                      size={70}
                      className="text-sky-200"
                    ></BsEmojiFrown>
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-2" value="Average">
                    <BsEmojiExpressionless
                      size={70}
                      className="text-sky-200"
                    ></BsEmojiExpressionless>
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-3" value="Good">
                    <BsEmojiSmile
                      size={70}
                      className="text-sky-200"
                    ></BsEmojiSmile>
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-3" value="Amazing">
                    <BsEmojiLaughing
                      size={70}
                      className="text-sky-200"
                    ></BsEmojiLaughing>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ span: 3, offset: 2 }}>
            <br />
            <br />
            <Card className="text-center">
              <Card.Header>
                <h5 className="mb-5 text-4xl">How did you sleep last night?</h5>
              </Card.Header>
              <Card.Body>
                <Stack direction="horizontal" gap={2}>
                  <Button className="flex-row ml-2 mr-10">
                    <FaThumbsDown
                      size={70}
                      className="text-sky-200"
                    ></FaThumbsDown>
                  </Button>
                  <Button className="flex-row ml-10 mr-2">
                    <FaThumbsUp size={70} className="text-sky-200"></FaThumbsUp>
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="px-4 my-5">
          <Col md={{ span: 6, offset: 3 }}>
            <br />
            <Form className="text-center" onSubmit={handleSave}>
              <Form.Group className="mb-3" controlId="inputNote">
                <Form.Label>
                  <h5 className="text-center text-2xl mb-3">
                    Why do you think you feel this way?
                  </h5>
                </Form.Label>
                <Form.Control
                  className="w-full justify-items-center text-black"
                  as="textarea"
                  rows={6}
                  ref={messageRef}
                  id="inputNote"
                  placeholder="  Type here"
                />
              </Form.Group>
              <Button
                className="mx-auto text-center bg-sky-500 w-20 h-10 text-lg rounded-md"
                type="submit"
              >
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
/*
<Stack direction="horizontal" gap={3}>
                  <form onSubmit={handleSave2}>
                  <button className="flex-row ml-2 mr-2" type="submit" ref={emojiRef} value="Terrible">
                      <BsEmojiDizzy size={70} className="text-sky-200">
                      </BsEmojiDizzy>
                  </button>
                  
                  <button className="flex-row ml-2 mr-2" type="submit" ref={emojiRef} value="Bad">
                      <BsEmojiFrown size={70} className="text-sky-200">
                      </BsEmojiFrown>
                  </button>
                
                  <button className="flex-row ml-2 mr-2" type="submit" ref={emojiRef} value="Average">
                      <BsEmojiExpressionless size={70} className="text-sky-200">
                      </BsEmojiExpressionless>
                  </button>
        
                  <button className="flex-row ml-2 mr-2" type="submit" ref={emojiRef} value="Good">
                      <BsEmojiSmile size={70} className="text-sky-200">
                      </BsEmojiSmile>
                  </button>
               
                  <button className="flex-row ml-2 mr-2" type="submit" ref={emojiRef} value="Amazing">
                      <BsEmojiLaughing size={70} className="text-sky-200">
                      </BsEmojiLaughing>
                  </button>
                  </form>
                </Stack>
*/
