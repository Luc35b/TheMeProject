import React, { useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
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
import userEvent from "@testing-library/user-event";

export const Calendar = () => {
  //Variable used to save values of button selections to the database
  const [date, setDate] = useState(""); 
  const [emoji, setEmoji] = useState([]);
  const [sleep, setSleep] = useState([]);
  //Variable used to save text entries to the database
  const messageRef = useRef();

  const handleChange = (val) => setEmoji(val);
  const handleChange2 = (val2) => setSleep(val2);

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    //data to send to database
    let entry = {
      date: date,
      message: messageRef.current.value,
      emoji: emoji,
      sleep: sleep,
      email:userEvent.email,
    };

    try {
      addDoc(collection(firestore, "Entry"), entry);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    //Buttons and text area
    <div
      className="bg-gradient-to-b from-sky-500 to-sky-300 w-full
        text-white h-full"
    >
      <Container>
        <Row className="px-4 text-center">
          <Col md={{ span: 3, offset: 2 }}>
            <br />
            <br />
            <br />
            <br />
            <h5 className="mb-5 text-4xl">Select a Date</h5>
            <TheCalendar value={date} setValue={setDate} />
          </Col>
        </Row>
        <Row className="px-4 my-5">
          <Col md={{ span: 3, offset: 2 }}>
            <br />
            <Card className="text-center">
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
              <ToggleButtonGroup
                  className=""
                  type="radio"
                  name="options"
                  value={sleep}
                  onChange={handleChange2}
                >
                  <ToggleButton className="" id="tbg-radio-1" value="Up">
                    <FaThumbsUp size={70} className="text-sky-200"></FaThumbsUp>
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-1" value="Down">
                  <FaThumbsDown
                      size={70}
                      className="text-sky-200"
                    ></FaThumbsDown>
                  </ToggleButton>
              </ToggleButtonGroup>

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
                  className=" w-full justify-items-center text-black"
                  as="textarea"
                  rows={3}
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
              <br />
              <br />
              <br />
              
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
