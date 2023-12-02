import React, { useContext, useRef } from 'react'
import { PostList } from '../Store/post-list-store'

const CreatePost = () => {

  const {addPost}=useContext(PostList)
const userIdElement=useRef()
const postTitleElement=useRef()
const PostBodyElement=useRef()
const reactionElement=useRef()
const tagsElement=useRef()

const handleSubmit=(event)=>{
 event.preventDefault()
 const userId=userIdElement.current.value
 const postTitle=postTitleElement.current.value;
 const postBody=PostBodyElement.current.value;
 const reactions=reactionElement.current.value;
 const tags=tagsElement.current.value.split(' ')
 addPost(userId,postTitle,postBody,reactions,tags)
}

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">userId</label>
        <input type="text" className="form-control" id="userId" 
        ref={userIdElement} aria-describedby="emailHelp" placeholder='Enter youre userId' />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="title" 
        ref={postTitleElement}aria-describedby="emailHelp" placeholder='write Post title here' />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Body</label>
        <textarea type="text" rows="4" className="form-control" id="body" 
        ref={PostBodyElement}aria-describedby="emailHelp" placeholder='write Post discription' />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Post Reactions</label>
        <input type="text" className="form-control" id="title" 
        ref={reactionElement}aria-describedby="emailHelp" placeholder='how many people reacted this post' />
        <div className="mb-3">

          <label htmlFor="tags" className="form-label">tags</label>
          <input type="text" className="form-control" id="tags" 
          ref={tagsElement}aria-describedby="emailHelp" placeholder='please enter youre tag using spaces' />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default CreatePost