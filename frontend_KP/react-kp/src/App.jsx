import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import AddBlog from './routes/AddBlog';

function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/addBlog' element={<AddBlog/>}/>
      </Routes>
    </div>
  )
}

export default App
