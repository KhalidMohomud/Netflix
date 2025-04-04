
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Signuppage from './pages/Signuppage'
import List from './pages/list'
import Browse from './pages/Browse'


function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<LoginPage/>}/>
            <Route path='/Signuppage' element={<Signuppage/>}/>
            <Route path='/List' element={<List/>}/>
            <Route path='/Browse' element={<Browse/>}/>
        </Routes>
     </BrowserRouter>
   
     {/* <p className='b-green-100 text-lg mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis voluptatum perferendis minus fuga laborum distinctio quos. Quasi, debitis magnam doloribus, quam quo, corporis iure voluptates pariatur ea iste maiores?</p> */}
    </>
  )
}

export default App
