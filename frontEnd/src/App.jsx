import './App.css'
import { useContext } from 'react'
import NavBarComponent from './components/navBar/NavBar.component'
import { Navigate, Route,Routes } from 'react-router-dom'
import { PostContext } from './context/post.context'
import CloseSessionPage from './pages/CloseSession.page'
import FoodPage from './pages/Food.page'
import FoodsPage from './pages/Foods.page'
import HomePage from './pages/Home.page'
import LoginPage from './pages/Login.page'
import NewFoodPage from './pages/NewFood.page'
import NewPostsPage from './pages/NewPosts.page'
import PostPage from './pages/Post.page'
import PostsPage from './pages/Posts.page'
import PrivatePage from './pages/Private.page'
import PrivateAreaPage from './pages/PrivateArea.page'
import RegisterPage from './pages/Register.page'
import FooterComponent from './components/footer/footer.component'

function App() {
  const {user} = useContext(PostContext)
  return (
    <>
    <NavBarComponent/>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/posts/new' element={user? <NewPostsPage></NewPostsPage>:<Navigate to="/"></Navigate>}></Route>
      <Route path='/foods/new' element={user? <NewFoodPage></NewFoodPage>:<Navigate to="/"></Navigate>}></Route>
      <Route path='/posts' element={<PostsPage></PostsPage>}></Route>
      <Route path='/foods' element={<FoodsPage></FoodsPage>}></Route>
      <Route path='/login' element={user?<Navigate to="/Private-Area" replace></Navigate> : <LoginPage></LoginPage>}></Route>
      <Route path='/private' element={<PrivatePage></PrivatePage>}></Route>
      <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      <Route path='/private-Area' element={user?<PrivateAreaPage></PrivateAreaPage>:<Navigate to="/login" replace></Navigate>}></Route>
      <Route path='/logout' element={<CloseSessionPage></CloseSessionPage>}></Route>
      <Route path='/posts/:id' element={<PostPage></PostPage>}></Route>
      <Route path='/foods/:id' element={<FoodPage></FoodPage>}></Route>
      
    </Routes>
    <footer>
      <FooterComponent/>
    </footer>
    </>
  )
}

export default App
