//common imports
import './App.css';
//import {Routes, Route } from 'react-router-dom';



//Pages imports
import eChamaas from './pages/eChamaas';
import Home from './pages/Home';
import myBlog from './pages/myBlog';
import smartAuctions from './pages/smartAuctions';
import smartBooking from './pages/smartBooking';
import smartLearn from './pages/smartLearn';
import smartMatt from './pages/smartMatt';
import smartPa from './pages/smartPa';
import smartSecretary from './pages/smartSecretary' ;
import smartWellness from './pages/smartWellness';
import errorPage from './pages/errorPage';





function App() {
  return (


<>


<Home />

   {/*Public routes
    
      <Routes>


        <Route path="/" element = {<Home/>} />
        <Route path="/eChamaas" element = {<eChamaas/>} />
        <Route path="/myBlog" element = {<myBlog/>} />
        <Route path="/smartAuctions" element = {<smartAuction/>} />
        <Route path="/smartBooking" element = {<smartBooking/>} />
        <Route path="/smartLearn" element = {<smartLearn/>} />
        <Route path="/smartMatt" element = {<smartMatt/>} />
        <Route path="/smartPa" element = {<smartPa/>} />
        <Route path="/smartSecretary" element = {<smartSecretary/>} />
        <Route path="/smartWellness" element = {<smartWellness/>} />


        <Route path="*" element ={<errorPage/>} />


      </Routes>
  
*/}


</>


  );
}

export default App;
