import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home';
import Project from './page/Project';
import Experience from './page/Experience';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ProjectDisplay from './page/ProjectDisplay';
function App() {
  return (
    <div className="App">
      <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Project' element={<Project/>}></Route>
          <Route path='/Project/:id' element={<ProjectDisplay/>}></Route>
          <Route path='/Experience' element={<Experience/>}></Route>
         </Routes>
       <Footer/>
    </div>
  );
}

export default App;
