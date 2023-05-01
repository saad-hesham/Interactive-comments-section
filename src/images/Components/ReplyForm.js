import React, { useState,useEffect } from "react";
import { Container, Row, Col, Form, Button,Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addReplies } from "../../Redux";
import avatar from "../../images/avatars/image-juliusomo.png"
const RForms = () => {
  const postId = useSelector((state)=>state.comments.replyId);
  const comments =  useSelector((state) => state.comments.comments);
  const replies = useSelector((state) => state.comments.comments[postId].replies);

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
          dispatch(addReplies({
            id: replies.length,
            editState:false,
            you:true,
            content: inputValue,
            createdAt: "just now",
            score: 0,
            replyingTo: comments[postId].user.username,
            user: {
              image: { 
                png: avatar,
              },
              username: "juliusomo"
            }
          },));


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
                <Button type="submit" variant="primary">Reply</Button>
                </Col>
      </Row>
      </div>

      </Form>
    </Container>
  );

  
};

export default RForms;