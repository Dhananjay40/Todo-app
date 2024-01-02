
import Card from './components/Card'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Card/>
      {/* <Routes>
          <Route path='/' element={<div><Navbar/><HomePage/></div>}/>
          <Route path='/problems' element={<Problems problemlist={problemlist}/>} />

        </Routes> */}
    </div>
  )
}

export default App
