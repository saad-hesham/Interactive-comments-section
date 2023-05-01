import React, { useState,useEffect } from "react";
import { Container, Row, Col, Form, Button,Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../../Redux";
import avatar from "../../images/avatars/image-juliusomo.png"
const Forms = () => {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputError(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setInputError(true);
    } else {
          dispatch(addComments({id:comments.length, replyState:false,you:false,replies:[],you:true,editState:false,content:inputValue,createdAt:"1 day ago",score:0,user:{image:{png: avatar},username: "juliusomo"}}));


      setInputValue("");
    }
  };
  return (
    
    <Container>
        <Form onSubmit={handleFormSubmit}>
        <div className="form-container">

      <Row className="justify-content-center">
        <Col md={1}>
        <Image src={avatar} fluid  alt='avatar ' width={30} height={33}/>

        </Col>
        <Col  md={8}>
          
            <Form.Group controlId="formInput">
              <Form.Control
                type="text"
                placeholder="Add Comment"
                value={inputValue}
                onChange={handleInputChange}
                isInvalid={inputError}
                
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
           
        </Col>
        <Col md={2}>
                <Button type="submit" variant="primary">Send</Button>
                </Col>
      </Row>
      </div>

      </Form>
    </Container>
  );

  
};

export default Forms;