import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import { useCallback, useState } from 'react'
function App() {
  const [selectedTab, setSelectdTab] = useState("Create Post")

  return (
    <postListProvider>
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectdTab={setSelectdTab} />
      <div className="content">
        <Header />
        {selectedTab == "Home" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
    </postListProvider>
  )
}

export default App
