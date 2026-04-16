import './style/global.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import InsertTask from './components/InsertTask/InsertTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div className="container m-t2">
      <BrowserRouter>
        <Header/>
          <Routes>
            {/*http://localhost:5173/task */}
            <Route path='/task' element={<InsertTask/>}></Route>

          </Routes>
      
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
