import './App.css';

import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import {logo} from './assets'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <BrowserRouter>

      <header className="w-full flex justify-between items-center bg-white px-4 py-4 sm:px-8
      border-b border-b-[#e6ebf4]">

        <Link to="/">
           <img 
               className="w-28 object-contain"
               src={logo} alt="logo" />
        </Link>


        <Link className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md" 
        to="/create-post">
          Create
        </Link>

      </header>


      <main className="sm:p-8 px-4 py-8 w-full
      min-h-[calc(100vh-73px)] bg-[#f9fafe]">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create-post' element={<CreatePost/>}/>
          </Routes>
      </main>
    
    </BrowserRouter>
  );
}

export default App;
