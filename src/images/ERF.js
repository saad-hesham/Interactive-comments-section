import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button,Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editReply } from "../Redux";
const ERF = () => {
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
      setInputValue("");
      dispatch(editReply({content:inputValue}));

    }
  };
//   useEffect(() => {
//     document.addEventListener("keyup",(e)=>{
//         if(e.keyCode==13){
//             dispatch(editComment({content:inputValue}));

//         }
//     })
//   });
  return (
    
    <Container>
        <Form onSubmit={handleFormSubmit}>
        <div className="form-container">

      <Row className="justify-content-center">
        <Col md={1}>
        {/* <Image src={avatar} fluid  alt='avatar ' width={30} height={33}/> */}

        </Col>
        <Col  md={8}>
          
            <Form.Group controlId="formInput">
              <Form.Control
                type="text"
                placeholder="update comment"
                value={inputValue}
                onChange={handleInputChange}
                isInvalid={inputError}
                
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
           
        </Col>
        <Col md={2}>
                <Button type="submit" variant="primary">Update</Button>
                </Col>
      </Row>
      </div>

      </Form>
    </Container>
  );

  
};

export default ERF;