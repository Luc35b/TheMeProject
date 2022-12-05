import React, { useState } from "react";
import {Link} from "react-router-dom"
import { UserAuth } from "../context/AuthContext";
import {
  Container,
  Row,
  Col,
  Form,
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
  //Variable used to save values of button selections to the database
  const [date, setDate] = useState(""); 
  const [emoji, setEmoji] = useState([]);
  const [sleep, setSleep] = useState([]);
  const {user} = UserAuth();
  //Variable used to save text entries to the database
  const [message, setMessage] = useState(""); 

  const handleChange = (val) => setEmoji(val);
  const handleChange2 = (val2) => setSleep(val2);

  const handleSave = async (e) => {
    e.preventDefault();

    //data to send to database
    let entry = {
      date: date,
      message: message,
      emoji: emoji,
      sleep: sleep,
      email:user.email,
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
              <Card.Body className="flex justify-between items-center max-w-[500px] mx-auto mb-5">
              <BsEmojiDizzy
                      size={70}
                      className="text-sky-200"
                    ></BsEmojiDizzy> 
              <BsEmojiFrown
                size={70}
                className="text-sky-200"
              ></BsEmojiFrown>
              <BsEmojiExpressionless
                  size={70}
                  className="text-sky-200"
              ></BsEmojiExpressionless>
              <BsEmojiSmile
                  size={70}
                  className="text-sky-200"
              ></BsEmojiSmile>
               <BsEmojiLaughing
                      size={70}
                      className="text-sky-200"
                    ></BsEmojiLaughing>
            
              </Card.Body>    
              <ToggleButtonGroup
                  className="flex justify-between pl-10 mx-auto max-w-[530px]"
                  type="radio"
                  name="options"
                  value={emoji}
                  onChange={handleChange}

                >
                  <ToggleButton className="" id="tbg-radio-1" value="Terrible">
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-3" value="Bad">
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-2" value="Average">           
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-3" value="Good">
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-3" value="Amazing">
                  </ToggleButton>
                </ToggleButtonGroup>
            </Card>
          </Col>
          <Col md={{ span: 3, offset: 2 }}>
            <br />
            <br />
            <Card className="text-center">
              <Card.Header>
                <h5 className="mb-5 text-4xl">How did you sleep last night?</h5>
              </Card.Header>
              <Card.Body  className="flex justify-between items-center max-w-[220px] mx-auto mb-5">
              <FaThumbsUp size={70} className="text-sky-200"></FaThumbsUp>
                 <FaThumbsDown
                      size={70}
                      className="text-sky-200"
                    ></FaThumbsDown>
              </Card.Body>
                <ToggleButtonGroup
                  className="flex justify-between pl-14 mx-auto max-w-[300px]"
                  type="radio"
                  name="options"
                  value={sleep}
                  onChange={handleChange2}
                >
                  <ToggleButton className="" id="tbg-radio-1" value="Up">
                  </ToggleButton>
                  <ToggleButton className="" id="tbg-radio-1" value="Down">
               
                  </ToggleButton>
              </ToggleButtonGroup>

              
            </Card>
          </Col>
        </Row>
      
        <Row className="px-4 ">
          <Col md={{ span: 6, offset: 3 }}>
            <br />
            <Form className="text-center" onSubmit={handleSave}>
              <Form.Group className="mb-3 " controlId="inputNote">
                <Form.Label>
                  <h5 className="text-center text-2xl mb-3">
                    Why do you think you feel this way?
                  </h5>
                </Form.Label>
                <Form.Control
                  className="justify-items-center text-black w-[450px] lg:w-[600px]"
                  as="textarea"
                  rows={3}
                  value={message}
                  id="inputNote"
                  placeholder="  Type here"
                  onChange={e => setMessage(e.target.value)}
                />
              </Form.Group>
              <Link
                className="mx-auto text-center shadow-lg shadow-sky-700 bg-sky-500 w-20 h-10 text-lg rounded-md"
                type="submit"
                to="/Home"
              >
                Save
              </Link>
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
