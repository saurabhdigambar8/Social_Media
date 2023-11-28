import { createContext, useReducer } from "react";

const postList=createContext({
    postList:[],
    addPost:[]
})
const postListProvider=(children)=>{

    const [postList,dispatchPostList]=useReducer()
  return <postList.Provider value={[]}>{children}</postList.Provider>
}
export default postListProvider