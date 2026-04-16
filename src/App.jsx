import './style/global.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import InsertTask from './components/InsertTask/InsertTask'

function App() {
  
  return (
    <div className="container m-t2">
      <Header/>
      <InsertTask/>
      <Footer/>
    </div>
  )
}

export default App
