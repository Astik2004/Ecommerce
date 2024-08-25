import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<h1>Product Components</h1>} />
          <Route path='/add' element={<h1>Add Components</h1>} />
          <Route path='/update' element={<h1>Update Components</h1>} />
          <Route path='/logout' element={<h1>Logout Components</h1>} />
          <Route path='/profile' element={<h1>Profile Components</h1>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
