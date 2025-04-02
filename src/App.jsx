
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import List from './pages/list'


function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/List' element={<List/>}/>
        </Routes>
     </BrowserRouter>
   
     {/* <p className='b-green-100 text-lg mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis voluptatum perferendis minus fuga laborum distinctio quos. Quasi, debitis magnam doloribus, quam quo, corporis iure voluptates pariatur ea iste maiores?</p> */}
    </>
  )
}

export default App
