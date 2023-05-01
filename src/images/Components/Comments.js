import { Container, Row, Col,Image  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Forms from "./Form"
import { deleteComment,deleteReply,editCommentState,editReplyState,editReply,openEdit } from '../../Redux';

import EForms from './EditForm';
import RForms from './ReplyForm';
import ERF from "../ERF"
function Comments() {
  const dispatch = useDispatch();

    const comments = useSelector((state) => state.comments.comments);
    const comment = comments.map((x)=>{
    
      return(
        <Container key={x.id}>
          {/*comments row */}
        <Row>
          <Col xs={12} className='page-container' >
            <div className='block-parent-element'>
              <Row>
                <Col md={1}> {/*vote-buttons-container */}
                  <div className='vote-buttons-container'>
                    <button>+</button>
                    <div>{x.score}</div>
                    <button>-</button>
                  </div>
                  {x.you ?<div className='reply-button-ed'><span onClick={()=>{dispatch(deleteComment(x.id))}}>delete</span><span onClick={()=>{dispatch(editCommentState(x.id))}}>edit</span></div>:<div className='reply-button' onClick={()=>{dispatch(editReplyState(x.id))}}> Reply</div> }               
                </Col>
                
                <Col md={10}>
                  <div className='mid-section'>
                    <div>
                     <Image src={x.user.image.png} fluid  alt='avatar image' width={30} height={33}/>
                      <span className='name'>{x.user.username}</span><span className='date'>{x.createdAt}</span>
                    </div>
                
                  
                  <div>
                    <p className='para-content'>{x.content}</p>
                      </div>
                  </div>
                  
  
                </Col>
                
            

              </Row>
              
            </div>
            {x.replyState ?  <RForms/>:null}

          </Col>

        </Row>
    
   
    {/*replies sections */}
    {x.replies.length!=0 ? <div className='reply-parent'>
                  {x.replies.map((rep)=>{return(
                   
                    <Row key={rep.id}>
          <Col xs={12} className='page-container' >
            <div className='block-parent-element reply'>
              <Row>
                <Col md={1}> {/*vote-buttons-container */}
                  <div className='vote-buttons-container'>
                    <button>+</button>
                    <div>{rep.score}</div>
                    <button>-</button>
                  </div>
                  {rep.you ?<div className='reply-button-ed r-b-p'><span onClick={()=>{dispatch(deleteReply(rep.id))}}>delete</span><span onClick={()=>{dispatch(openEdit(rep.id))}}>edit</span></div>:<div className='reply-button'> Reply</div> }               
                </Col>
                
                <Col md={10}>
                  <div className='mid-section'>
                    <div>
                     <Image src={rep.user.image.png} fluid  alt='avatar image' width={30} height={33}/>
                      <span className='name'>{rep.user.username}</span><span className='date'>{rep.createdAt}</span>
                    </div>
                
                  
                  <div>
                    <p className='para-content'><span style={{color:"#535699",fontWeight:"bold"}}>@{rep.replyingTo} </span> {rep.content}</p>
                      </div>
                  </div>
  
                </Col>
            

              </Row>
              
             {rep.editState ?<ERF/>:null}

            </div>

          </Col>
        </Row>
                  
              )})}</div>:null}
                



      </Container>
    
      )
    })
    return (
      <div>
  {comment}
  <Forms/>  
  </div>
      
    );
  }
  
  export default Comments;
