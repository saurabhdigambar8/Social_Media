import { createContext, useReducer } from "react";

export const PostList=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{}
})

const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList
  if(action.type=='DELETE_POST'){
    newPostList=currPostList.filter((post)=>post.id !== action.payload.postId)
  }else if(action.type=='ADD_POST'){
    // newPostList={...currPostList,action}
    newPostList=[action.payload,...currPostList]
    console.log(action);
  }
  return newPostList
}
const PostListProvider=({children})=>{
  const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST)
  const addPost=(userId,postTitle,postBody,reactions,tags)=>{
    dispatchPostList({type:'ADD_POST',payload:{
        id:Date.now(),
        title:postTitle,
        body:postBody,
        reactions:reactions,
        userId:'user_9',
        tags:tags
      }})

  }

  const deletePost=(postId)=>{
    dispatchPostList({type:'DELETE_POST',payload:{postId}})
  }
  return <PostList.Provider value={{postList,addPost,deletePost}}> 
  {children}</PostList.Provider>
}
const DEFAULT_POST_LIST=[
  {
  id:'1',
  title:'Going to mumbai',
  body:' hii i am going to mumbai',
  reactions:2,
  userId:'user_9',
  tags:['vacation','mumbai','enjoy']
},
{
  id:'2',
  title:'Going to Dubai',
  body:' hii i am going to Dubai',
  reactions:20,
  userId:'user_2',
  tags:['Traveling','Dubai']
}
]
export default PostListProvider