import React, { useContext } from 'react'
import Post from './Post'
import { PostList as postListData } from '../Store/post-list-store'

const PostList = () => {
const {postList}=useContext(postListData)
  return (
    <>
    {postList.map((post)=>(<Post key={post.id} post={post}/>))} 
    </>
  )
}

export default PostList