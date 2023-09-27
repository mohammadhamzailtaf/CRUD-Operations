import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import 'bootstrap/dist/css.bootstrap.min.css'
import Users from './user'
import CreateUser from './createUser'
import UpdateUser from './updateUser'
function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path='/' element = {<Users/>}></Route>
           <Route path='/create' element = {<CreateUser/>}></Route>
           <Route path='/UpdateUser/:id' element = {<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
