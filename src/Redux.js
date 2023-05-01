import { createSlice } from '@reduxjs/toolkit';
import avatar from "./images/avatars/image-amyrobson.png"
import avatar2 from "./images/avatars/image-maxblagun.png"
import avatar3 from "./images/avatars/image-ramsesmiron.png"
import avatar4 from "./images/avatars/image-juliusomo.png"

const counterSlice = createSlice({
  name: 'comments',
  initialState: {
    editId :0,
    editReplyId :0,
    replyId:0,
    comments: [
        {
          id: 0,
          replyState:false,
          content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
          createdAt: "1 month ago",
          score: 12,
          user: {
            image: { 
              png: avatar,
            },
            username: "amyrobson"
          },
          replies: []
        },
        {
          id: 1,
          replyState:false,
          content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
          createdAt: "2 weeks ago",
          score: 5,
          user: {
            image: { 
              png: avatar2,
             
            },
            username: "maxblagun"
          },
          replies: [
            {
              id: 3,
              content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
              createdAt: "1 week ago",
              score: 4,
              replyingTo: "maxblagun",
              user: {
                image: { 
                  png: avatar3,
                },
                username: "ramsesmiron"
              }
            },
            {
              id: 4,
              you:true,
              editState: false,
              content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
              createdAt: "2 days ago",
              score: 2,
              replyingTo: "ramsesmiron",
              user: {
                image: { 
                  png: avatar4,
                  webp: "./images/avatars/image-juliusomo.webp"
                },
                username: "juliusomo"
              }
            }
          ]
        }
      ]
    },
  reducers: {
    addComments: (state,action) => {
      state.comments.push(action.payload);
    },

      editCommentState: (state,action) => {
        for(let i =0 ; i<state.comments.length ; i++){
          state.comments[i].editState =false
         }
        state.comments[action.payload].editState=true;
        state.editId = action.payload;
      
         },
         editComment: (state,action) => {
          state.comments[state.editId].content=action.payload.content; 
          for(let i =0 ; i<state.comments.length ; i++){
            state.comments[i].editState =false
           }       
           },
           deleteComment: (state,action) => {
            state.comments = state.comments.filter((com)=>com.id!=action.payload)
             
         
             },
             //-----------------------
             editReplyState: (state,action) => {
              state.replyId = action.payload;
              for(let i =0 ;i<state.comments.length ;i++){
                state.comments[i].replyState =false;
              }
              state.comments[action.payload].replyState =true;
             
               },

             addReplies: (state,action) => {
              state.comments[state.replyId].replies.push(action.payload);

            },
        
       
                editReply: (state,action) => {
                  
                  state.comments[state.replyId].replies[state.editReplyId].content=action.payload.content;
                  state.comments[state.replyId].replies[state.replyId].editState=false;


                  // console.log(state.comments[state.replyId].replies[action.payload].editState)

              
                  },
                  deleteReply: (state,action) => {
                     state.comments[state.replyId].replies = state.comments[state.replyId].replies.filter((rep)=>rep.id!=action.payload) ;

                    // console.log(state.comments[state.replyId].replies[action.payload].content)
                     },
                     openEdit:(state,action)=>{
                      state.comments[state.replyId].replies[action.payload].editState=true;
                      state.editReplyId = action.payload

                     }
  },
});

export const { addComments, deleteComment , editCommentState,editComment,addReplies,editReplyState,deleteReply,editReply,openEdit } = counterSlice.actions;

export default counterSlice.reducer;